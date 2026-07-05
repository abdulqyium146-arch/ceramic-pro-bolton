import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

const base = BUSINESS.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/ceramic-coating`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/paint-protection-film`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/car-detailing-valet`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/leather-interior-protection`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/bolton`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations/manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/bury`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/salford`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/wigan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/chorley`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/farnworth`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogSlugs = [
    "ceramic-coating-vs-wax-bolton",
    "how-to-maintain-ceramic-coating-uk-weather",
    "ppf-vs-ceramic-coating-which-is-right-for-you",
    "paint-correction-before-ceramic-coating",
    "best-car-detailer-bolton",
    "winter-car-protection-greater-manchester",
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
