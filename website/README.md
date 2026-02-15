# SK Industries & AS Industries - Website

Professional industrial website for a 40+ year old rolling shutter raw materials and laser cutting manufacturing business.

## 🏢 Project Overview

This is a **static, desktop-only, professional industrial website** designed for SK Industries and AS Industries, established in 1981. The website showcases rolling shutter materials, door sections, spare parts, and laser cutting services.

### Design Philosophy
- **Industrial/Manufacturing aesthetic** - Not a startup or tech company
- **Established, trustworthy appearance** - 40+ years in business
- **Professional and serious tone** - No trendy or playful elements
- **Desktop-focused** - Optimized for 1366px+ screens
- **No ecommerce functionality** - Information and contact only

## 📁 Project Structure

```
website/
├── index.html          # Home page
├── catalogue.html      # Product catalogue page
├── ratelist.html       # Rate list page
├── contact.html        # Contact page with map
├── css/
│   └── styles.css      # Complete design system
└── js/
    └── script.js       # Interactive functionality
```

## 🎨 Design System

### Color Palette
- **Dark Grey**: `#2B2B2B` - Primary dark color
- **Steel Blue**: `#2F4F6F` - Brand color
- **Accent Yellow**: `#D4AF37` - Highlights and CTAs
- **White**: `#FFFFFF` - Clean backgrounds
- **Light Grey**: `#F5F5F5` - Section backgrounds

### Typography
- **Font Family**: Roboto (sans-serif)
- **Headings**: Bold, strong, clear hierarchy
- **Body**: 16px base size, 1.6 line height

### Spacing System
- **XS**: 8px
- **SM**: 16px
- **MD**: 24px
- **LG**: 40px
- **XL**: 60px
- **XXL**: 80px

### Components
- Sticky header with dual logo display
- Hero sections with industrial gradients
- Category cards with hover effects
- Product grid layouts (4-column)
- Professional table styling
- Steel-blue accent sections
- WhatsApp floating button
- Clean footer with 4-column layout

## 🌐 Pages

### 1. Home Page (index.html)
- Hero section with company value proposition
- "What We Offer" - 5 category blocks
- "Why Choose Us" - 5 feature blocks
- About section highlighting 40+ years
- Call-to-action section

### 2. Catalogue Page (catalogue.html)
**Three main sections:**

#### A) Rolling Shutter Products
- S.R. GI, Zincro, Ganesh GI
- Guides (2" - 5")
- Springs (11" - 24")
- Covers, Brackets, Gearbox
- Bearings, Pulleys, Pipes
- Lock Patti, Fittings, Europa Locks

#### B) Door Sections
- 16, 18, 20 Gauge
- Plain, Chamfer, DD Design, French styles
- Custom length availability

#### C) Laser Cutting Designs
- 1.5mm to 4mm thickness
- Design gallery with codes
- Custom design services

### 3. Rate List Page (ratelist.html)
- Clean HTML table layout
- Four sections:
  - Rolling shutter materials
  - Springs, covers & brackets
  - Spare parts & fittings
  - Door sections
  - Laser cutting services
- Professional invoice-style design
- Alternating row colors

### 4. Contact Page (contact.html)
- Dual company contact cards (SKI & ASI)
- Phone numbers: +91 98342 63091, +91 73858 52854
- WhatsApp links
- Address: 1/8 Savedi Naka, Manmad Road, Ahmednagar
- Google Maps embed
- Working hours section
- "What We Can Help You With" grid

## 🚀 Deployment

### Option 1: Simple Hosting
Upload all files to any web hosting service:
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Traditional web hosting (cPanel)

### Option 2: Local Testing
1. Open `index.html` directly in browser
2. Or use a local server:
   ```powershell
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000`

## 📱 Contact Integration

### Phone Numbers
- **SKI**: +91 98342 63091
- **ASI**: +91 73858 52854

### WhatsApp
- Floating button (bottom-right)
- Direct link to +91 98342 63091
- Also available on contact page

### Address
```
1/8 Savedi Naka, Manmad Road
Ahmednagar, Maharashtra – 414003
```

## 🔧 Customization Guide

### Updating Products
Edit the product cards in `catalogue.html`:
```html
<div class="product-card">
    <div class="product-image">...</div>
    <div class="product-info">
        <h4>Product Name</h4>
        <p class="product-desc">Description</p>
        <a href="tel:+919834263091" class="btn btn-secondary">Call for Details</a>
    </div>
</div>
```

### Updating Rates
Edit the rate tables in `ratelist.html`:
```html
<tr>
    <td>Product Name</td>
    <td style="text-align: right;">Call for Rate</td>
</tr>
```

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --dark-grey: #2B2B2B;
    --steel-blue: #2F4F6F;
    --accent-yellow: #D4AF37;
}
```

### Adding Images
1. Create `website/images/` folder
2. Add product images
3. Update image paths in HTML:
```html
<img src="images/product-name.jpg" alt="Product Name">
```

## 🎯 Features

### Implemented
✅ Sticky navigation header  
✅ Smooth scroll for anchor links  
✅ Active page highlighting  
✅ Hover effects on cards and buttons  
✅ WhatsApp integration  
✅ Google Maps embed  
✅ Professional table styling  
✅ Clean grid layouts  
✅ Industrial color scheme  
✅ Desktop-optimized layout  

### NOT Included (By Design)
❌ Mobile responsiveness  
❌ Login/authentication  
❌ Shopping cart  
❌ Payment processing  
❌ Contact forms  
❌ Admin panel  
❌ Database integration  
❌ User accounts  

## 🔒 Design Constraints

### What to AVOID
- Modern startup/SaaS aesthetics
- Bright, playful colors
- Abstract geometric shapes
- Heavy animations
- Glassmorphism or neumorphism
- Rounded, soft design elements
- Corporate tech company look

### What to MAINTAIN
- Industrial strength and reliability
- Established business credibility
- Professional seriousness
- Metal fabrication theme
- Structured, grid-based layouts
- Clear information hierarchy
- Trust-building elements

## 📊 Browser Support

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

Minimum screen width: 1366px

## 💼 Business Context

**Company Names**: SKI (SK Industries) & ASI (AS Industries)  
**Established**: 1981  
**Industry**: Rolling Shutter Raw Materials & Laser Cutting  
**Audience**: Fabricators, Contractors, Hardware Suppliers, Workshop Owners  

## 📞 Support

For website updates or technical questions, contact the development team or refer to this documentation.

## 📝 License

© 2026 SK Industries & AS Industries. All rights reserved.

---

**Version**: 1.0  
**Last Updated**: February 2026  
**Status**: Production Ready
