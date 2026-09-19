import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getServices } from "@/lib/data/services";
import { getResources } from "@/lib/data/resources";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/methodology", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/students-parents", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/families-children", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/schools", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/professionals", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/book-consultation", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = getServices().map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourceEntries = getResources().map((r) => ({
    url: `${siteUrl}/resources/${r.slug}`,
    lastModified: new Date(r.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...staticEntries, ...serviceEntries, ...resourceEntries];
}
