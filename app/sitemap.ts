import type { MetadataRoute } from "next";
import { solutions } from "@/content/solutions";
import { operators } from "@/content/operators";
import { getAllDossierSlugs } from "@/content/dossiers";

const BASE = "https://valantai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const solutionRoutes = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const operatorRoutes = operators.map((op) => ({
    url: `${BASE}/operators/${op.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const dossierRoutes = getAllDossierSlugs().map((slug) => ({
    url: `${BASE}/intelligence/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE,                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/solutions`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/platform/risk`,   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/intelligence`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/engage`,          lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    ...solutionRoutes,
    ...operatorRoutes,
    ...dossierRoutes,
  ];
}
