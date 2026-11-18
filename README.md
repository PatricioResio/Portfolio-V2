# Portfolio — Patricio Resio

Astro + CSS puro. Español e inglés (`/es/`, `/en/`), sin JavaScript en las páginas.

## Requisitos
Node **22.23.4 o más** (Astro 7). Verificalo con `node -v`.

## Comandos
```bash
npm install        # una sola vez
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera la carpeta dist/ (lo que se publica)
npm run preview    # prueba el build local
```

## Estructura
```
src/
  styles/global.css      Tokens de diseño (colores, tipografía, espaciado) + base
  i18n/ui.ts             TODOS los textos, en es y en (misma estructura)
  i18n/utils.ts          Helpers de rutas e idioma
  layouts/Base.astro     <head>, SEO, hreflang, cabecera y pie
  components/            Header, Footer, Hero, Section, ProjectRow
  content/projects/      Un .md por proyecto y por idioma (casos de estudio)
  content.config.ts      Esquema que valida esos .md
  pages/
    index.astro          Raíz: redirige a /es/ o /en/ según el navegador
    [lang]/index.astro   Home (genera /es/ y /en/)
    [lang]/projects/[slug].astro   Caso de estudio
    [lang]/thanks.astro  Página de "gracias" del formulario
public/                  CVs en PDF, favicon, og.png (preview al compartir)
```

## Cómo funciona (Astro, ligado a lo que ya sabés de React)
1. **Un `.astro` es un componente.** Arriba, entre `---`, va JavaScript/TypeScript que corre **una sola vez, al construir** (no en el navegador). Abajo va el HTML. Las props se leen con `Astro.props`, como en React.
2. **`<style>` está acotado al componente.** Los estilos de `Hero.astro` no afectan a `Header.astro`. Por eso alcanza con CSS puro, sin Tailwind.
3. **Cero JavaScript por defecto.** Si no pedís interactividad, el navegador recibe solo HTML y CSS. Para interactividad se usan "islas" (un componente de React con `client:visible`). Ahora no hace falta ninguna.
4. **Rutas = archivos.** `pages/[lang]/index.astro` con `getStaticPaths()` genera una página por idioma.
5. **Content collections.** Cada proyecto es un `.md`. El frontmatter se valida con `content.config.ts` (si falta un campo, el build falla y avisa). `getCollection()` los lee y `render()` convierte el cuerpo en HTML.
6. **Todo el look sale de variables CSS** en `global.css`. Cambiar el acento o la tipografía son 1–2 líneas.

## Tareas habituales
- **Cambiar un texto:** `src/i18n/ui.ts` (en los dos idiomas).
- **Agregar un proyecto:** copiá `content/projects/es/ciencia-cerca.md` y su par en `en/`, cambiá el contenido y el `order`.
- **Agregar capturas a un caso:** guardalas en `src/assets/`, y en el frontmatter `cover: "../../../assets/mi-captura.webp"` + `coverAlt`.
- **Cambiar colores:** variables `--accent`, `--bg`, `--ink` en `global.css` (hay un bloque para modo oscuro).
- **Dominio propio:** cambiá `site` en `astro.config.mjs`.

## Publicar en Netlify
1. Repo nuevo en GitHub, subí todo (menos `node_modules`, `dist`, `.astro`: ya están en `.gitignore`).
2. En Netlify: *Add new site → Import from Git*. Ya toma `netlify.toml` (build `npm run build`, carpeta `dist`, Node 22).
3. **Formulario:** Netlify lo detecta solo al publicar. Activá el aviso por email en *Site configuration → Forms → Form notifications*.

## Pendientes (están como comentarios `TODO` en los `.md`)
- La Casa de los Vientos: link "Demo", 2 capturas propias, decisión técnica de i18n y puntajes de Lighthouse cuando esté online.
- Trashumar: contar cómo se resuelve el lanzamiento (facturación de Firebase Storage).
- Ciencia Cerca: una captura propia del sitio (no del stream).
- Medir Lighthouse (móvil) de este sitio y mostrar los números en el hero.

## Para tu próxima entrevista (preguntas probables sobre este sitio)
- ¿Por qué Astro y no React puro? ¿Qué es hidratación y por qué acá no hace falta?
- ¿Cómo resolviste el multi-idioma? ¿Qué ventaja tienen las URLs `/es/` y `/en/` frente a un toggle?
- ¿Qué son las content collections y qué te da el esquema de validación?
- ¿Cómo lo hiciste accesible? (skip link, landmarks, foco visible, `prefers-reduced-motion`, contraste)
- ¿Cómo mediste el rendimiento y qué decisiones lo mejoraron? (sin JS, fuentes locales, imágenes optimizadas)
