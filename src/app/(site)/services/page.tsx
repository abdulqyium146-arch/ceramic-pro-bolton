import type { Metadata } from "next";
import { Shield, Film, Sparkles, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import ServiceCard from "@/components/ui/ServiceCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import StatsBanner from "@/components/ui/StatsBanner";

export const metadata: Metadata = {
  title: "Car Detailing & Ceramic Coating Services Bolton | Ceramic Pro North West",
  description:
    "Professional ceramic coating, paint protection film, car detailing & leather protection in Bolton. Ceramic Pro certified. Serving Greater Manchester.",
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
            Ceramic Pro North West offers Bolton and Greater Manchester&apos;s most comprehensive range of professional paint protection and car care services. From Ceramic Pro 9H coatings to KAVACA PPF and full detailing packages — all applied by certified technicians using professional-grade products.
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
            The team at Ceramic Pro North West is happy to assess your vehicle and recommend the right combination of protection and detailing for your car, usage, and budget. There&apos;s no obligation — just straightforward advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Protect Your Car with Bolton's Best"
        subtext="Ceramic Pro North West — professional results, honest advice, local service."
        primaryCTA={{ label: "Book Your Appointment", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
