import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Ceramic Coating Manchester — Ceramic Pro North West Bolton",
  description:
    "Professional ceramic coating and car detailing near Manchester. Ceramic Pro North West in Bolton serves Manchester customers — 15–20 min drive. Free quote available.",
  alternates: { canonical: "/locations/manchester" },
};

const FAQS = [
  {
    question: "How far is Ceramic Pro North West from Manchester city centre?",
    answer:
      "Ceramic Pro North West is located in Farnworth, Bolton — approximately 8–10 miles from Manchester city centre. The journey typically takes 15–20 minutes via the A666 through Salford, or 20–25 minutes via the M61 motorway. Our central Bolton location makes us accessible to customers across Greater Manchester.",
  },
  {
    question: "Is Ceramic Pro 9H available at Manchester car detailers?",
    answer:
      "Ceramic Pro 9H must be applied by a certified Ceramic Pro installer. Ceramic Pro North West is one of the certified installers serving Greater Manchester. Many Manchester customers make the short journey to our Farnworth workshop to access certified Ceramic Pro applications not available at every local detailing shop.",
  },
  {
    question: "Do you serve all areas of Manchester?",
    answer:
      "Yes — Ceramic Pro North West serves customers from across Greater Manchester including Salford, Eccles, Swinton, Worsley, Pendlebury, and Trafford. The drive to our Bolton workshop from these areas is typically 15–25 minutes. We also serve customers from further afield, including Prestwich, Whitefield, and Radcliffe.",
  },
  {
    question: "Is the journey from Manchester worth it for ceramic coating?",
    answer:
      "Our Manchester customers consistently say yes. Professional ceramic coating is a multi-year investment — the extra 15 minutes to access a certified installer using genuine Ceramic Pro 9H products is worthwhile compared to a cheaper, non-certified application that may not deliver the same durability, hardness, or warranty.",
  },
];

export default function ManchesterPage() {
  return (
    <>
      <SchemaFAQ faqs={FAQS} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Locations", href: "/locations/bolton" },
            { name: "Manchester", href: "/locations/manchester" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> Greater Manchester
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Ceramic Coating &amp; Car Detailing Manchester — Ceramic Pro North West
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Ceramic Pro North West serves Manchester customers from our professional workshop in Farnworth, Bolton — approximately 15–20 minutes from Manchester city centre via the A666 through Salford. Manchester drivers regularly make the short journey to access our certified Ceramic Pro 9H installations and KAVACA PPF, which are not available at every local detailing shop.
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

      {/* Journey info */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
            Getting to Our Bolton Workshop from Manchester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
              <div className="flex items-center gap-2 text-[#c9a84c] font-semibold mb-3">
                <Clock className="w-5 h-5" /> Via A666 (Recommended)
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Head north from Manchester city centre or Salford via the A57 / A666 through Walkden. Continue on the A6053 to Farnworth. Distance: approximately 9 miles. Typical journey: <strong className="text-white">15–20 minutes</strong>.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
              <div className="flex items-center gap-2 text-[#c9a84c] font-semibold mb-3">
                <Clock className="w-5 h-5" /> Via M61
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                From the M60 ring road, take the M61 northbound to junction 4 (Farnworth). Follow signs to Farnworth town centre. Distance: approximately 10–11 miles. Typical journey: <strong className="text-white">20–25 minutes</strong>.
              </p>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              <span className="text-[#c9a84c] font-semibold">Workshop address:</span>{" "}
              {BUSINESS.address.full}, United Kingdom.{" "}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                Get directions →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Manchester customers choose us */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Why Manchester Drivers Make the Trip
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Certified Ceramic Pro Installation",
                body: "Ceramic Pro 9H is a professional-grade product that must be applied by a trained, certified installer. Ceramic Pro North West is one of the certified installers for Greater Manchester. The certificate and warranty are registered against your specific vehicle — something that matters if you ever sell the car.",
              },
              {
                title: "KAVACA PPF — Not Available Everywhere",
                body: "KAVACA Paint Protection Film from Ceramic Pro is a specialist product requiring factory-trained installation. Many Manchester detailing shops do not stock or install KAVACA. Our Bolton workshop is one of the few Greater Manchester locations where KAVACA PPF is available from a certified installer.",
              },
              {
                title: "A 15-Minute Drive Is a Multi-Year Investment",
                body: "A ceramic coating or PPF installation will protect your car for 2–10 years. The 15-minute journey from Manchester to our Bolton workshop is a small one-time inconvenience in exchange for professional results that last years — and a product that is registered and warranted.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">Services Available to Manchester Customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUSINESS.services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group block bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 hover:border-[#c9a84c]/50 transition-all">
                <h3 className="font-heading font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">{s.name}</h3>
                <p className="text-gray-400 text-sm">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Manchester Ceramic Coating FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Manchester's Closest Ceramic Pro Installer"
        subtext="15 minutes from Manchester city centre. Ceramic Pro certified. Worth the drive."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phone}`, isPhone: true }}
        variant="gold"
      />
    </>
  );
}
