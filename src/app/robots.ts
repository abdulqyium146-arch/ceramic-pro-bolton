import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google & Bing — full access, no crawl delay
      {
        userAgent: ["Googlebot", "Googlebot-Image", "Googlebot-Video", "Bingbot"],
        allow: "/",
        disallow: ["/api/"],
      },
      // AI crawlers — allow for citations and AI search visibility
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
          "cohere-ai",
          "YouBot",
          "Meta-ExternalAgent",
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      // All other crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
