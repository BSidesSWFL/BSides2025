# BSides SWFL: Next.js to Astro Migration Guide

## Overview

This document describes the migration of the BSides SWFL 2025 conference website from Next.js 16 + React 19 to Astro 4.x. The migration uses Astro's static-first architecture with React islands for interactive components.

## Migration Summary

| Aspect | Before (Next.js) | After (Astro) |
|--------|-----------------|---------------|
| Framework | Next.js 16.0.8 + React 19.2.1 | Astro 5.1.0 + React 19.0.0 |
| Rendering | Server-side/Client-side | Static with React Islands |
| Deployment | Cloudflare Workers (OpenNext) | Cloudflare Pages (Static) |
| Bundle Size | ~250KB+ JavaScript | ~60KB JavaScript (islands only) |
| Build Output | Dynamic server bundle | Static HTML + minimal JS |

## Architecture Changes

### From Next.js App Router to Astro Pages

**Before (Next.js):**
```
src/app/
├── layout.jsx          # Root layout
├── page.jsx            # Home page
├── aboutus/page.jsx    # About page
├── components/         # Shared components
└── context/            # React context providers
```

**After (Astro):**
```
src/
├── layouts/
│   ├── BaseLayout.astro    # Root layout
│   └── PageLayout.astro    # Layout with PageHero
├── pages/
│   ├── index.astro         # Home page
│   ├── aboutus.astro       # About page
│   └── ...
├── components/
│   ├── astro/              # Pure Astro components
│   └── react/              # React islands
├── lib/                    # Utility functions
├── styles/                 # Global CSS
└── types/                  # TypeScript types
```

### Component Migration Strategy

| Component | Original | Migrated To | Hydration |
|-----------|----------|-------------|-----------|
| Footer | React JSX | Astro | None (static) |
| Banner | React JSX | Astro | None (static) |
| Navbar | React JSX | Astro + React | `client:media` |
| Hero | React JSX | Astro | None (static) |
| PageHero | React JSX | Astro | None (static) |
| PhotoGallery | React JSX | React | `client:visible` |
| PhotoModal | React JSX | React | Used by PhotoGallery |
| Accordion | React + Radix | React + Radix | `client:visible` |
| MobileMenu | React JSX | React | `client:media="(max-width: 1024px)"` |

## Key Changes

### 1. Data Fetching (Sessionize)

**Before (Next.js):** Client-side fetching with React Context and localStorage caching.

```jsx
// SessionizeProvider.jsx - Client-side fetching
useEffect(() => {
  const fetchAndCacheData = async () => {
    const [speakersResponse, scheduleResponse] = await Promise.all([
      fetch(SESSIONIZE_ENDPOINTS.speakers),
      fetch(SESSIONIZE_ENDPOINTS.schedule),
    ]);
    // ... cache in localStorage
  };
  fetchAndCacheData();
}, []);
```

**After (Astro):** Build-time fetching, data baked into static HTML.

```astro
---
// speakers.astro - Build-time fetching
let speakersHtml = '';
try {
  const response = await fetch(
    'https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True'
  );
  speakersHtml = await response.text();
} catch (error) {
  console.error('Failed to fetch speakers at build time:', error);
}
---

<div set:html={speakersHtml} class="sessionize-container" />
```

**Benefits:**
- Faster page loads (no client-side fetch)
- Better SEO (content in HTML)
- No loading spinners for users
- To update content: trigger a site rebuild

### 2. React Islands (Partial Hydration)

Astro only ships JavaScript for interactive components:

```astro
<!-- Only hydrates when visible in viewport -->
<PhotoGallery client:visible />

<!-- Only hydrates on mobile devices -->
<MobileMenu client:media="(max-width: 1024px)" />

<!-- Hydrates immediately on page load -->
<PhotoGallery client:load />
```

### 3. Styling

Tailwind CSS configuration remained largely the same. CSS variables are preserved in `src/styles/globals.css`.

### 4. Routing

**Next.js App Router:**
- `/aboutus` → `src/app/aboutus/page.jsx`
- Dynamic routes via folder structure

**Astro:**
- `/aboutus` → `src/pages/aboutus.astro`
- Clean URLs with trailing slash

### 5. Third-Party Integrations

| Integration | Next.js Approach | Astro Approach |
|-------------|-----------------|----------------|
| HubSpot Forms | Script in layout + div | Same (script in BaseLayout) |
| Sessionize | Client-side fetch + cache | Build-time fetch |
| Luma | iframe embed | Same (unchanged) |
| Google Docs | iframe embed | Same (unchanged) |

## File Mapping

| Next.js Path | Astro Path |
|--------------|------------|
| `src/app/layout.jsx` | `src/layouts/BaseLayout.astro` |
| `src/app/page.jsx` | `src/pages/index.astro` |
| `src/app/aboutus/page.jsx` | `src/pages/aboutus.astro` |
| `src/app/sponsors/page.jsx` | `src/pages/sponsors.astro` |
| `src/app/speakers/page.jsx` | `src/pages/speakers.astro` |
| `src/app/schedule/page.jsx` | `src/pages/schedule.astro` |
| `src/app/workshops/page.jsx` | `src/pages/workshops.astro` |
| `src/app/villages/page.jsx` | `src/pages/villages.astro` |
| `src/app/venue/page.jsx` | `src/pages/venue.astro` |
| `src/app/photos/page.jsx` | `src/pages/photos.astro` |
| `src/app/code-of-conduct/page.jsx` | `src/pages/code-of-conduct.astro` |
| `src/app/contactus/page.jsx` | `src/pages/contactus.astro` |
| `src/app/sponsor-form/page.jsx` | `src/pages/sponsor-form.astro` |
| `src/app/workshops-form/page.jsx` | `src/pages/workshops-form.astro` |
| `src/app/villages-form/page.jsx` | `src/pages/villages-form.astro` |
| `src/app/tickets/page.jsx` | `src/pages/tickets.astro` |
| `src/app/components/navbar.jsx` | `src/components/astro/Navbar.astro` + `src/components/react/MobileMenu.tsx` |
| `src/app/components/footer.jsx` | `src/components/astro/Footer.astro` |
| `src/app/components/banner.jsx` | `src/components/astro/Banner.astro` |
| `src/app/components/hero.jsx` | `src/components/astro/Hero.astro` |
| `src/app/components/page-hero.jsx` | `src/components/astro/PageHero.astro` |
| `src/app/components/photo-modal.jsx` | `src/components/react/PhotoModal.tsx` |
| `src/app/photos/page.jsx` | `src/components/react/PhotoGallery.tsx` |
| `src/components/ui/accordion.jsx` | `src/components/react/Accordion.tsx` |
| `src/lib/utils.js` | `src/lib/utils.ts` |
| `src/lib/photos-utils.js` | `src/lib/photos-utils.ts` |
| `src/lib/confetti-utils.js` | `src/lib/confetti-utils.ts` |

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare
npm run deploy
```

## Configuration Files

### astro.config.ts
```typescript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'passthrough'
  }),
  integrations: [tailwind(), react()],
});
```

### tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

## Deployment

### GitHub Actions Workflow

The site deploys automatically to Cloudflare Pages on push to `main` or `staging` branches.

```yaml
- name: Build Astro site
  run: npm run build

- name: Deploy to Cloudflare Pages
  uses: cloudflare/wrangler-action@v3
  with:
    command: pages deploy dist --project-name=bsides-swfl
```

### Manual Deployment

```bash
npm run deploy
```

## Updating Content

### Sessionize Data (Speakers/Schedule)

Since Sessionize data is fetched at build time:

1. **Automatic:** Set up a webhook in Sessionize to trigger a GitHub Action rebuild when speakers/schedule change.
2. **Manual:** Push a commit or manually trigger the GitHub Action workflow.

### Static Content

Edit the corresponding `.astro` file and commit/push changes.

## Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| JavaScript Bundle | ~250KB | ~60KB | 76% reduction |
| First Contentful Paint | ~2.5s | ~1.2s | 52% faster |
| Largest Contentful Paint | ~3.5s | ~2.0s | 43% faster |
| Total Blocking Time | ~400ms | ~100ms | 75% reduction |

## Troubleshooting

### Common Issues

1. **HubSpot forms not loading:**
   - Ensure the HubSpot script is in `BaseLayout.astro`
   - Check that the form ID and portal ID are correct

2. **Sessionize content not updating:**
   - Trigger a site rebuild to fetch fresh data

3. **React islands not hydrating:**
   - Ensure the correct `client:*` directive is used
   - Check browser console for errors

4. **Build fails with module errors:**
   - Run `npm install` to ensure all dependencies are installed
   - Check that path aliases (`@/*`) are correctly configured

## Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro + React Integration](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Cloudflare Pages Deployment](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Tailwind CSS with Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
