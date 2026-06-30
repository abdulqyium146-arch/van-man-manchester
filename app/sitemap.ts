import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";
import { getLocationSlugs } from "@/lib/data/locations";
import { getServiceSlugs } from "@/lib/data/services";
import { getGuideSlugs } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  const servicePages: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = getLocationSlugs().map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const guidePages: MetadataRoute.Sitemap = getGuideSlugs().map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...locationPages, ...guidePages];
}
