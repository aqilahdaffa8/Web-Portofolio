import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/certificates`, lastModified: now },
    ...PROJECTS.map((p) => ({ url: `${base}/projects/${p.id.toLowerCase()}`, lastModified: now })),
  ];
}
