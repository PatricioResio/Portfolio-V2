---
title: "Portfolio V2"
summary: "Rediseño y desarrollo de mi portfolio profesional con Astro, TypeScript y CSS, priorizando rendimiento, accesibilidad, SEO y una experiencia bilingüe."
role: "Diseño y desarrollo frontend (proyecto personal)"
year: "2026"
status: "live"
stack: ["Astro", "TypeScript", "CSS"]
order: 4
links:
  - { label: "Sitio web", url: "https://patricio-resio.netlify.app/es/" }
  - { label: "GitHub", url: "https://github.com/PatricioResio/Portfolio-V2" }
---

## Contexto

Decidí desarrollar una nueva versión de mi portfolio para representar mejor mi evolución como desarrollador frontend, presentar mis proyectos con mayor claridad y ofrecer una experiencia profesional en español e inglés.

El objetivo no era solamente renovar el diseño visual, sino replantear la arquitectura y las decisiones técnicas para construir un sitio rápido, accesible y fácil de mantener.

## Desafío

Crear una plataforma personal que comunicara mi perfil, experiencia y proyectos sin sumar complejidad innecesaria. También buscaba mejorar el rendimiento respecto de mi portfolio anterior y facilitar la navegación a reclutadores y equipos de desarrollo.

## Decisiones técnicas

- **Astro en lugar de React:** elegí Astro porque el sitio es principalmente informativo y no requiere interactividad compleja del lado del cliente. La generación estática permite entregar HTML directamente y evitar cargar un framework de cliente cuando no aporta valor.
- **Arquitectura basada en componentes:** separé la interfaz en componentes reutilizables para mantener una estructura clara y facilitar futuras modificaciones.
- **Content Collections:** estructuré los casos de estudio en archivos Markdown y definí un esquema para validar sus metadatos.
- **Internacionalización:** implementé versiones en español e inglés mediante rutas independientes (`/es/` y `/en/`), con contenido y navegación adaptados a cada idioma.
- **CSS nativo:** utilicé CSS y variables personalizadas para mantener consistencia visual sin incorporar una biblioteca de estilos adicional.
- **SEO y accesibilidad:** incorporé metadatos, URLs canónicas, etiquetas `hreflang`, navegación semántica, indicadores de foco y soporte para preferencias de movimiento reducido.

## Implementación

Desarrollé la experiencia completa: identidad visual, navegación, presentación de proyectos, experiencia, educación y contacto. Separé el contenido de la interfaz para simplificar su mantenimiento y la incorporación de nuevos casos de estudio.

También utilicé fuentes locales y generación estática para reducir dependencias externas y evitar JavaScript de cliente innecesario en las páginas actuales.

## Resultados

En una auditoría de Lighthouse realizada durante el desarrollo, el sitio obtuvo:

- **100/100 en Performance.**
- **100/100 en Accessibility.**
- **100/100 en Best Practices.**
- **100/100 en SEO.**

El resultado es un portfolio bilingüe, generado estáticamente y construido con una arquitectura ajustada a las necesidades reales del proyecto.

Este trabajo me permitió profundizar en Astro, generación estática, internacionalización y optimización web, además de aplicar criterio técnico al elegir herramientas según el problema y no por costumbre.
