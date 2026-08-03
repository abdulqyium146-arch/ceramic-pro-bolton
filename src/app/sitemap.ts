import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

const base = BUSINESS.url;

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "ceramic-coating-vs-ppf-which-do-you-need", date: "2025-05-08" },
  { slug: "ceramic-coating-vs-wax-bolton", date: "2025-09-05" },
  { slug: "how-to-maintain-ceramic-coating-uk-weather", date: "2025-09-18" },
  { slug: "ppf-vs-ceramic-coating-which-is-right-for-you", date: "2025-10-02" },
  { slug: "paint-correction-before-ceramic-coating", date: "2025-10-20" },
  { slug: "best-car-detailer-bolton", date: "2025-11-06" },
  { slug: "winter-car-protection-greater-manchester", date: "2025-11-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/services/ceramic-coating`, priority: 0.9 },
    { url: `${base}/services/paint-protection-film`, priority: 0.9 },
    { url: `${base}/services/car-detailing-valet`, priority: 0.9 },
    { url: `${base}/services/leather-interior-protection`, priority: 0.8 },
    { url: `${base}/locations/bolton`, priority: 0.9 },
    { url: `${base}/locations/manchester`, priority: 0.8 },
    { url: `${base}/locations/bury`, priority: 0.7 },
    { url: `${base}/locations/salford`, priority: 0.7 },
    { url: `${base}/locations/wigan`, priority: 0.7 },
    { url: `${base}/locations/chorley`, priority: 0.7 },
    { url: `${base}/locations/farnworth`, priority: 0.7 },
    { url: `${base}/locations/altrincham`, priority: 0.7 },
    { url: `${base}/gallery`, priority: 0.8 },
    { url: `${base}/reviews`, priority: 0.7 },
    { url: `${base}/about`, priority: 0.6 },
    { url: `${base}/faq`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug, date }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(date),
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
