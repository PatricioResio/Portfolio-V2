# Portfolio — Patricio Resio

Bilingual (ES/EN) developer portfolio with project case studies. Built with **Astro** and plain CSS, and it ships **zero JavaScript** on its pages.

**Live site:** <URL_DEL_SITIO>

## Highlights

- **No client-side JavaScript.** Pages are static HTML and CSS. Interactivity can be added later with Astro islands, but nothing needs it today.
- **Multilingual by URL.** `/es/` and `/en/` routes with `hreflang` tags. The root redirects based on the browser's language. Crawlable URLs instead of a client-side toggle.
- **Validated content.** Each case study is a Markdown file per language, typed with Astro content collections. If the frontmatter is invalid, the build fails.
- **Accessible by design.** Skip link, landmarks, visible focus states, contrast checks, and full support for `prefers-reduced-motion`.
- **Native CSS animations.** Scroll-driven animations (`animation-timeline: view()` / `scroll()`), a reading progress bar, and the View Transitions API. Titles animate from the project list to the detail page. All of it is gated behind `prefers-reduced-motion: no-preference` and degrades gracefully in unsupported browsers.
- **Performance-minded.** Self-hosted fonts, optimized images, and hero animations that only touch `transform` so they don't delay LCP.
- **Design tokens.** Colors, typography, and spacing live in CSS variables, with a dark mode block.
- **Contact form** handled by Netlify Forms.

## Tech stack

Astro 7 · TypeScript · CSS (no framework) · Netlify

## Getting started

Requires Node **22.23.4 or later** (`node -v` to check).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  styles/global.css     Design tokens + base styles + animations
  i18n/ui.ts            All UI strings, es and en (same shape)
  i18n/utils.ts         Route and language helpers
  layouts/Base.astro    <head>, SEO, hreflang, header and footer
  components/           Header, Footer, Hero, Section, ProjectRow
  content/projects/     One .md per project per language
  content.config.ts     Schema that validates the case studies
  pages/
    index.astro                    Redirects to /es/ or /en/
    [lang]/index.astro             Home (generates /es/ and /en/)
    [lang]/projects/[slug].astro   Case study page
    [lang]/thanks.astro            Form confirmation page
public/                 CV PDFs, favicon, og.png (social preview)
```

## Technical notes

**Why Astro.** The site is content-first, so there's nothing to hydrate. Astro runs component logic at build time and sends plain HTML, which gives better load performance than a React SPA for this use case.

**A build-tooling gotcha.** The scroll-driven animation properties (`animation-timeline`, etc.) are written as longhand declarations instead of the `animation:` shorthand. With the shorthand, the build's CSS minifier folded the timeline into it and browsers dropped the whole rule. I found this by measuring the rendered output, not by eyeballing it.

**Reduced motion.** Every animation lives under `prefers-reduced-motion: no-preference`, so users who opt out see none.

## Deployment

Deployed on Netlify from Git. `netlify.toml` sets the build command (`npm run build`), publish directory (`dist`), and Node 22. Netlify Forms detects the contact form automatically on deploy.

## Customization

- **Copy:** edit `src/i18n/ui.ts` (both languages).
- **New project:** duplicate a file in `src/content/projects/es/` and its `en/` pair, then update the content and `order`.
- **Theme:** change `--accent`, `--bg`, `--ink` in `global.css`.
- **Custom domain:** set `site` in `astro.config.mjs`.
