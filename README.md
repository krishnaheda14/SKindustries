# SK Industries - Modern Website

Professional rolling shutter raw materials and laser cutting services website built with Next.js and TypeScript.

## Technologies

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Build**: Static Export (SSG)

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Deployment to Cloudflare Pages

See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for complete deployment instructions.

**Quick Deploy:**

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy modern website"
   git push origin main
   ```

2. Connect repo to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `out`
5. Deploy!

## Project Structure

```
sk-industries/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── catalogue/         # Catalogue page
│   ├── rate-list/         # Rate list page
│   └── contact/           # Contact page
├── components/            # React components
├── public/                # Static assets
│   ├── data/             # Product & design JSON
│   ├── images/           # Product & design images
│   └── icons/            # SVG icons
├── scripts/              # Python extraction scripts
└── next.config.js        # Next.js configuration
```

## Features

- ✅ Modern responsive design
- ✅ No emojis - clean SVG icons throughout
- ✅ TypeScript for type safety
- ✅ Fast static site generation
- ✅ SEO optimized
- ✅ Mobile-first approach
- ✅ Component-based architecture
- ✅ Logo placeholders ready for your branding

## Logo Placement

Replace the placeholder logos in:
- `components/Header.tsx` - Lines 19-24
- `components/Footer.tsx` - Lines 8-13

Add your logo to `public/images/logo.png` and update:

```tsx
<img src="/images/logo.png" alt="SK Industries" className="w-12 h-12" />
```

## Data Updates

When you update products or designs:

```bash
# Extract from PDFs
python scripts/extract_products_multi.py "3-4-5-6 Patti Design.pdf" output_products
python scripts/extract_designs.py "drawing.pdf" output_designs

# Copy to public
Copy-Item -Recurse -Force output_products/images/products public/images/
Copy-Item -Recurse -Force output_designs/images/designs public/images/
Copy-Item -Force output_products/products.json public/data/
Copy-Item -Force output_designs/designs.json public/data/

# Commit and deploy
git add public/
git commit -m "Update product data"
git push
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | Run linter |

## Contact

- **Phone (WhatsApp)**: +91 9834263091
- **Phone**: +91 7385852854
- **Location**: 1/8 Savedi Naka, Manmad Road, Ahmednagar, Maharashtra 414003
- **Established**: 1981

## License

© 2026 SK Industries. All rights reserved.
