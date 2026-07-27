# Deployment Guide

This document covers the steps to build, preview, and deploy the Salience Foundation website to hosting providers.

---

## 1. Production Build Commands

To build the static assets, run:
```bash
npm run build
```
This optimizes stylesheets, compresses assets, splits chunks dynamically, and outputs files into the `dist/` directory.

To preview the production bundle locally:
```bash
npm run preview
```

---

## 2. Deployment Providers

### Vercel / Netlify
Vercel and Netlify will automatically detect the Vite project configuration. 
- **Build Command**: `npm run build` or `vite build`
- **Output Directory**: `Frontend/dist`

#### SPA Redirect Configuration
Because the application is a Single Page Application (SPA) using client-side routing, you must configure redirects so that direct page loads (e.g. `/programs` or `/gallery`) route correctly to `index.html` instead of triggering a 404 error.

- **Vercel**: Add a `vercel.json` file in the build output root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **Netlify**: Create a `_redirects` file in the build output root (or inside the `public/` directory):
  ```text
  /*    /index.html   200
  ```

---

## 3. Performance Checklist

- **Asset Compression**: Ensure images imported into pages are compressed to keep package footprint low.
- **Lazy Loading**: Dynamic mapping components (`InteractiveMap`) should remain lazy-loaded through React's `Suspense` and `lazy` import configurations to reduce the primary bundle size.
- **Framer Motion Bundle**: Framer Motion components are imported selectively to ensure efficient tree-shaking during rollup bundling.
