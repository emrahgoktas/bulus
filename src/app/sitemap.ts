import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25");

  return indexableRoutes.map((route) => ({
    url: new URL(route.path, site.url).href,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
