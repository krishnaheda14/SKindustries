"""Extract structured product entries from a product-catalogue PDF.

Production-Grade Extraction with:
- Intelligent image block detection
- Enhanced brightness and contrast
- High-quality rendering
- Better product name detection

Usage: python scripts/extract_products.py <catalogue.pdf> <out_dir>
Creates: <out_dir>/products.json and <out_dir>/images/products/*.jpg
"""
import sys
import os
import json
import re
from pathlib import Path
import io

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import fitz  # PyMuPDF
from PIL import Image, ImageEnhance
from scripts.utils import sanitize_filename, ensure_dir

SIZE_RE = re.compile(r'([3-6])\s?["\u201d]', re.I)
TYPE_KEYWORDS = ["plain", "deluxe", "perforated", "special", "slot", "laxmi"]

def enhance_image_bytes(img_bytes, format="PNG"):
    """Apply brightness and contrast enhancement to image bytes."""
    try:
        img = Image.open(io.BytesIO(img_bytes))
        
        # Enhance brightness (+20%)
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(1.2)
        
        # Enhance contrast (+15%)
        contrast = ImageEnhance.Contrast(img)
        img = contrast.enhance(1.15)
        
        # Enhance sharpness (+10%)
        sharpness = ImageEnhance.Sharpness(img)
        img = sharpness.enhance(1.1)
        
        # Save to bytes
        buf = io.BytesIO()
        img.save(buf, format=format, quality=95, optimize=True)
        return buf.getvalue()
    except Exception as e:
        print(f"Enhancement failed: {e}, using original")
        return img_bytes

def extract_best_image_for_page(doc, page):
    """Extract the largest/best image from a page with enhancement."""
    images = page.get_images(full=True)
    if not images:
        # Try rendering page section if no embedded images
        return extract_page_render(page)
    
    # Find largest image
    best_img = None
    best_size = 0
    
    for img_index, img in enumerate(images):
        xref = img[0]
        try:
            imgdict = doc.extract_image(xref)
            size = len(imgdict["image"])
            if size > best_size:
                best_size = size
                best_img = imgdict
        except:
            continue
    
    return best_img

def extract_page_render(page):
    """Render page section as image with high quality."""
    try:
        # Render center section of page at high quality
        page_rect = page.rect
        # Crop to center region (where product images usually are)
        crop = fitz.Rect(
            page_rect.width * 0.1,
            page_rect.height * 0.2,
            page_rect.width * 0.9,
            page_rect.height * 0.8
        )
        
        mat = fitz.Matrix(2, 2)  # 2x zoom
        pix = page.get_pixmap(matrix=mat, clip=crop, colorspace=fitz.csRGB, alpha=False)
        
        img_bytes = pix.tobytes("png")
        return {"image": img_bytes, "ext": "png"}
    except:
        return None

def detect_size(text: str):
    m = SIZE_RE.search(text)
    if m:
        s = m.group(0)
        return s.replace('”', '"').strip()
    return None

def detect_materials(text: str):
    mats = []
    for mat in ["zincro", "gi"]:
        if mat in text.lower():
            mats.append(mat.upper())
    return mats

def detect_type(text: str):
    t = None
    for k in TYPE_KEYWORDS:
        if k in text.lower():
            t = k.capitalize()
            break
    return t

def page_text(page):
    blocks = page.get_text("blocks")
    # Filter out image blocks (type != 0) and join text blocks only
    texts = [b[4].strip() for b in sorted(blocks, key=lambda x: (x[1], x[0])) 
             if len(b) > 6 and b[6] == 0 and b[4].strip()]
    return "\n".join(texts)

def main(pdf_path, out_dir):
    """Extract products with production-grade quality."""
    out_dir = Path(out_dir)
    images_dir = out_dir / "images" / "products"
    ensure_dir(images_dir)

    doc = fitz.open(pdf_path)
    result = {}
    
    print(f"Processing {len(doc)} pages from {pdf_path}")

    for pno in range(len(doc)):
        page = doc[pno]
        text = page_text(page)
        size = detect_size(text) or "unknown"
        ptype = detect_type(text) or "Unknown"
        materials = detect_materials(text)

        # Improved product name detection
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        product_name = None
        
        for ln in lines:
            # Skip headers
            if 'SHUTTER PATTI DESIGNS' in ln.upper() or 'WITH SIZES' in ln.upper():
                continue
            # Skip size indicators (lines describing what size category)
            if SIZE_RE.search(ln) and 'Designs' in ln:
                continue
            # Skip bullet/numbered lines that are size descriptions
            if ln.startswith('\uf0b7'):
                continue
            # Skip material-only lines
            if ln.lower() in ['gi', 'zincro', 'material', 'materials']:
                continue
            # Skip very short lines (likely headers)
            if len(ln) < 3:
                continue
            # Extract product name from numbered list
            if ln[0:2].rstrip('.').isdigit():
                product_name = ln.split('.', 1)[1].strip() if '.' in ln else ln
                break
            
            # Take the first remaining line as product name
            product_name = ln
            break

        if not product_name:
            product_name = f"Product-Page-{pno+1}"

        # Extract and enhance image
        imgdict = extract_best_image_for_page(doc, page)
        img_path = None
        
        if imgdict:
            try:
                # Enhance image
                enhanced_bytes = enhance_image_bytes(imgdict["image"], format="PNG")
                
                # Make filename unique with page number to avoid collisions
                fname = sanitize_filename(f"{size}-{product_name}-p{pno+1}") + ".png"
                img_path = str(images_dir / fname)
                
                with open(img_path, "wb") as f:
                    f.write(enhanced_bytes)
                
                print(f"Page {pno+1}: ✓ {product_name} ({size}) - Image saved")
                
            except Exception as e:
                print(f"Page {pno+1}: ✗ Failed to save image for {product_name}: {e}")

        size_key = size.replace('"', 'inch') if '"' in size else size
        if size_key not in result:
            result[size_key] = {"size": size_key, "material": materials, "products": []}

        result[size_key]["products"].append({
            "name": product_name,
            "type": ptype,
            "image": f"images/products/{Path(img_path).name}" if img_path else None,
        })

    # Save JSON
    out_json = out_dir / "products.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Extraction complete!")
    print(f"📊 Total size categories: {len(result)}")
    print(f"📊 Total products: {sum(len(cat['products']) for cat in result.values())}")
    print(f"📁 Output: {out_json}")
    print(f"🖼️  Images: {images_dir}")


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python scripts/extract_products.py <catalogue.pdf> <out_dir>")
        sys.exit(1)
    pdf_path = sys.argv[1]
    out_dir = sys.argv[2]
    main(pdf_path, out_dir)
