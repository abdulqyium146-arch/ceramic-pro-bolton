import type { Metadata } from "next";
import Image from "next/image";
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
  title: {
    absolute:
      "Latin King Detailing | Car Ceramic Coating Bolton & Greater Manchester",
  },
  description:
    "Bolton's car ceramic coating specialists. Latin King Detailing — Ceramic Pro 9H, KAVACA PPF, paint protection film & professional car detailing. Serving Bolton, Manchester, Salford, Bury, Wigan, Chorley, Altrincham. Free quote: 07482 225323.",
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
    text: "Third time using Latin King Detailing for my cars. Consistent quality every time. The ceramic coating on my Range Rover has held up perfectly through two winters now. Highly recommend to anyone in Bolton or Manchester.",
    date: "November 2024",
    source: "facebook" as const,
  },
];

const HOME_FAQS = [
  {
    question: "How much does ceramic coating cost in Bolton?",
    answer:
      "Prices depend on your car's size and the package you want — entry-level starts from [PLACEHOLDER] on a compact car, and a full Ceramic Pro 9H application on an SUV or prestige vehicle will be more. The best thing to do is drop us a message with your make and model. We'll come straight back with an honest quote, no pressure.",
  },
  {
    question: "Is ceramic coating worth it for a daily driver?",
    answer:
      "Genuinely, yes — and most people notice the difference straight away. After coating, water beads off, dirt doesn't cling the same way, and you spend far less time washing. For a Greater Manchester daily driver dealing with road salt, rain, and bird lime all year, the protection is real. Most of our customers say it paid for itself within 12–18 months in reduced cleaning costs alone.",
  },
  {
    question: "How long does a Ceramic Pro coating last?",
    answer:
      "A properly applied Ceramic Pro 9H coating lasts 2–5 years, depending on the package and how you look after it. The care routine is simple: pH-neutral shampoo, no automatic car washes, and an annual check with us. Do that, and you'll get every year out of it.",
  },
  {
    question: "Do you offer paint protection film (PPF) in Bolton?",
    answer:
      "Yes — we install KAVACA PPF, the self-healing paint protection film from the Ceramic Pro brand. It goes on clear, stays clear, physically protects against stone chips, and it's removable if you ever sell the car. We can cover just the high-impact zones or the full vehicle — give us a call and we'll explain what makes sense for your car.",
  },
];

const BLOG_TEASERS = [
  {
    slug: "ceramic-coating-vs-wax-bolton",
    title: "Ceramic Coating vs Wax: What Bolton Drivers Should Know",
    excerpt: "Is ceramic coating really worth the investment over traditional wax? We break down the differences every Greater Manchester driver should understand.",
    category: "Ceramic Coating",
    image: "/images/mirror-finish-ceramic-coating-reflection-bolton.webp",
    imageAlt: "Ultra-gloss mirror finish ceramic coating result — Latin King Detailing, Bolton",
  },
  {
    slug: "how-to-maintain-ceramic-coating-uk-weather",
    title: "How to Maintain Your Ceramic Coating in UK Weather",
    excerpt: "British weather is tough on car paint. Here's how to keep your coating performing through rain, frost, and road salt season.",
    category: "Maintenance",
    image: "/images/bmw-m5-ceramic-coating-bolton-workshop.webp",
    imageAlt: "Black BMW M5 ceramic coating maintenance at Latin King Detailing, Bolton",
  },
  {
    slug: "ppf-vs-ceramic-coating-which-is-right-for-you",
    title: "PPF vs Ceramic Coating: Which Protection Does Your Car Need?",
    excerpt: "Both protect your car — but they work very differently. We explain which is right for your vehicle and budget.",
    category: "PPF",
    image: "/images/bentley-continental-gt-ppf-installation-bolton.webp",
    imageAlt: "Bentley Continental GT KAVACA PPF installation at Latin King Detailing, Bolton",
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
            We&apos;re Bolton&apos;s car ceramic coating specialists — based in Farnworth, five minutes from junction 4 of the M61. We apply Ceramic Pro 9H, install KAVACA PPF, and detail cars to a standard you won&apos;t get from a drive-through wash. If you want it done properly, you&apos;ve found the right place.
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

      {/* Recent Work Strip */}
      <section className="py-10 px-4 bg-[#0a0a0a]" aria-label="Recent ceramic coating work in Bolton">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-5">Recent Work — Bolton Workshop</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                src: "/images/lamborghini-aventador-ceramic-coating-bolton.webp",
                alt: "Lamborghini Aventador ceramic coating — Latin King Detailing, Bolton, Greater Manchester",
                label: "Lamborghini Aventador",
              },
              {
                src: "/images/ferrari-360-modena-detailing-bolton.webp",
                alt: "Ferrari 360 Modena detailing — Latin King Detailing, Farnworth, Bolton",
                label: "Ferrari 360 Modena",
              },
              {
                src: "/images/bentley-continental-gtc-ceramic-coating-bolton.webp",
                alt: "Bentley Continental GTC Ceramic Pro 9H coating — Bolton workshop",
                label: "Bentley Continental GTC",
              },
              {
                src: "/images/bmw-m5-f10-ceramic-coating-bolton.webp",
                alt: "BMW M5 F10 mirror-gloss ceramic coating — Latin King Detailing, Bolton",
                label: "BMW M5 F10",
              },
            ].map((img) => (
              <Link
                key={img.src}
                href="/gallery"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold drop-shadow">
                  {img.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:gap-3 transition-all">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
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
              Latin King Detailing offers a complete range of paint protection and car care services from our Bolton workshop, using only professional-grade products.
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
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Why Latin King Detailing</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Bolton&apos;s Trusted Paint Protection Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Ceramic Pro Certified Installer",
                desc: "Certification means your coating is registered directly to your car's VIN with Ceramic Pro — so the warranty is real and traceable. Anyone can claim to 'use Ceramic Pro.' Being a certified installer means we're held accountable to the brand's standards on every single job.",
              },
              {
                icon: Star,
                title: "Professional Products Only",
                desc: "Ceramic Pro 9H and KAVACA PPF are the products used on Lamborghinis, Bentleys, and McLarens. We don't stock consumer-grade alternatives — what goes on your car is exactly the same as what goes on the cars in our gallery.",
              },
              {
                icon: MapPin,
                title: "Local Bolton Specialists",
                desc: "Our workshop is in Farnworth, five minutes from the M61 at junction 4. Our customers drive from across Greater Manchester because they know what they're getting. We understand what Bolton roads and winters do to paintwork — and we know how to protect against it.",
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
            Latin King Detailing is based in Farnworth, Bolton and serves customers across Greater Manchester and the surrounding area.
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

      {/* Trusted Partners */}
      <section className="py-16 px-4 bg-[#0f0f0f]" aria-labelledby="partners-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Trusted Network</p>
            <h2 id="partners-heading" className="font-heading text-3xl font-bold text-white mb-4">
              Our Manchester Partner
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We work alongside trusted specialists across Greater Manchester. When our diary is full or you need a mobile service at your door, we recommend our verified partner.
            </p>
          </div>
          <a
            href="https://www.latinkingdetailing.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#1a1a1a] border border-[#3a3a3a] hover:border-[#c9a84c]/50 rounded-2xl p-7 transition-all"
          >
            {/* Logo placeholder badge */}
            <div className="shrink-0 w-16 h-16 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
              <span className="text-[#c9a84c] font-heading font-bold text-xl">LK</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-[#c9a84c] transition-colors">
                  Latin King Detailing
                </h3>
                <span className="text-xs bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] px-2 py-0.5 rounded-full font-semibold">
                  Verified Partner
                </span>
                <span className="text-xs text-gray-500">★★★★★ 5.0 · 47+ reviews</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Mobile car detailing, paint correction, ceramic coating, and PPF — delivered to your door across Manchester, Salford, Stretford, Sale, Altrincham, and 15+ Greater Manchester locations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Mobile Valeting", "Paint Correction", "Ceramic Coating", "PPF"].map((tag) => (
                  <span key={tag} className="text-xs text-gray-400 border border-[#3a3a3a] rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#c9a84c] shrink-0 hidden sm:block group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0a0a0a]" aria-labelledby="faq-heading">
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
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
