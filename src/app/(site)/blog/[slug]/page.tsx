import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { POSTS } from "../page";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Ceramic Pro North West`,
    description: post.excerpt.slice(0, 155),
    alternates: { canonical: `/blog/${slug}` },
  };
}

const FULL_CONTENT: Record<string, React.ReactNode> = {
  "ceramic-coating-vs-wax-bolton": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating and traditional car wax are both used to protect a vehicle&apos;s paintwork — but that&apos;s roughly where the similarities end. For Bolton and Greater Manchester drivers trying to decide between them, here&apos;s a clear breakdown of what each does, how long it lasts, and which makes sense for your car and budget.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Does Car Wax Do?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Traditional car wax — whether carnauba-based or a synthetic polymer sealant — sits on top of the paint surface and creates a temporary hydrophobic layer that repels water and gives the paint a glossy appearance. It fills minor surface scratches temporarily, making the paint look better than it is.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        The problem is longevity. A quality carnauba wax typically lasts 4–8 weeks in UK conditions. A synthetic polymer sealant might last 3–6 months. Greater Manchester weather — rain, road grime, bird droppings, and winter salt — erodes wax protection quickly. You&apos;re not protecting the paint so much as temporarily improving its appearance.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">What Does Ceramic Coating Do?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        A professionally applied ceramic coating like Ceramic Pro 9H doesn&apos;t sit on top of the paint — it bonds chemically with the clear coat to become a permanent part of the surface. At 9H pencil hardness (the hardest rating possible), it creates a barrier against UV radiation, chemical etching from bird droppings and industrial fallout, hydrophobic water beading, and light abrasion resistance.
      </p>
      <p className="text-gray-400 leading-relaxed mb-4">
        Unlike wax, which degrades and washes away, a Ceramic Pro coating applied by a certified installer lasts 2–5 years depending on the package chosen — with maintenance versions offering even longer durability. The coating also maintains a deeper gloss and self-cleaning hydrophobic effect that wax simply cannot replicate.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Key Differences at a Glance</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3a3a3a] mb-6">
        <table className="w-full min-w-[400px] text-sm">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
              <th className="px-4 py-3 text-left text-gray-400">Feature</th>
              <th className="px-4 py-3 text-center text-[#c9a84c]">Ceramic Coating</th>
              <th className="px-4 py-3 text-center text-gray-400">Wax / Sealant</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Longevity", "2–5 years", "4–16 weeks"],
              ["UV protection", "✓ Excellent", "✗ Minimal"],
              ["Chemical resistance", "✓ Strong", "✗ Weak"],
              ["Hydrophobic effect", "✓ Persistent", "Temporary"],
              ["Surface hardness", "9H", "None"],
              ["Gloss enhancement", "✓ Deep gloss", "Temporary shine"],
            ].map(([feature, cc, wax]) => (
              <tr key={feature} className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a]">
                <td className="px-4 py-3 text-white">{feature}</td>
                <td className="px-4 py-3 text-center text-[#c9a84c]">{cc}</td>
                <td className="px-4 py-3 text-center text-gray-400">{wax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Which Is Right for a Bolton Driver?</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        For casual car owners who enjoy the waxing ritual and don&apos;t mind reapplying every few months, traditional wax still has a place. But for Greater Manchester drivers who want to set-and-forget their paint protection — avoiding the hassle of regular waxing while getting superior protection through Bolton&apos;s wet winters and corrosive road salt season — ceramic coating is the superior choice.
      </p>
      <p className="text-gray-400 leading-relaxed">
        When you factor in the time saved on washing and maintenance, ceramic coating pays for itself quickly. And because it&apos;s applied once by a professional, there is no risk of application errors causing streaking, high spots, or damage — common issues with DIY wax application.
      </p>
    </>
  ),
  "how-to-maintain-ceramic-coating-uk-weather": (
    <>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Ceramic coating significantly reduces the effort required to keep your car clean — but it isn&apos;t entirely maintenance-free. In the North West of England, where rain, road salt, and industrial fallout are constant threats, knowing how to care for your coating properly will maximise its lifespan and keep it performing at its best.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">The Most Important Rule: No Automatic Car Washes</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Brush-based automatic car washes are the single biggest threat to a ceramic coating. The spinning brushes create swirl marks and micro-scratches in the clear coat that degrade the hydrophobic layer over time. This is true of most quality paint finishes — but with ceramic coating, you&apos;re also degrading the coating itself, which is a waste of a significant investment.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Touchless jet washes are acceptable for a quick rinse between proper washes, but should not replace regular hand washing.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Hand Washing with pH-Neutral Shampoo</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        The correct way to wash a ceramic-coated car is with a pH-neutral car shampoo using the two-bucket method. Fill one bucket with soapy water and one with clean rinse water. Use a quality wash mitt — never a sponge or household cloth, which trap grit and drag it across the paint.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Avoid harsh degreasers, dishwasher liquid, or any alkaline or acidic cleaning product on the coated panels. These can strip or degrade the ceramic coating&apos;s top layer over time.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Winter Maintenance in Greater Manchester</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        Bolton and the surrounding area sees heavy road salting from October through to March on most years. Road salt is particularly damaging to wheel arches, sills, and any paint surface it contacts for extended periods. Ceramic coating offers strong chemical resistance, but the best practice is still to rinse road salt off as soon as possible after driving on treated roads — certainly within 48 hours.
      </p>
      <p className="text-gray-400 leading-relaxed">
        A quick rinse with a hosepipe or touchless jet wash on winter days will dramatically reduce salt exposure and keep your coating in optimal condition throughout the season.
      </p>
      <h2 className="font-heading text-2xl font-bold text-white mt-10 mb-4">Annual Maintenance Inspection</h2>
      <p className="text-gray-400 leading-relaxed">
        Ceramic Pro North West recommends an annual maintenance check for all coated vehicles. During this visit, we inspect the coating under specialist lighting, assess its condition, and apply a maintenance boost product where needed. This annual service is also required to maintain the warranty on some Ceramic Pro packages. Contact us to book your annual maintenance appointment.
      </p>
    </>
  ),
};

const STUB_CONTENT = (title: string) => (
  <div className="bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl p-6">
    <p className="text-[#c9a84c] font-semibold mb-2">[PLACEHOLDER: Full Article Content]</p>
    <p className="text-gray-400 text-sm">
      This article (&quot;{title}&quot;) needs full content written before launch. The blog structure, metadata, and related post links are all in place — only the body copy needs to be added here in <code className="text-gray-300">FULL_CONTENT</code> in <code className="text-gray-300">src/app/(site)/blog/[slug]/page.tsx</code>.
    </p>
  </div>
);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const content = FULL_CONTENT[slug] ?? STUB_CONTENT(post.title);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${slug}` }]} />
      </div>

      <article className="py-8 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 text-xs font-semibold px-3 py-1 rounded mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span>By Ceramic Pro North West</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="h-60 bg-gradient-to-br from-[#242424] to-[#1a1a1a] rounded-xl flex items-center justify-center mb-10 border border-[#3a3a3a]">
            <span className="text-xs text-gray-700 uppercase tracking-widest">[PLACEHOLDER: Article Header Image]</span>
          </div>

          {/* Content */}
          <div className="prose-custom">
            {content}
          </div>

          {/* Author / About box */}
          <div className="mt-12 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f0f0f] text-lg shrink-0">
              CP
            </div>
            <div>
              <p className="font-heading font-bold text-white">Ceramic Pro North West</p>
              <p className="text-gray-400 text-sm mt-1">
                Bolton&apos;s certified Ceramic Pro installer and car detailing specialists. Based in Farnworth, serving Greater Manchester.{" "}
                <Link href="/about" className="text-[#c9a84c] hover:underline">Learn more about us.</Link>
              </p>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`}
                className="group block bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 hover:border-[#c9a84c]/50 transition-all">
                <span className="text-[#c9a84c] text-xs font-semibold">{rp.category}</span>
                <h3 className="font-heading font-bold text-white mt-2 text-sm leading-snug group-hover:text-[#c9a84c] transition-colors">
                  {rp.title}
                </h3>
                <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                  {rp.readTime} <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Get a free quote from Ceramic Pro North West — Bolton's certified detailing specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
