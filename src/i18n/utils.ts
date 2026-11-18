import { ui, defaultLang, languages, type Lang } from "./ui";

export const langs = Object.keys(languages) as Lang[];

export const isLang = (x: string | undefined): x is Lang => !!x && x in languages;

export const getUi = (lang: Lang) => ui[lang];

/** Devuelve el otro idioma: es <-> en */
export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");

/** Arma una ruta con prefijo de idioma: path("es", "projects/x") -> /es/projects/x/ */
export const path = (lang: Lang, rest = "") => `/${lang}/${rest ? rest.replace(/^\/|\/$/g, "") + "/" : ""}`;

export { defaultLang };
export type { Lang };
