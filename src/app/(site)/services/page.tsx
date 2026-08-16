import type { Metadata } from "next";
import { Shield, Film, Sparkles, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import ServiceCard from "@/components/ui/ServiceCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import StatsBanner from "@/components/ui/StatsBanner";

export const metadata: Metadata = {
  title: "Car Ceramic Coating & Detailing Services Bolton, Greater Manchester",
  description:
    "Car ceramic coating, paint protection film, car detailing & leather protection in Bolton, Greater Manchester. Latin King Detailing — Ceramic Pro 9H certified. Serving all of Greater Manchester.",
  alternates: { canonical: "/services" },
};

const SERVICE_ICONS = [Shield, Film, Sparkles, Layers];

const SERVICE_DETAILS = [
  {
    headline: "The definitive paint protection",
    body: "Ceramic Pro 9H is the professional standard in ceramic coating technology. Applied by our certified technicians, it bonds permanently with your paint to create a 9H hardness layer that resists swirl marks, UV damage, chemical etching, and environmental fallout. Unlike consumer waxes or sealants, a professionally applied ceramic coating lasts years — not weeks.",
  },
  {
    headline: "The ultimate physical barrier",
    body: "KAVACA Paint Protection Film from Ceramic Pro is a self-healing urethane film that physically absorbs impacts from stone chips, road debris, and scratches. With anti-yellowing technology and optical clarity, KAVACA preserves your car's finish under the toughest conditions. Available as full-car or partial coverage to suit your budget.",
  },
  {
    headline: "Restore and maintain showroom condition",
    body: "Our car detailing and valet packages range from thorough exterior machine polishes to full multi-day details with paint correction. Whether your car needs swirl marks removed before a ceramic coating, or a periodic deep clean to maintain its protection, our Bolton workshop has the equipment and expertise to deliver.",
  },
  {
    headline: "Protect your interior investment",
    body: "Leather and fabric interiors are vulnerable to UV degradation, cracking, staining, and odour absorption. Our leather coating treatments and interior protection products seal and protect seats, dashboards, door panels, and carpets — keeping your cabin looking and feeling like new.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Services", href: "/services" }]} />

      {/* Header */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Car Protection &amp; Detailing Services in Bolton
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            We cover the full range — Ceramic Pro 9H ceramic coating, KAVACA PPF, professional detailing and valeting, and leather interior protection. Everything goes through our Farnworth workshop, applied by certified technicians with genuine professional-grade products. We don&apos;t outsource any of it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <StatsBanner />
        </div>
      </section>

      {/* Services grid with detail */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto space-y-16">
          {BUSINESS.services.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            const detail = SERVICE_DETAILS[i];
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#c9a84c]" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                    {service.name}
                  </h2>
                  <p className="text-[#c9a84c] font-semibold mb-4">{detail.headline}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">{detail.body}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`bg-[#1a1a1a] border border-[#3a3a3a] rounded-2xl h-64 lg:h-80 flex items-center justify-center ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="text-center text-gray-600 text-sm">
                    <div className="w-16 h-16 rounded-full bg-[#242424] flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>
                    [PLACEHOLDER: {service.name} photo]
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Package overview CTA */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            The team at Latin King Detailing is happy to assess your vehicle and recommend the right combination of protection and detailing for your car, usage, and budget. There&apos;s no obligation — just straightforward advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-[#c9a84c] text-sm font-medium transition-colors">
              Or call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Protect Your Car with Bolton's Best"
        subtext="Latin King Detailing — professional results, honest advice, local service."
        primaryCTA={{ label: "Book Your Appointment", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
