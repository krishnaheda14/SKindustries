"""Test script to validate the extraction pipeline works correctly"""
import sys
import os
from pathlib import Path
import fitz  # PyMuPDF
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from scripts.utils import sanitize_filename, ensure_dir, save_image_bytes
from scripts import extract_products, extract_designs

def create_test_product_pdf(path):
    """Create a sample product catalogue PDF for testing"""
    doc = fitz.open()
    
    # Page 1: 6" Ganesh Plain
    page = doc.new_page(width=595, height=842)
    page.insert_text((100, 100), "6 inch Shutter Patti", fontsize=20)
    page.insert_text((100, 150), "Ganesh Plain", fontsize=16)
    page.insert_text((100, 180), "Material: GI, Zincro", fontsize=12)
    
    # Add a simple colored rectangle as "image"
    rect = fitz.Rect(100, 220, 300, 420)
    page.draw_rect(rect, color=(0.8, 0.2, 0.2), fill=(0.8, 0.2, 0.2))
    
    # Page 2: 5" Ganesh Deluxe
    page = doc.new_page(width=595, height=842)
    page.insert_text((100, 100), "5 inch Shutter Patti", fontsize=20)
    page.insert_text((100, 150), "Ganesh Deluxe", fontsize=16)
    page.insert_text((100, 180), "Material: GI", fontsize=12)
    
    rect = fitz.Rect(100, 220, 300, 420)
    page.draw_rect(rect, color=(0.2, 0.8, 0.2), fill=(0.2, 0.8, 0.2))
    
    # Page 3: 4" Plain Perforated
    page = doc.new_page(width=595, height=842)
    page.insert_text((100, 100), "4 inch Patti", fontsize=20)
    page.insert_text((100, 150), "Plain Perforated", fontsize=16)
    
    rect = fitz.Rect(100, 220, 300, 420)
    page.draw_rect(rect, color=(0.2, 0.2, 0.8), fill=(0.2, 0.2, 0.8))
    
    doc.save(path)
    doc.close()
    print(f"✓ Created test product PDF: {path}")

def create_test_designs_pdf(path):
    """Create a sample designs PDF with D1, D2, etc. codes"""
    doc = fitz.open()
    
    # Page 1: Grid with D1, D2, D3, D4
    page = doc.new_page(width=595, height=842)
    
    codes = ["D1", "D2", "D3", "D4"]
    x_pos = [100, 350, 100, 350]
    y_pos = [100, 100, 450, 450]
    colors = [(0.9, 0.3, 0.3), (0.3, 0.9, 0.3), (0.3, 0.3, 0.9), (0.9, 0.9, 0.3)]
    
    for i, code in enumerate(codes):
        # Add code label
        page.insert_text((x_pos[i], y_pos[i]), code, fontsize=14, color=(1, 0.4, 0.6))
        
        # Add colored rectangle below as design
        rect = fitz.Rect(x_pos[i], y_pos[i] + 20, x_pos[i] + 200, y_pos[i] + 220)
        page.draw_rect(rect, color=colors[i], fill=colors[i])
    
    # Page 2: More designs D5, D6
    page = doc.new_page(width=595, height=842)
    page.insert_text((100, 100), "D5", fontsize=14, color=(1, 0.4, 0.6))
    rect = fitz.Rect(100, 120, 300, 320)
    page.draw_rect(rect, color=(0.7, 0.5, 0.9), fill=(0.7, 0.5, 0.9))
    
    page.insert_text((350, 100), "D142", fontsize=14, color=(1, 0.4, 0.6))
    rect = fitz.Rect(350, 120, 550, 320)
    page.draw_rect(rect, color=(0.5, 0.9, 0.7), fill=(0.5, 0.9, 0.7))
    
    doc.save(path)
    doc.close()
    print(f"✓ Created test designs PDF: {path}")

def test_utils():
    """Test utility functions"""
    print("\nTesting utility functions...")
    
    # Test sanitize_filename
    assert sanitize_filename("Ganesh Plain 6\"") == "ganesh-plain-6"
    assert sanitize_filename("Design / Test*File?") == "design-test-file"
    print("✓ sanitize_filename works")
    
    # Test ensure_dir
    test_dir = Path("test_output/temp")
    ensure_dir(test_dir)
    assert test_dir.exists()
    print("✓ ensure_dir works")
    
    # Test save_image_bytes
    img = Image.new('RGB', (100, 100), color=(255, 0, 0))
    buf = BytesIO()
    img.save(buf, format='PNG')
    img_bytes = buf.getvalue()
    
    img_path = "test_output/temp/test_img.png"
    save_image_bytes(img_bytes, img_path)
    assert Path(img_path).exists()
    print("✓ save_image_bytes works")

def test_product_extraction():
    """Test product extraction"""
    print("\nTesting product extraction...")
    
    test_pdf = "test_output/test_products.pdf"
    out_dir = "test_output/products"
    
    ensure_dir("test_output")
    create_test_product_pdf(test_pdf)
    
    # Run extraction
    extract_products.main(test_pdf, out_dir)
    
    # Verify output
    json_path = Path(out_dir) / "products.json"
    assert json_path.exists(), "products.json not created"
    
    import json
    with open(json_path) as f:
        data = json.load(f)
    
    assert len(data) > 0, "No products extracted"
    print(f"✓ Extracted {len(data)} size categories")
    
    # Check images directory
    img_dir = Path(out_dir) / "images" / "products"
    if img_dir.exists():
        imgs = list(img_dir.glob("*"))
        print(f"✓ Created {len(imgs)} product images")
    
    print("✓ Product extraction successful")

def test_design_extraction():
    """Test design extraction"""
    print("\nTesting design extraction...")
    
    test_pdf = "test_output/test_designs.pdf"
    out_dir = "test_output/designs"
    
    ensure_dir("test_output")
    create_test_designs_pdf(test_pdf)
    
    # Run extraction
    extract_designs.main(test_pdf, out_dir)
    
    # Verify output
    json_path = Path(out_dir) / "designs.json"
    assert json_path.exists(), "designs.json not created"
    
    import json
    with open(json_path) as f:
        data = json.load(f)
    
    assert len(data) > 0, "No designs extracted"
    print(f"✓ Extracted {len(data)} designs")
    
    # Check for specific design codes
    codes = [d['design_code'] for d in data]
    print(f"  Found codes: {', '.join(codes[:10])}")
    
    # Check images directory
    img_dir = Path(out_dir) / "images" / "designs"
    if img_dir.exists():
        imgs = list(img_dir.glob("*"))
        print(f"✓ Created {len(imgs)} design images")
    
    print("✓ Design extraction successful")

def main():
    print("=" * 60)
    print("Testing PDF Extraction Pipeline")
    print("=" * 60)
    
    try:
        test_utils()
        test_product_extraction()
        test_design_extraction()
        
        print("\n" + "=" * 60)
        print("✅ ALL TESTS PASSED")
        print("=" * 60)
        print("\nThe extraction scripts are working correctly!")
        print("\nTo use with real PDFs:")
        print("  python scripts/extract_products.py your_catalogue.pdf output_products")
        print("  python scripts/extract_designs.py your_designs.pdf output_designs")
        
    except Exception as e:
        print(f"\n❌ TEST FAILED: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    main()
