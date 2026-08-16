import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

const base = BUSINESS.url;
const now = new Date("2026-08-16");

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "is-ceramic-coating-worth-it", date: "2025-07-04" },
  { slug: "ceramic-coating-cost-bolton-manchester", date: "2025-07-20" },
  { slug: "how-long-does-ceramic-coating-last", date: "2025-06-12" },
  { slug: "ceramic-coating-vs-ppf-which-do-you-need", date: "2025-05-08" },
  { slug: "ceramic-coating-vs-wax-bolton", date: "2025-04-10" },
  { slug: "how-to-maintain-ceramic-coating-uk-weather", date: "2025-03-18" },
  { slug: "ppf-vs-ceramic-coating-which-is-right-for-you", date: "2025-02-25" },
  { slug: "paint-correction-before-ceramic-coating", date: "2025-01-30" },
  { slug: "best-car-detailer-bolton", date: "2024-12-14" },
  { slug: "winter-car-protection-greater-manchester", date: "2024-11-20" },
];

// All city slugs from BUSINESS.serviceArea that have dynamic [city] pages
// (bolton and manchester have their own static pages)
const CITY_SLUGS = BUSINESS.serviceArea
  .filter((a) => a.slug !== "bolton" && a.slug !== "manchester")
  .map((a) => a.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/ceramic-coating`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/services/paint-protection-film`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/car-detailing-valet`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/leather-interior-protection`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/locations/bolton`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/locations/manchester`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // All dynamic city location pages
  const cityRoutes: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts — ordered newest first matches sitemap best practice
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug, date }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes, ...blogRoutes];
}
