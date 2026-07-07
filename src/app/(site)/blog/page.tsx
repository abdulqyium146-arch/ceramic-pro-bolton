import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import { WHATSAPP_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "Car Detailing Blog — Ceramic Coating Tips Bolton | Ceramic Pro North West",
  description:
    "Expert car detailing and ceramic coating advice from Ceramic Pro North West Bolton. Tips on paint protection, PPF, maintenance, and more for Greater Manchester drivers.",
  alternates: { canonical: "/blog" },
};

export const POSTS = [
  {
    slug: "ceramic-coating-vs-wax-bolton",
    title: "Ceramic Coating vs Wax: What Bolton Drivers Should Know",
    excerpt: "Is ceramic coating really worth the investment over traditional wax? We break down the differences every Greater Manchester driver should understand before protecting their car.",
    category: "Ceramic Coating",
    date: "2025-04-10",
    readTime: "5 min read",
  },
  {
    slug: "how-to-maintain-ceramic-coating-uk-weather",
    title: "How to Maintain Your Ceramic Coating in UK Weather",
    excerpt: "British weather is tough on car paint — and on ceramic coatings too, if not maintained correctly. Here's how to keep your coating performing through Bolton's rain, frost, and road salt season.",
    category: "Maintenance",
    date: "2025-03-18",
    readTime: "4 min read",
  },
  {
    slug: "ppf-vs-ceramic-coating-which-is-right-for-you",
    title: "PPF vs Ceramic Coating: Which Protection Does Your Car Need?",
    excerpt: "Paint protection film and ceramic coating both protect your car — but they work very differently. We explain which is right for your vehicle, usage, and budget.",
    category: "PPF",
    date: "2025-02-25",
    readTime: "6 min read",
  },
  {
    slug: "paint-correction-before-ceramic-coating",
    title: "Why Paint Correction Matters Before Ceramic Coating",
    excerpt: "Ceramic coating locks in whatever's under it. We explain why professional paint correction before coating is essential — and what happens when it's skipped.",
    category: "Detailing",
    date: "2025-01-30",
    readTime: "4 min read",
  },
  {
    slug: "best-car-detailer-bolton",
    title: "Finding the Best Car Detailer in Bolton — What to Look For",
    excerpt: "Not all detailers are equal. Here's what to look for when choosing a professional car detailer in Bolton or Greater Manchester — certifications, products, and warning signs.",
    category: "Guides",
    date: "2024-12-14",
    readTime: "5 min read",
  },
  {
    slug: "winter-car-protection-greater-manchester",
    title: "Winter Car Protection in Greater Manchester — Your Complete Guide",
    excerpt: "Road salt, frost, and wet roads make winter the harshest season for car paint. Here's how to protect your car through a typical Bolton and Greater Manchester winter.",
    category: "Seasonal",
    date: "2024-11-20",
    readTime: "5 min read",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Ceramic Coating": "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20",
  Maintenance: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PPF: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Detailing: "bg-green-500/10 text-green-400 border-green-500/20",
  Guides: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Seasonal: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Advice &amp; Guides</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Car Detailing &amp; Ceramic Coating Tips
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expert advice from Ceramic Pro North West — Bolton&apos;s professional ceramic coating and car detailing specialists. Written for Greater Manchester car owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article key={post.slug} className="group bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all flex flex-col">
                <div className="h-48 bg-gradient-to-br from-[#242424] to-[#1a1a1a] flex items-center justify-center">
                  <span className="text-xs text-gray-700 uppercase tracking-widest">[PLACEHOLDER: Article Image]</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded border ${CATEGORY_COLORS[post.category] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-[#c9a84c] transition-colors leading-snug flex-1">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}
                      className="text-[#c9a84c] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Bolton's certified Ceramic Pro specialists — free quotes, honest advice, professional results."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="dark"
      />
    </>
  );
}
