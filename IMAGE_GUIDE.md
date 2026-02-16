# 📸 Image Placement Guide

## Quick Reference for Adding Images

### 1. Company Logos

**SK Industries Logo:**
```
Location to add file: f:\skind\public\images\logos\sk-logo.png
Update in file: f:\skind\components\Header.tsx (Line ~25)

Current code:
<span className="text-red-600 font-bold text-lg sm:text-xl">SK</span>

Replace with:
<img src="/images/logos/sk-logo.png" alt="SK Industries" className="w-full h-full object-contain" />
```

**AS Industries Logo:**
```
Location to add file: f:\skind\public\images\logos\as-logo.png
Update in file: f:\skind\components\Header.tsx (Line ~35)

Current code:
<span className="text-red-600 font-bold text-lg sm:text-xl">AS</span>

Replace with:
<img src="/images/logos/as-logo.png" alt="AS Industries" className="w-full h-full object-contain" />
```

### 2. Fitting Material Image

```
Location to add file: f:\skind\public\images\fitting-material.jpg
Already referenced in: f:\skind\components\Categories.tsx

The placeholder is already set up - just add the image to the path above.
Once added, the image will automatically appear in the Shutter Fitting Material section.
```

### 3. French Door Image

```
Location to add file: f:\skind\public\images\french-door.jpg
Already referenced in: f:\skind\components\Categories.tsx

The placeholder is already set up - just add the image to the path above.
Once added, the image will automatically appear in the French Door Sections.
```

## Directory Structure

Create these folders if they don't exist:

```
f:\skind\public\images\
├── logos\
│   ├── sk-logo.png
│   └── as-logo.png
├── fitting-material.jpg
└── french-door.jpg
```

## Image Specifications

### Logo Images:
- **Format**: PNG with transparent or white background
- **Size**: 48x48px minimum (96x96px recommended for retina displays)
- **Style**: Simple, professional, high contrast with white background

### Product Images:
- **Format**: JPG or PNG
- **Size**: 800x600px (4:3 ratio) or larger
- **Quality**: High quality, well-lit product photos
- **File Size**: Keep under 500KB for fast loading (use compression tools like TinyPNG)

## How to Add Images

1. **Save images to the specified paths**
2. **For logos only** - Update the Header component with the img tags shown above
3. **For product images** - They're already referenced, just add the files
4. **Refresh the browser** - Images will appear automatically

## Testing

After adding images:
```bash
npm run dev
```

Visit:
- Home page: Check logos in header
- Scroll down: Check Shutter Fitting Material section
- Scroll down: Check French Door section

## Need Help?

If images don't appear:
1. Check file paths are exact (including extensions)
2. Clear browser cache (Ctrl+F5)
3. Verify files are in the correct folder
4. Check console for 404 errors (F12 in browser)

---

**All Changes Are Production Ready** ✅
**Build Status**: Passing ✅
**Theme**: White & Red Applied ✅
