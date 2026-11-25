---
title: "Este portfolio: de React a Astro"
summary: "Rehice mi portfolio desde cero: de una SPA con 3D a un sitio estático, bilingüe y sin JavaScript en sus páginas."
role: "Diseño y desarrollo"
year: "2026"
status: "live"
stack: ["Astro", "TypeScript", "CSS"]
order: 1
links:
  - { label: "Código (versión actual)", url: "https://github.com/PatricioResio/Portfolio-V2" }
  - { label: "Versión anterior (React)", url: "https://github.com/PatricioResio/PortfolioResio" }
---

## Por qué lo cambié

Mi primer portfolio (React, Vite, Tailwind y three.js) cumplía, pero no hacía su trabajo: mostrar cómo pienso. Encontré cuatro problemas:

- **Se parecía a muchos otros.** Un hero 3D y una línea de tiempo vertical, de una plantilla muy difundida. No me diferenciaba.
- **Pesaba más de lo que aportaba.** Para mostrar texto y proyectos descargaba React, three.js, framer-motion y modelos 3D. En el celular el hero quedaba vacío, y la sección de tecnologías abría siete canvas WebGL a la vez, algo que los celulares limitan.
- **Dependía de JavaScript.** Era una SPA: el contenido aparecía recién cuando corría el código, y al compartir el link la vista previa era una sola, en un solo idioma.
- **El idioma era un botón, no una dirección.** Sin una URL por idioma, el sitio no podía decirle a los buscadores cuál es la versión en inglés.

## Qué decidí

- **Astro**, porque un portfolio es contenido: se puede generar como HTML terminado antes de publicar.
- **CSS puro con variables**, sin framework: control total y estilos acotados a cada componente.
- **Una URL por idioma** (`/es/` y `/en/`) con etiquetas `hreflang`.
- **Proyectos como archivos Markdown** validados con un esquema: agregar uno es crear un archivo.
- **Sin 3D.** Que la prueba sea el contenido y la calidad del código, no el efecto. El movimiento lo hace CSS, sin JavaScript.

## Qué gané

- **Cero JavaScript** en las páginas (lo verifiqué en el build).
- **Unos 110 KB por página** sin comprimir: HTML (16 KB), CSS (14 KB) y dos fuentes (83 KB).
- **Lighthouse en 100** en rendimiento, accesibilidad, buenas prácticas y SEO.
- **Versiones en español e inglés** con URLs propias y vista previa correcta al compartir.
- **Accesibilidad de base:** enlace para saltar al contenido, foco visible, soporte de "reducir movimiento" y modo oscuro automático.
- **Más fácil de mantener:** todos los textos en un archivo, los colores y la tipografía en variables.

## Cómo lo construí

Lo desarrollé con Claude (IA) como asistente de código. Yo definí el objetivo, el stack y la dirección visual, revisé cada parte, lo publiqué y lo medí. Lo que más me dejó: entender cuándo conviene generar HTML estático y cuándo no hace falta JavaScript.

<!--
TODO: sumar la captura de Lighthouse como `cover` (+ `coverAlt`) indicando si es móvil o escritorio,
y el link "Sitio" cuando el dominio definitivo esté apuntando a esta versión.
-->
