"""
Extract ALL products from PDF - multiple products per page
"""
import os
import sys
import json
import re
import io
from pathlib import Path

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
        brightness = ImageEnhance.Brightness(img)
        img = brightness.enhance(1.2)
        
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
    """Extract the largest/best image from a page."""
    images = page.get_images(full=True)
    if not images:
        return None
    
    # Find largest image (skip tiny images < 5KB which are likely bullets/icons)
    best_img = None
    best_size = 5000  # Minimum 5KB
    
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

def detect_size(text):
    """Detect product size from text."""
    m = SIZE_RE.search(text)
    if m:
        return f'{m.group(1)}"'
    return None

def detect_materials(text):
    """Detect materials from text."""
    materials = []
    text_upper = text.upper()
    if 'GI' in text_upper or 'G.I' in text_upper:
        materials.append('GI')
    if 'ZINCRO' in text_upper or 'ZINC' in text_upper:
        materials.append('ZINCRO')
    return materials

def detect_type(text):
    """Detect product type."""
    text_lower = text.lower()
    for keyword in TYPE_KEYWORDS:
        if keyword in text_lower:
            return keyword.capitalize()
    return "Plain"

def page_text(page):
    """Extract text blocks, filtering out image blocks."""
    blocks = page.get_text("blocks")
    # Filter out image blocks (type != 0) and join text blocks only
    texts = [b[4].strip() for b in sorted(blocks, key=lambda x: (x[1], x[0])) 
             if len(b) > 6 and b[6] == 0 and b[4].strip()]
    return "\n".join(texts)

def extract_products_from_page(page_text, page_num):
    """Extract all numbered products from a page."""
    products = []
    lines = [l.strip() for l in page_text.splitlines() if l.strip()]
    
    for ln in lines:
        # Look for numbered products: "1. Product Name", "2. Another Product", etc.
        match = re.match(r'^(\d+)\.\s+(.+)$', ln)
        if match:
            num = match.group(1)
            name = match.group(2).strip()
            # Clean up parenthetical notes
            products.append(name)
    
    return products

def main(pdf_path, out_dir):
    """Extract ALL products from catalogue with production-grade quality."""
    out_dir = Path(out_dir)
    images_dir = out_dir / "images" / "products"
    ensure_dir(images_dir)

    doc = fitz.open(pdf_path)
    result = {}
    product_counter = 0
    
    print(f"Processing {len(doc)} pages from {pdf_path}")

    for pno in range(len(doc)):
        page = doc[pno]
        text = page_text(page)
        size = detect_size(text) or "unknown"
        materials = detect_materials(text)
        
        # Extract all products from this page
        products = extract_products_from_page(text, pno + 1)
        
        if not products:
            # Fallback to first line after headers
            lines = [l.strip() for l in text.splitlines() if l.strip()]
            for ln in lines:
                if 'SHUTTER PATTI DESIGNS' in ln.upper() or 'WITH SIZES' in ln.upper():
                    continue
                if SIZE_RE.search(ln) and 'Designs' in ln:
                    continue
                if ln.startswith('\uf0b7'):
                    continue
                if ln.lower() in ['gi', 'zincro', 'material', 'materials']:
                    continue
                if len(ln) >= 3:
                    products = [ln]
                    break
        
        if not products:
            products = [f"Product-Page-{pno+1}"]
        
        # Extract image once per page
        imgdict = extract_best_image_for_page(doc, page)
        img_path = None
        
        if imgdict:
            try:
                enhanced_bytes = enhance_image_bytes(imgdict["image"], format="PNG")
                product_counter += 1
                fname = sanitize_filename(f"product-{product_counter:03d}-{size}-{products[0][:30]}") + ".png"
                img_path = str(images_dir / fname)
                
                with open(img_path, "wb") as f:
                    f.write(enhanced_bytes)
                
            except Exception as e:
                print(f"Page {pno+1}: Failed to save image: {e}")
        
        # Add all products from this page to result
        size_key = size.replace('"', 'inch') if '"' in size else size
        if size_key not in result:
            result[size_key] = {"size": size_key, "material": materials, "products": []}
        
        for prod_name in products:
            ptype = detect_type(prod_name)
            result[size_key]["products"].append({
                "name": prod_name,
                "type": ptype,
                "image": f"images/products/{Path(img_path).name}" if img_path else None,
            })
            print(f"  ✓ {prod_name} ({size})")
        
        if not img_path:
            print(f"  ⚠ Page {pno+1}: No image extracted")

    # Save JSON
    out_json = out_dir / "products.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Extraction complete!")
    print(f"📊 Size categories: {len(result)}")
    print(f"📊 Total products: {sum(len(cat['products']) for cat in result.values())}")
    print(f"📁 Output: {out_json}")


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python scripts/extract_products_multi.py <catalogue.pdf> <out_dir>")
        sys.exit(1)
    pdf_path = sys.argv[1]
    out_dir = sys.argv[2]
    main(pdf_path, out_dir)
