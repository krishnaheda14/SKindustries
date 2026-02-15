# Cloudflare Pages Deployment Guide

## Quick Start

### 1. Commit and Push to GitHub

```powershell
# Make sure you're in the project directory
cd F:\skind

# Check git status
git status

# Add all new files
git add .

# Commit changes
git commit -m "Modern Next.js website with TypeScript and Cloudflare Pages setup"

# Push to GitHub
git push origin main
```

### 2. Deploy to Cloudflare Pages

#### Option A: Automatic Deployment (Easiest)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Login to your account

2. **Create New Pages Project**
   - Click on "Pages" in the sidebar
   - Click "Create a project"
   - Click "Connect to Git"

3. **Connect to GitHub**
   - Authorize Cloudflare to access your GitHub account
   - Select repository: `krishnaheda14/SKindustries`
   - Click "Begin setup"

4. **Configure Build Settings**
   
   ```
   Project name: sk-industries
   Production branch: main
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: /
   Node version: 18
   ```

5. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-3 minutes for first build
   - Your site will be live at: `https://sk-industries.pages.dev`

#### Option B: Manual Deployment with Wrangler

```powershell
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=sk-industries --branch=main
```

### 3. Custom Domain Setup (Optional)

If you have a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `skindustries.com` or `www.skindustries.com`)
5. Follow DNS instructions
6. SSL certificate will be automatically provisioned

### 4. Environment Variables (If Needed)

Currently, this site doesn't require environment variables as it's completely static.

If you need to add any in the future:

1. Go to Settings > Environment variables
2. Add variables for Production/Preview environments
3. Redeploy the site

## Build Configuration Details

The project uses these configurations:

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### next.config.js

```javascript
const nextConfig = {
  output: 'export',      // Static HTML export
  images: {
    unoptimized: true,   // Required for static export
  },
  trailingSlash: true,   // Better for static hosting
}
```

### .cloudflare-pages.yml

```yaml
framework: next
build_command: npm run build
build_output_directory: out
node_version: 18
```

## Continuous Deployment

Once connected to GitHub, every push to the `main` branch will:

1. Automatically trigger a new build on Cloudflare Pages
2. Run `npm install` and `npm run build`
3. Deploy the `out/` directory
4. Make changes live within 2-3 minutes

### Development Workflow

```powershell
# Make changes to code
# ...

# Test locally
npm run dev

# Build to verify
npm run build

# Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main

# Cloudflare automatically deploys
```

## Monitoring Deployments

### View Build Logs

1. Go to Cloudflare Pages dashboard
2. Click on your project
3. See all deployments with status
4. Click any deployment to view detailed logs

### Rollback Deployment

If something goes wrong:

1. Go to project deployments page
2. Find a previous successful deployment
3. Click "..." menu → "Rollback to this deployment"
4. Site reverts instantly

## Performance Optimizations

Cloudflare Pages provides:

- **Global CDN**: Content served from 200+ data centers worldwide
- **Automatic HTTPS**: Free SSL certificates
- **DDoS Protection**: Enterprise-grade security
- **Bandwidth**: Unlimited bandwidth
- **Build Minutes**: 500 builds/month on free plan

## Troubleshooting

### Build Fails with "Module not found"

**Solution**: Ensure all imports use correct paths and all dependencies are installed

```powershell
# Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Build Succeeds but Pages are Blank

**Solution**: Check browser console for errors. Usually a routing issue.

Verify `next.config.js` has:
```javascript
output: 'export'
```

### Images Not Loading

**Solution**: Ensure images are in `public/` directory and paths start with `/`

```tsx
// Correct
<img src="/images/logo.png" />

// Wrong
<img src="images/logo.png" />
```

### TypeScript Errors During Build

**Solution**: Fix TypeScript errors locally first

```powershell
npm run lint
```

### Node Version Issues

**Solution**: Specify Node version in Cloudflare build settings:

1. Go to Settings > Build & deployments
2. Set "NODE_VERSION" environment variable to `18`

## Update Data (Products/Designs)

When you update PDFs and extract new data:

```powershell
# Extract new data
.venv\Scripts\python.exe scripts\extract_products_multi.py "3-4-5-6 Patti Design.pdf" output_products
.venv\Scripts\python.exe scripts\extract_designs.py "drawing.pdf" output_designs

# Copy to public folder
Copy-Item -Recurse -Force output_products/images/products public/images/
Copy-Item -Recurse -Force output_designs/images/designs public/images/
Copy-Item -Force output_products/products.json public/data/
Copy-Item -Force output_designs/designs.json public/data/

# Commit and push
git add public/
git commit -m "Update products and designs data"
git push origin main

# Cloudflare auto-deploys with new data
```

## Cost

**Cloudflare Pages Free Tier:**
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time
- 100+ pages projects

**This is completely free for your use case!**

## DNS Records (If Using Custom Domain)

If `skindustries.com` is your domain:

1. **For root domain** (`skindustries.com`):
   ```
   Type: CNAME
   Name: @
   Target: sk-industries.pages.dev
   Proxy: Enabled (Orange cloud)
   ```

2. **For www subdomain** (`www.skindustries.com`):
   ```
   Type: CNAME
   Name: www
   Target: sk-industries.pages.dev
   Proxy: Enabled (Orange cloud)
   ```

## Security Headers (Recommended)

Add in Cloudflare Pages settings > HTTP Headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: https://community.cloudflare.com/

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Cloudflare Pages project created
- [ ] Build configuration set correctly
- [ ] First deployment successful
- [ ] Site accessible at `.pages.dev` URL
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Logo images uploaded
- [ ] Product data displaying correctly
- [ ] Contact form working
- [ ] Mobile responsive verified

**Your site is now live and will automatically update with every GitHub push!**
