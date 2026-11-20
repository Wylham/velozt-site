import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { solutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/plataforma",
    "/diferenciais",
    "/planos",
    "/contato",
    "/blog",
    "/politica-de-privacidade",
    "/termos-de-uso",
    ...solutions.map(({ slug }) => `/solucoes/${slug}`),
  ].map((path) => ({ url: `${site.url}${path}` }));
}
