"""Extract design codes (D1, D2...) and crop associated visuals from a designs PDF.

Production-Grade Extraction with:
- Intelligent image block detection
- Dynamic cropping based on actual content
- Brightness and contrast enhancement
- High-quality rendering

Usage: python scripts/extract_designs.py <designs.pdf> <out_dir>
Creates: <out_dir>/designs.json and <out_dir>/images/designs/*.jpg
"""
import sys
import os
import json
import re
from pathlib import Path
import io

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import fitz
from PIL import Image, ImageEnhance
from scripts.utils import sanitize_filename, ensure_dir

CODE_RE = re.compile(r"\bD\s*0*(\d{1,4})\b", re.I)

def enhance_image(pix, outpath):
    """Apply brightness and contrast enhancement to make designs clearer."""
    try:
        # Convert PyMuPDF pixmap to PIL Image
        img_data = pix.tobytes("png")
        img = Image.open(io.BytesIO(img_data))
        
        # Enhance brightness (+20%)
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(1.2)
        
        # Enhance contrast (+15%)
        contrast = ImageEnhance.Contrast(img)
        img = contrast.enhance(1.15)
        
        # Enhance sharpness (+10%)
        sharpness = ImageEnhance.Sharpness(img)
        img = sharpness.enhance(1.1)
        
        # Save enhanced image
        img.save(outpath, quality=95, optimize=True)
        return True
    except Exception as e:
        print(f"Enhancement failed: {e}, saving original")
        pix.save(str(outpath))
        return False

def find_nearest_image_block(page, code_rect):
    """Find the nearest image block to a design code using block detection."""
    try:
        blocks = page.get_text("dict")["blocks"]
        image_blocks = [b for b in blocks if b.get("type") == 1]  # type 1 = image
        
        if not image_blocks:
            return None
        
        nearest = None
        min_distance = float("inf")
        
        for b in image_blocks:
            img_rect = fitz.Rect(b["bbox"])
            # Calculate distance from code bottom to image top
            distance = abs(img_rect.y0 - code_rect.y1)
            
            # Also check if image is roughly in same horizontal area
            horizontal_overlap = (
                img_rect.x0 < code_rect.x1 and 
                img_rect.x1 > code_rect.x0
            )
            
            if distance < min_distance and horizontal_overlap:
                min_distance = distance
                nearest = img_rect
        
        return nearest
    except Exception as e:
        print(f"Block detection failed: {e}")
        return None

def detect_column_bounds(page, rect):
    """Detect if page has columns and return appropriate bounds."""
    page_width = page.rect.width
    page_height = page.rect.height
    
    # Detect 2-column layout
    mid_x = page_width / 2
    
    if rect.x0 < mid_x:
        # Left column
        return 0, mid_x
    else:
        # Right column
        return mid_x, page_width

def smart_crop_region(page, code_rect, image_rect=None):
    """Create intelligent crop region based on detected image or adaptive fallback."""
    if image_rect:
        # Use detected image block with small margins
        margin = 10
        crop = fitz.Rect(
            max(0, image_rect.x0 - margin),
            max(0, image_rect.y0 - margin),
            min(page.rect.width, image_rect.x1 + margin),
            min(page.rect.height, image_rect.y1 + margin)
        )
        return crop
    
    # Fallback: Use column detection for width, adaptive height
    left, right = detect_column_bounds(page, code_rect)
    
    # Start from below the code
    top = code_rect.y1 + 5
    
    # Try to find next text block to determine height
    blocks = page.get_text("blocks")
    next_text_y = page.rect.height
    
    for b in blocks:
        b_rect = fitz.Rect(b[0], b[1], b[2], b[3])
        # If it's a text block below current code
        if b[6] == 0 and b_rect.y0 > code_rect.y1 + 50:  # type 0 = text, with some gap
            if b_rect.y0 < next_text_y:
                next_text_y = b_rect.y0
    
    # Use space until next text or reasonable default
    height = min(next_text_y - top - 10, 400)  # max 400px
    bottom = min(page.rect.height, top + height)
    
    crop = fitz.Rect(left, top, right, bottom)
    return crop

def find_codes_on_page(page):
    """Find all design codes on a page with their bounding boxes."""
    codes = []
    blocks = page.get_text("blocks")
    for b in blocks:
        x0, y0, x1, y1, text = b[0], b[1], b[2], b[3], b[4]
        for m in CODE_RE.finditer(text):
            code_num = m.group(1)
            full = f"D{int(code_num)}"
            codes.append((full, fitz.Rect(x0, y0, x1, y1)))
    return codes

def main(pdf_path, out_dir):
    """Extract designs with production-grade quality."""
    out_dir = Path(out_dir)
    images_dir = out_dir / "images" / "designs"
    ensure_dir(images_dir)

    doc = fitz.open(pdf_path)
    designs = []
    
    print(f"Processing {len(doc)} pages from {pdf_path}")

    for pno in range(len(doc)):
        page = doc[pno]
        codes = find_codes_on_page(page)
        
        if not codes:
            print(f"Page {pno+1}: No codes found, extracting images directly")
            # Fallback: extract all images on page
            imgs = page.get_images(full=True)
            idx = 1
            for im in imgs:
                xref = im[0]
                imgdict = doc.extract_image(xref)
                name = sanitize_filename(f"page{pno+1}-img{idx}") + "." + imgdict.get("ext", "jpg")
                outpath = images_dir / name
                
                # Save with enhancement if possible
                try:
                    img = Image.open(io.BytesIO(imgdict["image"]))
                    # Enhance
                    enhancer = ImageEnhance.Brightness(img)
                    img = enhancer.enhance(1.2)
                    contrast = ImageEnhance.Contrast(img)
                    img = contrast.enhance(1.15)
                    img.save(outpath, quality=95)
                except:
                    with open(outpath, "wb") as f:
                        f.write(imgdict["image"])
                
                designs.append({
                    "design_code": name.replace('.', '_'),
                    "category": None,
                    "style": None,
                    "image": f"images/designs/{name}"
                })
                idx += 1
            continue

        print(f"Page {pno+1}: Found {len(codes)} design codes: {', '.join([c[0] for c in codes])}")

        for code, rect in codes:
            try:
                # Step 1: Try to find nearest image block
                image_rect = find_nearest_image_block(page, rect)
                
                # Step 2: Create smart crop region
                crop = smart_crop_region(page, rect, image_rect)
                
                # Step 3: Render at high quality with 2x zoom
                mat = fitz.Matrix(2, 2)  # 2x zoom for better quality
                pix = page.get_pixmap(
                    matrix=mat, 
                    clip=crop, 
                    colorspace=fitz.csRGB,
                    alpha=False
                )
                
                # Step 4: Save with enhancement
                name = sanitize_filename(code) + ".png"
                outpath = images_dir / name
                
                enhance_image(pix, str(outpath))
                
                designs.append({
                    "design_code": code,
                    "category": None,
                    "style": None,
                    "image": f"images/designs/{name}"
                })
                
                print(f"  ✓ Extracted {code}")
                
            except Exception as e:
                print(f"  ✗ Failed to extract {code}: {e}")
                # Last resort fallback: try to extract first page image
                try:
                    imgs = page.get_images(full=True)
                    if imgs:
                        xref = imgs[0][0]
                        imgdict = doc.extract_image(xref)
                        name = sanitize_filename(code) + "." + imgdict.get("ext", "jpg")
                        outpath = images_dir / name
                        with open(outpath, "wb") as f:
                            f.write(imgdict["image"])
                        designs.append({
                            "design_code": code,
                            "category": None,
                            "style": None,
                            "image": f"images/designs/{name}"
                        })
                        print(f"  ⚠ {code} extracted using fallback method")
                except Exception as e2:
                    print(f"  ✗✗ Complete failure for {code}: {e2}")

    # Save JSON
    out_json = out_dir / "designs.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(designs, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Extraction complete!")
    print(f"📊 Total designs extracted: {len(designs)}")
    print(f"📁 Output: {out_json}")
    print(f"🖼️  Images: {images_dir}")


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python scripts/extract_designs.py <designs.pdf> <out_dir>")
        sys.exit(1)
    pdf_path = sys.argv[1]
    out_dir = sys.argv[2]
    main(pdf_path, out_dir)
