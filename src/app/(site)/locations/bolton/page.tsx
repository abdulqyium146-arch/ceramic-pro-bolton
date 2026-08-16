import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Star, CheckCircle, Clock } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import MapEmbed from "@/components/ui/MapEmbed";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaService from "@/components/seo/SchemaService";

export const metadata: Metadata = {
  title: "Ceramic Coating Bolton BL4 — 4.7★ Rated, Ceramic Pro Certified",
  description:
    "Bolton's nearest Ceramic Pro 9H certified installer. Latin King Detailing, Farnworth BL4 — 2 miles from Bolton town centre. 4.7★ Google rated. Free quote: 07482 225323.",
  alternates: { canonical: "/locations/bolton" },
};

const FAQS = [
  {
    question: "Where is the nearest ceramic coating service to Bolton town centre?",
    answer:
      "We're at 115 Albert Road, Farnworth — about 2 miles south of Bolton town centre and 5 minutes from the M61 junction 4. As a certified Ceramic Pro installer, we're your closest professional ceramic coating option in the Bolton area. Most BL postcode customers are at the workshop in under 10 minutes.",
  },
  {
    question: "Do you offer ceramic coating for cars near BL1, BL2, BL3, or BL5?",
    answer:
      "Yes — we're at BL4 9EA and cover all Bolton postcodes: BL1 (town centre), BL2 (Tonge Moor, Breightmet), BL3 (Great Lever, Deane), BL4 (Farnworth — us), BL5 (Westhoughton), BL6 (Horwich), BL7 (Bromley Cross, Egerton), and surrounding M26/M27/M28 areas including Radcliffe, Swinton, and Worsley. Most Bolton customers reach us in under 10 minutes.",
  },
  {
    question: "Is ceramic coating worth it for everyday cars near Bolton?",
    answer:
      "Yes — and it makes particular sense here. Bolton drivers face road salt on the M61 and M62 from October to March, above-average rainfall at the foot of the Pennines, and industrial fallout. Ceramic Pro 9H's hydrophobic and chemical-resistant properties directly address all of it. We coat everything from daily Vauxhall Astras to Range Rovers — not just prestige cars.",
  },
  {
    question: "How much does ceramic coating for a car cost near Bolton?",
    answer:
      "Prices depend on the vehicle, its condition, and the package. A well-maintained car needs less preparation than one that's come through automatic car washes regularly. Call or WhatsApp us on 07482 225323 — we'll give you a straight quote with no pressure. For most vehicles we can give an accurate figure over the phone or from a few photos.",
  },
  {
    question: "Do you offer paint protection film (PPF) near Bolton as well?",
    answer:
      "Yes — KAVACA PPF is available at our BL4 workshop. You can choose targeted protection on the highest-risk zones (bonnet edge, bumpers, door edges), a front-end package, or full vehicle coverage. KAVACA is self-healing and physically absorbs stone chips — the thing ceramic coating alone can't do.",
  },
  {
    question: "Can I get a same-day ceramic coating quote near Bolton?",
    answer:
      "Yes — call or WhatsApp us on 07482 225323 and we'll talk you through it. Most vehicles can be quoted accurately over the phone or from a couple of photos. No obligation to book. We're straightforward about what your car needs and what it'll cost.",
  },
];

const BOLTON_POSTCODES = [
  { code: "BL1", area: "Bolton Town Centre, Astley Bridge" },
  { code: "BL2", area: "Tonge Moor, Breightmet, Darcy Lever" },
  { code: "BL3", area: "Great Lever, Rumworth, Deane" },
  { code: "BL4", area: "Farnworth, Kearsley — our workshop" },
  { code: "BL5", area: "Westhoughton, Daisy Hill" },
  { code: "BL6", area: "Horwich, Lostock, Blackrod" },
  { code: "BL7", area: "Bromley Cross, Egerton, Edgworth" },
  { code: "M26", area: "Radcliffe, Little Lever" },
  { code: "M27", area: "Swinton, Pendlebury" },
  { code: "M28", area: "Worsley, Boothstown, Walkden" },
];

export default function BoltonPage() {
  return (
    <>
      <SchemaFAQ faqs={FAQS} />
      <SchemaService
        name="Ceramic Coating for Cars — Bolton, BL4"
        description="Professional Ceramic Pro 9H ceramic coating for cars in Bolton. Certified installer at BL4 9EA serving all Bolton postcodes and Greater Manchester. Includes KAVACA PPF, car detailing, and leather protection."
        slug="ceramic-coating"
        serviceType="Ceramic Coating"
      />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Locations", href: "/locations/bolton" },
            { name: "Bolton", href: "/locations/bolton" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c9a84c] text-[#c9a84c]" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">{BUSINESS.rating.google.value} Google Rating</span>
            <span className="text-gray-400 text-sm">· {BUSINESS.rating.google.count} reviews</span>
          </div>

          <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> Bolton, BL4 9EA · Greater Manchester
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ceramic Coating for Cars<br />
            <span className="text-[#c9a84c]">Near You in Bolton</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Latin King Detailing is at 115 Albert Road, Farnworth — 2 miles south of Bolton town centre, 5 minutes from junction 4 of the M61. If you want proper ceramic coating in Bolton — not a consumer spray product, but a genuine Ceramic Pro 9H installation that bonds permanently to your paint and carries a registered warranty — we&apos;re your closest certified option. We serve all BL postcodes and across Greater Manchester.
          </p>

          {/* Trust signals row */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
            {[
              { icon: CheckCircle, text: "Ceramic Pro Certified" },
              { icon: Clock, text: "Available 24/7" },
              { icon: MapPin, text: "BL4 9EA — 2 miles from Bolton centre" },
              { icon: CheckCircle, text: "Free quotes" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#c9a84c]" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-[#c9a84c] text-sm font-medium transition-colors self-center">
              Or call {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Hero image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/bmw-m5-ceramic-coating-bolton-workshop.webp"
              alt="Ceramic coating for cars near Bolton — BMW M5 at Latin King Detailing, Farnworth, BL4 9EA"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="text-white text-sm font-semibold drop-shadow">Latin King Detailing · Farnworth, Bolton BL4 9EA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Postcodes we cover */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Postcodes We Cover</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Ceramic Coating for Cars Near Every Bolton Postcode
          </h2>
          <p className="text-gray-400 mb-8">
            Our Farnworth workshop is within 10 minutes of every BL postcode. If you&apos;re searching for ceramic coating for cars near me anywhere in Bolton or the surrounding area, we&apos;re your closest certified option.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BOLTON_POSTCODES.map((p) => (
              <div key={p.code} className={`flex items-start gap-3 rounded-xl p-4 border ${p.code === "BL4" ? "bg-[#c9a84c]/10 border-[#c9a84c]/30" : "bg-[#1a1a1a] border-[#3a3a3a]"}`}>
                <div className={`shrink-0 font-heading font-bold text-sm px-2 py-1 rounded ${p.code === "BL4" ? "bg-[#c9a84c] text-[#0f0f0f]" : "bg-[#2a2a2a] text-[#c9a84c]"}`}>
                  {p.code}
                </div>
                <span className="text-gray-300 text-sm leading-snug">{p.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Bolton Drivers Choose Latin King Detailing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Your Nearest Certified Installer",
                desc: "Based at BL4 9EA, we are the nearest Ceramic Pro certified installer to Bolton town centre. No long journey to Manchester — professional ceramic coating for your car is available right here in Farnworth, less than 10 minutes from most Bolton postcodes.",
              },
              {
                title: "Genuine Ceramic Pro 9H",
                desc: "Not all ceramic coatings are equal. As a certified Ceramic Pro installer, we use genuine Ceramic Pro 9H — the same professional product used on supercars worldwide. Each installation is registered against your vehicle for warranty and certification purposes.",
              },
              {
                title: "North West Weather Experts",
                desc: "Bolton's wet climate, road salt, and motorway driving demand proper protection. We tailor every ceramic coating to the specific challenges Greater Manchester drivers face — not a one-size-fits-all product applied without assessment.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
                <h3 className="font-heading font-bold text-[#c9a84c] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-2">
            Services Available Near Bolton
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            All services are available at our Farnworth workshop — ceramic coating for cars, PPF, detailing, and interior protection.
          </p>
          <div className="space-y-4">
            {BUSINESS.services.map((service) => (
              <div key={service.slug} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.shortDesc}</p>
                </div>
                <Link href={`/services/${service.slug}`}
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 border border-[#c9a84c] text-[#c9a84c] rounded-lg text-sm font-semibold hover:bg-[#c9a84c]/10 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bolton-specific content */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Why Ceramic Coating for Cars Near Bolton Is a Smart Investment
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bolton sits at the foot of the West Pennine Moors — one of the wetter corners of Greater Manchester. Road salt goes down on Bolton&apos;s roads and the M61 from October through March, industrial fallout settles on paintwork between washes, and the climate gives your car no dry season to recover. Unprotected paint deteriorates quietly: first swirls, then fading, then clear coat failure.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ceramic Pro 9H is a direct answer to all of that. Its hydrophobic properties mean water and salt bead off instead of soaking in. Its chemical resistance handles acid rain — a real issue near motorway corridors like the M61 and M62 — that wax simply can&apos;t sustain over a full North West winter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/lamborghini-aventador-ceramic-coating-bolton.webp"
                alt="Lamborghini Aventador ceramic coating near Bolton — Latin King Detailing, BL4"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/bentley-continental-gtc-ceramic-coating-bolton.webp"
                alt="Bentley Continental ceramic coating near Bolton — Latin King Detailing, Farnworth"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/bmw-m5-f10-ceramic-coating-bolton.webp"
                alt="BMW M5 ceramic coating near Bolton — Latin King Detailing, BL4 9EA"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Our Bolton Workshop — How to Find Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              Latin King Detailing is located at 115 Albert Road, Farnworth, Bolton, BL4 9EA — just off the A6053, approximately 2 miles south of Bolton town centre and 5 minutes from the M61 motorway junction 4. The most convenient route from Bolton town centre is via Manchester Road (A666) south through Farnworth. On-street parking is available, and we are reachable by bus from Bolton via Farnworth bus routes.
            </p>
            <address className="not-italic bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 text-gray-400 text-sm leading-loose">
              <strong className="text-white">{BUSINESS.name}</strong><br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.locality}, {BUSINESS.address.city}<br />
              <strong className="text-[#c9a84c]">{BUSINESS.address.postcode}</strong><br />
              <a href={`tel:${BUSINESS.phone}`} className="text-[#c9a84c] hover:underline">{BUSINESS.phoneDisplay}</a>
            </address>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <MapEmbed height={380} />
          <div className="mt-4 text-center">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:underline"
            >
              <MapPin className="w-4 h-4" /> Get Directions to Our Bolton Workshop
            </a>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-white mb-4">Also Serving These Areas</h2>
          <div className="flex flex-wrap gap-2">
            {BUSINESS.serviceArea.filter((a) => a.slug !== "bolton").map((area) => (
              <Link key={area.slug} href={`/locations/${area.slug}`}
                className="px-4 py-1.5 rounded-full border border-[#3a3a3a] text-sm text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Ceramic Coating Near Bolton — FAQs
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Bolton's Nearest Ceramic Coating Installer"
        subtext="Certified Ceramic Pro specialists at BL4 9EA. Free quotes. Available 24/7. Serving all Bolton postcodes."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
