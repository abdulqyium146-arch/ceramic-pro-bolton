import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Leather Coating & Interior Protection Bolton | Ceramic Pro North West",
  description:
    "Specialist leather coating and interior protection in Bolton. UV protection, crack prevention, stain resistance. Professional interior detailing at our Farnworth workshop.",
  alternates: { canonical: "/services/leather-interior-protection" },
};

const FAQS = [
  {
    question: "Does leather coating change how the leather feels?",
    answer:
      "No — professional leather coating products used by Ceramic Pro North West are designed to be invisible and non-tacky once cured. They protect the leather's natural texture and feel while forming a barrier against UV, spills, and abrasion. The leather will feel the same as before, just better protected and easier to keep clean.",
  },
  {
    question: "How long does leather protection last?",
    answer:
      "The lifespan of leather protection depends on how much use the vehicle sees and which product is applied. Ceramic-based leather coatings last 12–24 months under normal conditions. We recommend an annual reapplication as part of an interior detail to maintain full protection. Regular conditioning between treatments also extends the protection.",
  },
  {
    question: "Can you treat synthetic or vegan leather?",
    answer:
      "Yes — modern interior protection products are suitable for genuine leather, synthetic leather (pleather), and Alcantara / suede-style materials. The treatment process varies slightly by material type. During your booking consultation, tell us what type of interior your vehicle has and we will confirm the most appropriate treatment.",
  },
  {
    question: "What happens if leather isn't protected?",
    answer:
      "Unprotected leather is vulnerable to UV-induced fading and colour loss, drying and cracking (especially common in UK summers after several years), staining from spills, and body oil transfer which permanently discolours the leather. Protecting leather from new — or at the first opportunity — is far more cost-effective than attempting restoration later.",
  },
];

const INTERIOR_SURFACES = [
  { name: "Leather Seats", desc: "Front and rear seat treatment with ceramic-grade leather protection." },
  { name: "Dashboard & Trim", desc: "UV-protective treatment for plastics and soft-touch dashboard surfaces." },
  { name: "Door Panels", desc: "Leather and hard plastic protection on door cards and armrests." },
  { name: "Steering Wheel", desc: "Specialist leather treatment resistant to hand oils and perspiration." },
  { name: "Carpets & Fabric", desc: "Fabric protection treatment for carpets, mats, and cloth seats." },
  { name: "Headlining", desc: "Gentle cleaning and protection of roof lining materials." },
];

export default function LeatherInteriorPage() {
  return (
    <>
      <SchemaFAQ faqs={FAQS} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Leather & Interior Protection", href: "/services/leather-interior-protection" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Interior Protection</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Leather Coating &amp; Interior Protection Bolton
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Ceramic Pro North West provides specialist leather coating and interior protection services at our Farnworth, Bolton workshop. While most car owners focus on protecting the exterior paint, the interior is equally vulnerable — UV damage fades dashboards, body oils stain leather, and road dirt embeds itself in carpets and fabrics. Our interior protection treatments guard every surface against these threats.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* What leather coating does */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-5">
            What Leather Coating Does
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Leather coating creates an invisible barrier on your leather seats and interior surfaces that repels liquids, blocks UV radiation, and resists the abrasion that eventually causes leather to crack and fade. Unlike traditional leather conditioners that simply moisturise the surface, our ceramic-grade leather coating products form a durable protective layer that lasts months, not days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Prevents UV-induced fading and colour loss",
              "Repels spills before they stain",
              "Resists body oil transfer and perspiration",
              "Prevents cracking and drying",
              "Easy wipe-down cleaning",
              "Maintains the leather's natural look and feel",
              "Extends the life of leather significantly",
              "Reduces costly leather restoration",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces covered */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Interior Surfaces We Protect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERIOR_SURFACES.map((s) => (
              <div key={s.name} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
                <h3 className="font-heading font-bold text-[#c9a84c] mb-2">{s.name}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance tips */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-5">
            How to Maintain Leather Seats
          </h2>
          <p className="text-gray-400 mb-6">
            After your leather protection treatment at Ceramic Pro North West, follow these simple steps to maximise its lifespan:
          </p>
          <ol className="space-y-4">
            {[
              { tip: "Wipe spills immediately", detail: "Blot (don't rub) any liquid spills as soon as they happen. The protection coating buys you time — but act promptly." },
              { tip: "Use pH-neutral leather cleaner", detail: "When cleaning, use a dedicated pH-neutral leather cleaner and a soft microfibre cloth. Avoid household cleaners, wipes, or anything containing alcohol." },
              { tip: "Avoid direct sunlight parking", detail: "Park in shade or use a windscreen sun shade where possible — UV is the primary cause of leather fading even with protection." },
              { tip: "Annual reapplication", detail: "Book an annual interior detail and leather protection reapplication to maintain full protection over time." },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0f0f0f] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.tip}</p>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Is it worth it */}
      <section className="py-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">
            Is Leather Coating Worth It?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Yes — leather interior protection is one of the highest return-on-investment car care services available. Leather seat restoration or replacement can cost £500–£3,000+ depending on the vehicle. Leather protection treatment at Ceramic Pro North West costs a fraction of that. For new vehicles and recently purchased used cars in good condition, applying leather protection from the outset keeps the interior in showroom condition and significantly supports residual value at resale.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Interior Protection FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Protect Your Interior Today"
        subtext="Leather coating and interior protection from Bolton's professional car care specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phone}`, isPhone: true }}
        variant="gold"
      />
    </>
  );
}
