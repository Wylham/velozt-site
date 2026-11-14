import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/politica-de-privacidade", "/termos-de-uso"].map((path) => ({ url: `${site.url}${path}` }));
}
