"""Extract structured product entries from a product-catalogue PDF.

Usage: python scripts/extract_products.py <catalogue.pdf> <out_dir>
Creates: <out_dir>/products.json and <out_dir>/images/products/*.jpg
"""
import sys
import os
import json
import re
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import fitz  # PyMuPDF
from scripts.utils import sanitize_filename, ensure_dir, save_image_bytes

SIZE_RE = re.compile(r'\b(6\s?(?:"|inch|inches)|5\s?(?:"|inch|inches)|4\s?(?:"|inch|inches)|3\s?(?:"|inch|inches))\b', re.I)
TYPE_KEYWORDS = ["plain", "deluxe", "perforated", "special", "slot", "laxmi"]

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

def extract_first_image_for_page(doc, page):
    images = page.get_images(full=True)
    if not images:
        return None
    # take first image
    xref = images[0][0]
    imgdict = doc.extract_image(xref)
    return imgdict

def page_text(page):
    blocks = page.get_text("blocks")
    # join block texts to a single string (ordered)
    texts = [b[4].strip() for b in sorted(blocks, key=lambda x: (x[1], x[0])) if b[4].strip()]
    return "\n".join(texts)

def main(pdf_path, out_dir):
    out_dir = Path(out_dir)
    images_dir = out_dir / "images" / "products"
    ensure_dir(images_dir)

    doc = fitz.open(pdf_path)
    result = {}

    for pno in range(len(doc)):
        page = doc[pno]
        text = page_text(page)
        size = detect_size(text) or "unknown"
        ptype = detect_type(text) or "Unknown"
        materials = detect_materials(text)

        # heuristics to get product name: first non-size, non-type line
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        product_name = None
        for ln in lines:
            if SIZE_RE.search(ln):
                continue
            if any(tk.lower() in ln.lower() for tk in TYPE_KEYWORDS):
                # maybe the next line is the product name
                continue
            product_name = ln
            break

        if not product_name:
            product_name = f"page-{pno+1}"

        # extract image
        imgdict = extract_first_image_for_page(doc, page)
        img_path = None
        if imgdict:
            fname = sanitize_filename(f"{size}-{product_name}") + "." + imgdict.get("ext", "png")
            img_path = str(images_dir / fname)
            try:
                save_image_bytes(imgdict["image"], img_path)
            except Exception:
                pass

        size_key = size.replace('"', 'inch') if '"' in size else size
        if size_key not in result:
            result[size_key] = {"size": size_key, "material": materials, "products": []}

        result[size_key]["products"].append({
            "name": product_name,
            "type": ptype,
            "image": f"images/products/{Path(img_path).name}" if img_path else None,
        })

    out_json = out_dir / "products.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"Wrote: {out_json}")


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python scripts/extract_products.py <catalogue.pdf> <out_dir>")
        sys.exit(1)
    pdf_path = sys.argv[1]
    out_dir = sys.argv[2]
    main(pdf_path, out_dir)
