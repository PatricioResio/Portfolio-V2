// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Cambiá esto cuando tengas dominio propio: se usa para canonical, hreflang y og:url
  site: "https://patricio-resio.netlify.app",
  trailingSlash: "always",
});
