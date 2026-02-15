# Design System Specification
## SK Industries & AS Industries Website

---

## 🎨 Visual Design Language

### Design Philosophy
This website represents a **40+ year old industrial manufacturing business**. The design must communicate:
- **Strength & Reliability** - Solid, established, trustworthy
- **Industrial Heritage** - Manufacturing, metal fabrication, serious business
- **Professional Credibility** - Not trendy, not playful, not startup-like

---

## 🎯 Design Hierarchy

### Primary Goal
Present the company as an established, reliable supplier of industrial materials with decades of experience.

### Secondary Goals
1. Showcase comprehensive product range
2. Provide easy contact methods
3. Display pricing transparency
4. Enable quick product inquiries

---

## 🌈 Color System

### Primary Colors

#### Dark Grey `#2B2B2B`
- **Usage**: Headers, primary text, dark sections
- **Psychology**: Strength, stability, industrial
- **Applications**: Hero backgrounds, footer, headings

#### Steel Blue `#2F4F6F`
- **Usage**: Brand identity, navigation highlights, CTAs
- **Psychology**: Trust, professionalism, metal industry
- **Variants**:
  - Light: `#3d5f7f` (hover states)
  - Dark: `#1f3a52` (gradients)

#### Accent Yellow `#D4AF37`
- **Usage**: Highlights, underlines, important CTAs
- **Psychology**: Quality, premium, attention
- **Note**: Muted gold tone, not bright yellow

### Secondary Colors

#### White `#FFFFFF`
- Clean backgrounds, card surfaces, text on dark

#### Light Grey `#F5F5F5`
- Section backgrounds, alternating table rows

#### Mid Grey `#666666`
- Body text, descriptions, secondary information

#### Border Grey `#DDDDDD`
- Subtle borders, dividers, card outlines

---

## 📝 Typography System

### Font Family
**Roboto** (sans-serif)
- Professional, clean, highly readable
- Strong weight options for industrial feel
- Excellent at all sizes

### Type Scale

```
H1: 48px / Bold / -0.5px letter-spacing
H2: 36px / Bold / 24px margin-bottom
H3: 24px / Bold / 16px margin-bottom
H4: 20px / Bold / 16px margin-bottom
Body: 16px / Regular / 1.6 line-height
Small: 14px / Regular / 1.6 line-height
```

### Font Weights
- **400** (Regular): Body text, descriptions
- **500** (Medium): Navigation, labels
- **700** (Bold): All headings
- **900** (Black): Available for extreme emphasis (rarely used)

### Typography Rules
1. Use bold weights for strength
2. Maintain clear hierarchy
3. Never use decorative fonts
4. Keep line height generous (1.6 minimum)
5. No script or handwriting fonts
6. No italic overuse

---

## 📏 Spacing System

### Base Unit: 8px

```
--spacing-xs:   8px   (tight spacing, inline elements)
--spacing-sm:   16px  (default gaps, small margins)
--spacing-md:   24px  (medium spacing, card padding)
--spacing-lg:   40px  (section separation)
--spacing-xl:   60px  (large section padding)
--spacing-xxl:  80px  (major section spacing)
```

### Application Guidelines
- Use consistent spacing multiples of 8
- Larger spacing = more emphasis
- Maintain rhythm throughout page
- Padding inside elements: SM to MD
- Margins between sections: LG to XXL

---

## 🔲 Layout System

### Grid Structure
- **Max Width**: 1200px (standard content)
- **Wide Max Width**: 1400px (catalogue grids)
- **Minimum Width**: 1366px (desktop only)
- **Side Padding**: 24px (container padding)

### Grid Patterns

#### 5-Column Grid
- Category cards (home page)
- Feature items (why choose us)

#### 4-Column Grid
- Product cards (catalogue)
- Laser cutting designs

#### 3-Column Grid
- Door section gauges

#### 2-Column Grid
- Contact page layout

---

## 🧩 Component Specifications

### Header

**Structure:**
```
Top Bar (Dark Grey #2B2B2B)
├─ Tagline (left)
└─ Phone Numbers (right)

Main Header (White background)
├─ Dual Logo Section (SKI | ASI)
└─ Navigation (right aligned)
```

**Dimensions:**
- Total Height: ~90px
- Top Bar: ~32px
- Main Header: ~58px
- Border Bottom: 3px Accent Yellow

**Behavior:**
- Sticky on scroll
- Box shadow increases on scroll
- Active page highlighted with yellow underline

### Hero Section

**Dimensions:**
- Height: 500px (home), 300px (interior pages)

**Background:**
- Gradient: Steel Blue Dark → Dark Grey (135deg)
- Subtle texture overlay (diagonal lines)

**Content:**
- Centered alignment
- Max width: 900px
- White text with text-shadow
- Feature tags in translucent boxes

### Buttons

**Primary (Accent Yellow)**
```css
Background: #D4AF37
Color: #2B2B2B (dark text)
Padding: 12px 32px
Border Radius: 4px
Font Weight: 600
```

**Secondary (Steel Blue)**
```css
Background: #2F4F6F
Color: #FFFFFF
Padding: 12px 32px
Border Radius: 4px
```

**Outline**
```css
Background: transparent
Border: 2px solid
Padding: 10px 30px (adjusted for border)
```

**Hover States:**
- Transform: translateY(-2px)
- Add box-shadow
- Darken background slightly

### Cards

**Category Card**
- Border: 1px solid #DDDDDD
- Padding: 40px
- Background: White
- Hover: Transform translateY(-8px), shadow, border color change

**Product Card**
- Image area: 200px height
- Info padding: 24px
- Clean separation between image and info
- Button at bottom (full width)

**Gauge Card (Door Sections)**
- Border: 2px solid (thicker for emphasis)
- Centered content
- Large gauge number (32px)
- Checkmark list items

### Tables (Rate List)

**Structure:**
```
Header Row: Steel Blue background, white text
Data Rows: Alternating white and light grey
Hover: Subtle steel blue tint
```

**Specifications:**
- Cell padding: 24px
- Font size: 15-16px
- Border bottom: 1px solid border-grey
- Header border bottom: 2px solid accent yellow

### Footer

**Background:** Dark Grey  
**Color:** rgba(255,255,255,0.8)  
**Layout:** 4-column grid  
**Sections:**
1. About (2fr width)
2. Quick Links
3. Products
4. Contact

**Bottom Bar:**
- Border top: 1px rgba(255,255,255,0.1)
- Centered text
- Copyright notice

---

## 🎭 Interactive Elements

### Hover Effects

**Cards & Buttons:**
- Transition: all 0.3s ease
- Transform: translateY(-2px to -8px)
- Shadow: Increase depth
- Border: Change color to steel blue

**Links:**
- Color transition: 0.2s
- Underline animation for nav items

**Table Rows:**
- Background color transition
- Slight steel blue tint

### Focus States
- Clear outline for accessibility
- Increased contrast
- No focus removal (accessibility critical)

### Active States
- Navigation: Yellow underline
- Current page highlighted
- Persistent indication

---

## 📐 Design Patterns

### Section Structure (Repeating Pattern)

```
<section class="section">           // 80px vertical padding
  <div class="container">            // 1200px max-width, centered
    <h2 class="section-title">       // Centered, yellow underline
    <div class="content-grid">       // 3-5 columns depending on context
```

### Alternating Sections

```
1. White background (default)
2. Light grey background (.section-light)
3. Steel blue gradient (.section-steel)
4. Dark grey (.section-dark)
```

### Information Hierarchy

```
1. Page Hero (what page am I on?)
2. Section Title (what am I looking at?)
3. Content Grid (organized information)
4. Call-to-Action (what should I do?)
```

---

## 🚫 Design Don'ts (Critical)

### Never Use:
1. ❌ Bright, playful colors (pink, bright blue, neon)
2. ❌ Abstract blob shapes or 3D floating elements
3. ❌ Glassmorphism (frosted glass effect overuse)
4. ❌ Heavy animations or parallax scrolling
5. ❌ Rounded, soft, "friendly" design language
6. ❌ Startup/SaaS landing page aesthetics
7. ❌ Corporate tech company stock imagery
8. ❌ Cartoon or playful icons

### Always Maintain:
1. ✅ Clean, structured grid layouts
2. ✅ Strong, bold typography
3. ✅ Industrial color palette
4. ✅ Professional photography or simple icons
5. ✅ Clear information hierarchy
6. ✅ Trustworthy, established aesthetic
7. ✅ Serious, business-focused tone
8. ✅ Metal/fabrication visual language

---

## 📱 Responsive Behavior

**NOTE:** This website is **desktop-only** by design.

- Minimum width: 1366px
- Optimal viewing: 1920px
- No mobile breakpoints
- No tablet optimization
- Fixed width layouts acceptable

If mobile is needed later:
- Would require complete redesign
- Different content strategy
- Simplified navigation
- Touch-friendly interactions

---

## 🎯 Design Validation Checklist

Before deploying changes, verify:

- [ ] Colors match industrial palette
- [ ] Typography uses Roboto weights correctly
- [ ] Spacing follows 8px system
- [ ] Hover effects are subtle and professional
- [ ] No trendy design elements added
- [ ] Information hierarchy is clear
- [ ] CTAs are visible and actionable
- [ ] Business looks established, not startup-like
- [ ] Design feels trustworthy and serious
- [ ] Industrial/manufacturing theme maintained

---

## 📞 Design Intent

**This website should make visitors think:**

✅ "This is a solid, established business"  
✅ "They've been doing this for decades"  
✅ "I can trust them with bulk orders"  
✅ "Professional and reliable supplier"  
✅ "Serious industrial business"  

**NOT:**

❌ "This is a new tech startup"  
❌ "This is a design agency portfolio"  
❌ "This is an app or SaaS tool"  
❌ "This is a trendy consumer brand"  

---

**Design System Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Production Specification
