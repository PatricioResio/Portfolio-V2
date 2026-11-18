import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Cada proyecto es un archivo .md en src/content/projects/<idioma>/<nombre>.md
// El frontmatter (lo de entre ---) se valida con este esquema: si falta algo, el build avisa.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      year: z.string(),
      status: z.enum(["live", "launching", "pending", "collab"]),
      stack: z.array(z.string()),
      order: z.number(), // orden en la home (1 = primero)
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects };
