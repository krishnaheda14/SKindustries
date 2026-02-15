# Usage Guide - PDF Extraction Pipeline

## ✅ Setup Complete

All dependencies have been installed and the extraction scripts are fully functional.

## 📁 Project Structure

```
f:/skind/
├── scripts/
│   ├── extract_products.py   # Product catalogue extractor
│   ├── extract_designs.py    # Design library extractor
│   └── utils.py              # Helper functions
├── test_extractors.py        # Test suite (already run successfully)
├── requirements.txt          # Python dependencies
└── README.md                 # Project overview
```

## 🚀 How to Use with Your PDFs

### 1. Extract Product Catalogue

Place your Shutter Patti catalogue PDF in the project folder, then run:

```powershell
F:/skind/.venv/Scripts/python.exe scripts/extract_products.py "path/to/your_catalogue.pdf" output_products
```

**Output:**
- `output_products/products.json` - Structured product data grouped by size
- `output_products/images/products/*.jpg` - Individual product images

**JSON Structure:**
```json
{
  "6 inch": {
    "size": "6 inch",
    "material": ["GI", "ZINCRO"],
    "products": [
      {
        "name": "Ganesh Plain",
        "type": "Plain",
        "image": "images/products/6inch-ganesh-plain.jpg"
      }
    ]
  }
}
```

### 2. Extract Design Library

```powershell
F:/skind/.venv/Scripts/python.exe scripts/extract_designs.py "path/to/designs.pdf" output_designs
```

**Output:**
- `output_designs/designs.json` - Array of design entries with codes
- `output_designs/images/designs/*.png` - Individual design images

**JSON Structure:**
```json
[
  {
    "design_code": "D1",
    "category": null,
    "style": null,
    "image": "images/designs/d1.png"
  }
]
```

## 🧪 Testing

Run the test suite to verify everything works:

```powershell
F:/skind/.venv/Scripts/python.exe test_extractors.py
```

This creates sample PDFs and validates the extraction pipeline.

## 📝 Next Steps for Website Integration

Once you have your `products.json` and `designs.json` files:

### For Products Page:
1. Import the JSON into your web framework
2. Create a filter panel for:
   - Size (3", 4", 5", 6")
   - Type (Plain, Deluxe, Perforated)
   - Material (GI, Zincro)
3. Display as a responsive card grid
4. Each card shows: product image, name, size, materials

### For Design Library Page:
1. Use a masonry grid layout (Pinterest-style)
2. Add category filters after manual tagging
3. Click to open modal with full-size image
4. Display design code and metadata

## 🔧 Troubleshooting

### If images are not extracted:
- Ensure your PDF has embedded images (not just scanned pages)
- For scanned PDFs, you'll need OCR (not included in this version)

### If text detection is poor:
- The PDF may be image-based; consider using OCR libraries like `pytesseract`
- Adjust the regex patterns in the extraction scripts

### Manual refinement:
- After extraction, you can manually edit the JSON files to:
  - Correct product names
  - Add categories/styles to designs
  - Update metadata

## 🎨 Recommended Web Frameworks

- **Simple static site:** HTML + CSS + JavaScript with JSON fetch
- **React/Next.js:** Dynamic filtering and routing
- **Vue/Nuxt:** Component-based product cards
- **Backend:** Node.js, Python (Flask/Django), or PHP for API

## 📦 Output Directory Structure

After running both scripts:

```
output_products/
├── products.json
└── images/
    └── products/
        ├── 6inch-ganesh-plain.jpg
        ├── 5inch-ganesh-deluxe.jpg
        └── ...

output_designs/
├── designs.json
└── images/
    └── designs/
        ├── d1.png
        ├── d2.png
        ├── d142.png
        └── ...
```

## ✨ Features Implemented

✅ PDF text extraction  
✅ Image extraction and cropping  
✅ Automatic size detection (3", 4", 5", 6")  
✅ Product type detection (Plain, Deluxe, Perforated)  
✅ Material detection (GI, Zincro)  
✅ Design code detection (D1, D2, ..., D186)  
✅ Structured JSON output  
✅ Filename sanitization  
✅ Error handling  

## 📞 Ready for Website Development

You now have:
- ✅ Clean, structured product data
- ✅ Individual product images
- ✅ Design library with codes
- ✅ Individual design images
- ✅ JSON files ready for web integration

You can now proceed to website design and development!
