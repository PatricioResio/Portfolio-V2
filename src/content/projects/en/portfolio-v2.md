---
title: "Portfolio V2"
summary: "Redesign and development of my professional portfolio with Astro, TypeScript and CSS, focusing on performance, accessibility, SEO and a bilingual experience."
role: "Frontend design and development (personal project)"
year: "2026"
status: "live"
stack: ["Astro", "TypeScript", "CSS"]
order: 4
links:
  - { label: "Website", url: "https://patricio-resio.netlify.app/en/" }
  - { label: "GitHub", url: "https://github.com/PatricioResio/Portfolio-V2" }
---

## Context

I decided to build a new version of my portfolio to better reflect my growth as a frontend developer, present my projects more clearly and provide a professional experience in both Spanish and English.

The goal was not simply to refresh the visual design, but to rethink the architecture and technical decisions behind the site, creating something fast, accessible and easy to maintain.

## Challenge

Build a personal platform that communicates my profile, experience and projects without adding unnecessary complexity. I also wanted to improve performance compared to my previous portfolio and make it easier for recruiters and development teams to navigate.

## Technical decisions

- **Astro instead of React:** I chose Astro because the website is primarily informational and does not require complex client-side interactivity. Static generation delivers HTML directly and avoids shipping a client-side framework when it provides no real value.
- **Component-based architecture:** I split the interface into reusable components to keep the structure clear and make future changes easier.
- **Content Collections:** I structured case studies as Markdown files and defined a schema to validate their metadata.
- **Internationalization:** I implemented Spanish and English versions through independent routes (`/es/` and `/en/`), with content and navigation adapted to each language.
- **Native CSS:** I used CSS and custom properties to maintain visual consistency without adding another styling library.
- **SEO and accessibility:** I implemented metadata, canonical URLs, `hreflang` tags, semantic navigation, visible focus indicators and reduced-motion support.

## Implementation

I developed the complete experience: visual identity, navigation, project presentation, experience, education and contact. Content is separated from the interface to simplify maintenance and the addition of new case studies.

I also used locally hosted fonts and static generation to reduce external dependencies and avoid unnecessary client-side JavaScript on the current pages.

## Results

In a Lighthouse audit performed during development, the website scored:

- **100/100 in Performance.**
- **100/100 in Accessibility.**
- **100/100 in Best Practices.**
- **100/100 in SEO.**

The result is a bilingual, statically generated portfolio built with an architecture suited to the project's actual needs.

This project allowed me to deepen my understanding of Astro, static site generation, internationalization and web optimization, while applying technical judgment by choosing tools according to the problem rather than habit.
