import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Film, Sparkles, Layers, Phone, Star, MapPin, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import ServiceCard from "@/components/ui/ServiceCard";
import StatsBanner from "@/components/ui/StatsBanner";
import ReviewCard from "@/components/ui/ReviewCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FAQAccordion from "@/components/ui/FAQAccordion";
import MapEmbed from "@/components/ui/MapEmbed";
import TrustBar from "@/components/ui/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Ceramic Pro North West | Ceramic Coating & Car Detailing Bolton",
  description:
    "Bolton's trusted ceramic coating & car detailing specialists. Ceramic Pro 9H, KAVACA PPF, professional valet. 4.7★ Google rated. Call or WhatsApp 07482 225323.",
  alternates: { canonical: "/" },
};

const SERVICE_ICONS = [Shield, Film, Sparkles, Layers];

const COMPARISON_ROWS = [
  { feature: "Paint hardness protection", "Ceramic Coating": true, "PPF / KAVACA": true, "Traditional Wax": false },
  { feature: "Self-healing surface", "Ceramic Coating": false, "PPF / KAVACA": true, "Traditional Wax": false },
  { feature: "Scratch resistance", "Ceramic Coating": "partial", "PPF / KAVACA": true, "Traditional Wax": false },
  { feature: "UV & oxidation protection", "Ceramic Coating": true, "PPF / KAVACA": true, "Traditional Wax": "partial" },
  { feature: "Hydrophobic effect", "Ceramic Coating": true, "PPF / KAVACA": true, "Traditional Wax": "partial" },
  { feature: "Stone chip protection", "Ceramic Coating": false, "PPF / KAVACA": true, "Traditional Wax": false },
  { feature: "Deep gloss enhancement", "Ceramic Coating": true, "PPF / KAVACA": "partial", "Traditional Wax": "partial" },
  { feature: "Longevity", "Ceramic Coating": "2–5 years", "PPF / KAVACA": "7–10 years", "Traditional Wax": "1–3 months" },
];

const REVIEWS = [
  {
    author: "James T.",
    rating: 5,
    text: "Had my BMW 5 Series coated with Ceramic Pro 9H. The finish is incredible — water just rolls straight off. Brilliant service from start to finish and the team really knows their stuff. Worth every penny.",
    date: "March 2025",
    source: "google" as const,
  },
  {
    author: "Sarah M.",
    rating: 5,
    text: "Brought my Audi Q5 in for a full detail and paint protection film on the front end. Absolutely delighted with the results. The car looks better than when it came out of the showroom. Will definitely be back.",
    date: "January 2025",
    source: "google" as const,
  },
  {
    author: "Dave R.",
    rating: 5,
    text: "Third time using Initial Detail for my cars. Consistent quality every time. The ceramic coating on my Range Rover has held up perfectly through two winters now. Highly recommend to anyone in Bolton or Manchester.",
    date: "November 2024",
    source: "facebook" as const,
  },
];

const HOME_FAQS = [
  {
    question: "How much does ceramic coating cost in Bolton?",
    answer:
      "Ceramic coating prices at Ceramic Pro North West depend on vehicle size and the coating package chosen. Prices start from [PLACEHOLDER] for compact vehicles with an entry-level ceramic coating. A full Ceramic Pro 9H professional application on a larger vehicle is [PLACEHOLDER]. Contact us for a free, no-obligation quote tailored to your car.",
  },
  {
    question: "Is ceramic coating worth it for a daily driver?",
    answer:
      "Yes — ceramic coating is excellent value for daily drivers. It significantly reduces the time spent washing and maintaining your car, protects against UV damage, bird lime, and road grime, and keeps your car looking newer for longer. Most customers see it pay for itself in reduced detailing costs within 18 months.",
  },
  {
    question: "How long does a Ceramic Pro coating last?",
    answer:
      "Ceramic Pro 9H applied by a certified installer like Ceramic Pro North West typically lasts 2–5 years depending on the package, how the car is used, and how well it is maintained. With the correct aftercare — pH-neutral car shampoo and avoiding automatic car washes — you can expect maximum longevity from your coating.",
  },
  {
    question: "Do you offer paint protection film (PPF) in Bolton?",
    answer:
      "Yes. Ceramic Pro North West offers KAVACA Paint Protection Film, the premium self-healing PPF product from the Ceramic Pro brand. KAVACA can be applied to the full vehicle or to high-impact zones such as the bonnet, bumpers, door edges, and mirror caps. Call us to discuss options for your vehicle.",
  },
];

const BLOG_TEASERS = [
  {
    slug: "ceramic-coating-vs-wax-bolton",
    title: "Ceramic Coating vs Wax: What Bolton Drivers Should Know",
    excerpt: "Is ceramic coating really worth the investment over traditional wax? We break down the differences every Greater Manchester driver should understand.",
    category: "Ceramic Coating",
  },
  {
    slug: "how-to-maintain-ceramic-coating-uk-weather",
    title: "How to Maintain Your Ceramic Coating in UK Weather",
    excerpt: "British weather is tough on car paint. Here's how to keep your coating performing through rain, frost, and road salt season.",
    category: "Maintenance",
  },
  {
    slug: "ppf-vs-ceramic-coating-which-is-right-for-you",
    title: "PPF vs Ceramic Coating: Which Protection Does Your Car Need?",
    excerpt: "Both protect your car — but they work very differently. We explain which is right for your vehicle and budget.",
    category: "PPF",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaFAQ faqs={HOME_FAQS} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #c9a84c22 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, #c9a84c11 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[url('/images/lamborghini-aventador-ceramic-coating-bolton.webp')] bg-cover bg-center opacity-20" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-full px-4 py-2 mb-8">
            <span className="stars text-sm">★★★★★</span>
            <span className="text-white text-sm font-semibold">{BUSINESS.rating.google.value} Google Rating</span>
            <span className="text-gray-400 text-sm">· {BUSINESS.rating.google.count} Reviews</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Bolton&apos;s Premier{" "}
            <span className="text-shimmer">Ceramic Coating</span>
            <br />
            &amp; Car Detailing Specialists
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Ceramic Pro North West delivers professional-grade paint protection, PPF, and car detailing from our Farnworth, Bolton workshop. Serving Greater Manchester with Ceramic Pro 9H certified installations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#c9a84c] text-[#0f0f0f] font-bold text-lg hover:bg-[#e8c96c] transition-all shadow-lg shadow-[#c9a84c]/20 w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 rounded-xl border-2 border-[#3a3a3a] text-white font-bold text-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {[
              "Ceramic Pro Certified",
              "Fully Insured",
              "Bolton's Local Specialists",
              "KAVACA PPF Approved",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c9a84c]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-[#3a3a3a] rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-[#c9a84c] rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <StatsBanner
            stats={[
              { value: `${BUSINESS.rating.google.value}★`, label: "Google Rating" },
              { value: `${BUSINESS.rating.google.count}+`, label: "Happy Customers" },
              { value: "Ceramic Pro", label: "Certified Installer" },
              { value: "KAVACA", label: "PPF Approved" },
            ]}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#0a0a0a]" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Professional Car Protection &amp; Detailing Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ceramic Pro North West offers a complete range of paint protection and car care services from our Bolton workshop, using only professional-grade products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  slug={service.slug}
                  shortDesc={service.shortDesc}
                  icon={<Icon className="w-6 h-6" />}
                />
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Why Ceramic Pro North West</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Bolton&apos;s Trusted Paint Protection Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Ceramic Pro Certified Installer",
                desc: "As an authorised Ceramic Pro installer, every coating is applied to the brand's strict professional standards, ensuring maximum hardness, clarity, and durability.",
              },
              {
                icon: Star,
                title: "Premium Products Only",
                desc: "We use Ceramic Pro 9H and KAVACA PPF — the same professional-grade products used on supercars worldwide. No diluted consumer-grade coatings here.",
              },
              {
                icon: MapPin,
                title: "Local Bolton Specialists",
                desc: "Based in Farnworth, Bolton, Ceramic Pro North West is your local expert. We know Greater Manchester roads and weather — and how to protect your car from them.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[#c9a84c]" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Ceramic Coating vs PPF vs Traditional Wax
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not sure which protection is right for your car? This comparison covers the key differences so you can make an informed decision.
            </p>
          </div>
          <ComparisonTable
            columns={["Ceramic Coating", "PPF / KAVACA", "Traditional Wax"]}
            rows={COMPARISON_ROWS}
          />
          <p className="text-center text-gray-500 text-sm mt-4">
            Need advice?{" "}
            <Link href="/contact" className="text-[#c9a84c] hover:underline">
              Talk to our team
            </Link>{" "}
            about the best option for your vehicle and budget.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#0f0f0f]" aria-labelledby="reviews-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Customer Reviews</p>
            <h2 id="reviews-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              What Bolton &amp; Manchester Drivers Say
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">{BUSINESS.rating.google.value}</span>
              <span className="text-gray-400">· {BUSINESS.rating.google.count} Google reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-[#0a0a0a]" aria-labelledby="areas-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Where We Work</p>
          <h2 id="areas-heading" className="font-heading text-3xl font-bold text-white mb-4">
            Serving Bolton &amp; Greater Manchester
          </h2>
          <p className="text-gray-400 mb-8">
            Ceramic Pro North West is based in Farnworth, Bolton and serves customers across Greater Manchester and the surrounding area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS.serviceArea.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="px-5 py-2 rounded-full border border-[#3a3a3a] text-gray-300 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0f0f0f]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="font-heading text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Common questions about ceramic coating and car detailing in Bolton.
            </p>
          </div>
          <FAQAccordion faqs={HOME_FAQS} />
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Visit Us in Farnworth, Bolton
            </h2>
            <address className="not-italic text-gray-400 leading-loose mb-6">
              <strong className="text-white">{BUSINESS.name}</strong><br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.locality}<br />
              {BUSINESS.address.city}, {BUSINESS.address.postcode}
            </address>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#3a3a3a] text-white font-bold rounded-xl hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp Us
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#3a3a3a] text-white font-bold rounded-xl hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
              >
                <MapPin className="w-5 h-5" />
                Directions
              </a>
            </div>
          </div>
          <MapEmbed height={380} />
        </div>
      </section>

      {/* Blog teasers */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Advice &amp; Guides</p>
            <h2 className="font-heading text-3xl font-bold text-white">Car Care Tips from Our Bolton Workshop</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_TEASERS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-[#242424] to-[#1a1a1a] flex items-center justify-center">
                  <span className="text-xs text-gray-600 uppercase tracking-widest">[PLACEHOLDER: Article Image]</span>
                </div>
                <div className="p-6">
                  <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-heading font-bold text-white mt-2 mb-2 group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all">
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Get a free, no-obligation quote from Bolton's Ceramic Pro certified specialists. We'll recommend the right protection for your vehicle and budget."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
