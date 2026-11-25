---
title: "This portfolio: from React to Astro"
summary: "I rebuilt my portfolio from scratch: from a SPA with 3D to a static, bilingual site with no JavaScript on its pages."
role: "Design and development"
year: "2026"
status: "live"
stack: ["Astro", "TypeScript", "CSS"]
order: 1
links:
  - { label: "Code (current version)", url: "https://github.com/PatricioResio/Portfolio-V2" }
  - { label: "Previous version (React)", url: "https://github.com/PatricioResio/PortfolioResio" }
---

## Why I changed it

My first portfolio (React, Vite, Tailwind and three.js) worked, but it wasn't doing its job: showing how I think. I found four problems:

- **It looked like many others.** A 3D hero and a vertical timeline, from a very popular template. It didn't set me apart.
- **It weighed more than it delivered.** To show text and projects it downloaded React, three.js, framer-motion and 3D models. On phones the hero was empty, and the tech section opened seven WebGL canvases at once, which phones limit.
- **It depended on JavaScript.** It was a SPA: content appeared only after the code ran, and shared links showed a single preview in a single language.
- **Language was a button, not an address.** Without a URL per language, the site couldn't tell search engines which version is the English one.

## What I decided

- **Astro**, because a portfolio is content: it can be generated as finished HTML before publishing.
- **Plain CSS with variables**, no framework: full control and styles scoped to each component.
- **One URL per language** (`/es/` and `/en/`) with `hreflang` tags.
- **Projects as Markdown files** validated by a schema: adding one means creating a file.
- **No 3D.** Let the proof be the content and the quality of the code, not the effect. Motion is done with CSS, with no JavaScript.

## What I gained

- **Zero JavaScript** on the pages (I verified it in the build).
- **About 110 KB per page** uncompressed: HTML (16 KB), CSS (14 KB) and two fonts (83 KB).
- **Lighthouse at 100** for performance, accessibility, best practices and SEO.
- **Spanish and English versions** with their own URLs and a correct preview when shared.
- **Accessibility basics:** skip link, visible focus, "reduced motion" support and automatic dark mode.
- **Easier to maintain:** all text in one file, colors and typography in variables.

## How I built it

I built it with Claude (AI) as a coding assistant. I defined the goal, the stack and the visual direction, reviewed every part, deployed it and measured it. What I took away most: knowing when static HTML is the right choice and when JavaScript isn't needed.

<!--
TODO: add the Lighthouse screenshot as `cover` (+ `coverAlt`), noting whether it is mobile or desktop,
and the "Site" link once the final domain points to this version.
-->
