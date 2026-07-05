import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import MapEmbed from "@/components/ui/MapEmbed";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Ceramic Coating & Car Detailing Bolton | Ceramic Pro North West",
  description:
    "Bolton's trusted ceramic coating and car detailing specialists. Ceramic Pro 9H, KAVACA PPF, professional valet. Based in Farnworth. Call +44 1204 435933.",
  alternates: { canonical: "/locations/bolton" },
};

const FAQS = [
  {
    question: "Where is Ceramic Pro North West located in Bolton?",
    answer:
      "Ceramic Pro North West is based at 115 Albert Road, Farnworth, Bolton, BL4 9EA. Farnworth is approximately 2 miles south of Bolton town centre, easily accessible from the A6053 and close to the M61 motorway junction. We are a short drive from Bolton town centre, Horwich, Little Lever, and Kearsley.",
  },
  {
    question: "Do you offer ceramic coating in Bolton for all vehicle types?",
    answer:
      "Yes — Ceramic Pro North West applies ceramic coatings to cars, SUVs, vans, motorcycles, and motorhomes. We tailor every application to the specific vehicle's paint condition and the customer's requirements. All vehicles undergo a full inspection and decontamination before coating.",
  },
  {
    question: "Why is ceramic coating particularly useful for Bolton drivers?",
    answer:
      "Greater Manchester's climate — frequent rain, road salt in winter, and motorway driving on the M61/M62 — is extremely harsh on car paint. Ceramic coating's hydrophobic and chemical-resistant properties make it ideal for Bolton drivers who want to protect their paint from the elements and reduce maintenance time throughout the year.",
  },
  {
    question: "How do I book a car detailing appointment in Bolton?",
    answer:
      "You can book by calling Ceramic Pro North West on +44 1204 435933, sending a WhatsApp message, or using the contact form on our website. We will discuss your vehicle's requirements, recommend the appropriate service, and book you in at our Farnworth workshop at a convenient time.",
  },
  {
    question: "Do you offer paint protection film (PPF) in Bolton?",
    answer:
      "Yes — we install KAVACA Paint Protection Film (PPF) at our Bolton workshop. Available as full-vehicle coverage or targeted stone chip protection on the bonnet, bumpers, and mirrors. Contact us to discuss the right coverage option for your vehicle.",
  },
];

export default function BoltonPage() {
  return (
    <>
      <SchemaFAQ faqs={FAQS} />

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
          <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> Bolton, Greater Manchester
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Ceramic Coating &amp; Car Detailing Bolton — Your Local Specialists
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Ceramic Pro North West is Bolton&apos;s trusted source for professional ceramic coatings, paint protection film, and car detailing. Based in Farnworth — just 2 miles from Bolton town centre — our certified workshop serves the whole of Bolton and surrounding Greater Manchester. We are the local Ceramic Pro installers for Bolton, Farnworth, Horwich, Little Lever, Kearsley, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Why Bolton drivers choose us */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Bolton Drivers Choose Ceramic Pro North West
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Local Bolton Workshop",
                desc: "Our workshop is based in Farnworth — genuinely local, with easy parking and no lengthy journey. Bolton customers can drop their car off in the morning and collect it the same day for most services.",
              },
              {
                title: "Ceramic Pro Certified",
                desc: "Not all ceramic coating installers are equal. As an authorised Ceramic Pro installer, we apply the genuine Ceramic Pro 9H product to the brand's certified standards — and the product is registered against your vehicle for warranty purposes.",
              },
              {
                title: "North West Weather Experts",
                desc: "We know exactly what Greater Manchester weather does to car paint — acid rain, winter road salt, bird droppings from M61 / M62 motorway driving. Our coating recommendations are tailored to North West conditions.",
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

      {/* Services in Bolton */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Services Available to Bolton Customers
          </h2>
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
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Protecting Bolton Cars from Greater Manchester Weather
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bolton sits at the foot of the West Pennine Moors, making it one of the wetter parts of Greater Manchester. Regular rainfall, combined with industrial fallout and road salt used extensively on Bolton&apos;s roads and the M61 junction between October and March, creates a challenging environment for car paintwork. Ceramic coating&apos;s hydrophobic properties mean water and road salt bead off the surface instead of bonding with the paint, dramatically reducing corrosive damage.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Acid rain — a particular issue near motorway corridors — can etch bare or wax-protected paint over time. Ceramic Pro 9H&apos;s chemical resistance creates a stable barrier against these etching agents, protecting your paint&apos;s clear coat from the kind of microscopic damage that accumulates invisibly until it becomes a costly paint correction job.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Our Bolton Workshop — How to Find Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ceramic Pro North West is located at 115 Albert Road, Farnworth, Bolton, BL4 9EA. Farnworth is just off the A6053, approximately 2 miles south of Bolton town centre and 5 minutes from the M61 motorway. There is convenient on-street parking available, and we are easily reachable by bus from Bolton town centre via Farnworth bus routes.
            </p>
            <address className="not-italic bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 text-gray-400 text-sm leading-loose">
              <strong className="text-white">{BUSINESS.name}</strong><br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.locality}, {BUSINESS.address.city}<br />
              {BUSINESS.address.postcode}<br />
              <a href={`tel:${BUSINESS.phone}`} className="text-[#c9a84c] hover:underline">{BUSINESS.phoneDisplay}</a>
            </address>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 px-4 bg-[#0f0f0f]">
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
      <section className="py-12 px-4 bg-[#0a0a0a]">
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
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Bolton Ceramic Coating FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Bolton's Ceramic Coating Specialists"
        subtext="Based in Farnworth — your local Ceramic Pro certified installers for Bolton and Greater Manchester."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phone}`, isPhone: true }}
        variant="gold"
      />
    </>
  );
}
