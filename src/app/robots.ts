import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

// Allow all known AI crawlers so the business gets cited by LLMs and AI search engines.
// GPTBot (ChatGPT/OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended (AI Overviews),
// CCBot (Common Crawl), Applebot-Extended, cohere-ai, YouBot.
// To opt any crawler out, add a specific User-agent block with Disallow: /.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
    host: BUSINESS.url,
  };
}
