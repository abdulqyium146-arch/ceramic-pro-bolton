import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaHowTo from "@/components/seo/SchemaHowTo";
import SchemaService from "@/components/seo/SchemaService";

export const metadata: Metadata = {
  title: "Ceramic Coating Bolton — Certified Installer, 9H Hardness, Free Quote",
  description:
    "Ceramic Pro 9H certified installer in Bolton, Greater Manchester. 9H hardness, UV protection, hydrophobic effect, 2–5 year lifespan. Latin King Detailing, Farnworth BL4. 4.7★ Google rated. Free quote.",
  alternates: { canonical: "/services/ceramic-coating" },
};

const FAQS = [
  {
    question: "How much does ceramic coating cost in Bolton?",
    answer:
      "Entry-level starts from [PLACEHOLDER] for smaller cars — a full Ceramic Pro 9H application on a larger vehicle or one that needs paint correction first will be more. Your paint's condition matters too: if there are swirl marks or scratches, we correct those first so the coating bonds over a flawless surface. Send us your car details and we'll give you an honest, itemised quote.",
  },
  {
    question: "How long does ceramic coating last?",
    answer:
      "Realistically, 2–5 years — and that's a proper certified Ceramic Pro 9H coating, not a spray-on alternative. The exact lifespan depends on which package you choose, how much the car's driven, and how you wash it. Stick to pH-neutral shampoo, skip the automatic car wash, and come in for an annual check. Do those three things and you'll get the full life out of your coating.",
  },
  {
    question: "Can ceramic coating be applied to any car?",
    answer:
      "Yes — if it has paint, we can coat it. Cars, vans, motorcycles, motorhomes. We decontaminate the paint and correct any swirl marks or scratches before application, because ceramic coating amplifies what's underneath. If the paint goes in clean, it comes out looking incredible. We look at every vehicle before we start so you know exactly what to expect.",
  },
  {
    question: "Does ceramic coating require maintenance?",
    answer:
      "Less maintenance than an uncoated car — but not zero. You still wash it, just less often and with better results each time. Use pH-neutral shampoo and avoid drive-through car washes with brushes. Once a year, bring it back to us for an inspection and top-up. That's genuinely all it takes to keep it performing for years.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Most customers are without their car for 1–3 days, depending on the package and paint condition. If paint correction's needed first, allow the longer end. We'll be upfront about the exact timeline when you book — no surprises. One thing to remember: keep the car dry for the first 24 hours after you pick it up so the coating cures fully. We'll remind you when you collect.",
  },
];

const HOW_TO_STEPS = [
  { name: "Vehicle Inspection", text: "We thoroughly inspect your vehicle's paintwork under specialist lighting to identify any imperfections, swirl marks, scratches, or contamination before beginning." },
  { name: "Paint Decontamination & Clay Bar", text: "Using iron fallout remover and a clay bar, we remove embedded contaminants, industrial fallout, and bonded particles that regular washing can't remove — leaving the paint chemically clean." },
  { name: "Paint Correction (If Required)", text: "Where swirl marks, light scratches, or water spots are present, our machine polishing process removes these defects before coating. Ceramic coating locks in whatever is under it, so correction beforehand is essential for a flawless finish." },
  { name: "Surface Preparation", text: "The paintwork is wiped down with a panel wipe to remove any polishing oils and ensure a perfectly clean, bare surface for the ceramic coating to bond to." },
  { name: "Ceramic Pro 9H Application", text: "The Ceramic Pro 9H coating is carefully applied panel by panel using certified application techniques. The coating bonds with the paint at a molecular level, creating a semi-permanent protective layer." },
  { name: "Curing & Final Inspection", text: "The coating is allowed to cure under controlled conditions. We then perform a final inspection under specialist lighting to ensure complete, even coverage before handing the vehicle back to you." },
];

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

const BENEFITS = [
  "9H hardness rating — the highest available",
  "Permanent hydrophobic effect — water beads and rolls off",
  "UV protection — prevents paint fading and oxidation",
  "Chemical resistance — resists bird lime, tree sap, road salt",
  "Gloss enhancement — deeper, richer colour",
  "Easier maintenance — far less washing required",
  "Scratch resistance — resists light swirl marks",
  "Preserves resale value",
];

export default function CeramicCoatingPage() {
  return (
    <>
      <SchemaService
        name="Ceramic Coating Bolton — Ceramic Pro 9H"
        description="Professional Ceramic Pro 9H ceramic coating in Bolton. 9H hardness, UV protection, hydrophobic effect. Certified installers."
        slug="ceramic-coating"
        serviceType="Ceramic Coating"
      />
      <SchemaFAQ faqs={FAQS} />
      <SchemaHowTo
        name="How the ceramic coating process works at Latin King Detailing"
        description="Step-by-step guide to our professional Ceramic Pro 9H ceramic coating application process in Bolton."
        steps={HOW_TO_STEPS}
      />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Ceramic Coating", href: "/services/ceramic-coating" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Paint Protection</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Ceramic Coating Bolton — Ceramic Pro 9H
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We apply Ceramic Pro 9H at our Farnworth, Bolton workshop — and because we&apos;re certified installers, your coating is registered to your vehicle with full manufacturer warranty. It&apos;s not something you spray on and wipe off. It bonds with the paint at a molecular level, creating a hard, permanent surface that makes the car easier to clean, protects against UV, and resists everything the road throws at it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* What is ceramic coating */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-5">
            What Is Ceramic Coating?
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Ceramic coating is a liquid polymer that chemically bonds directly with your car&apos;s paint — not on top of it, but into it. Once cured, it becomes a semi-permanent part of the surface. Compare that to traditional wax, which sits on the paint and washes off within a few weeks. With Ceramic Pro 9H, you get a protective layer that lasts years, repels UV, acid rain, bird droppings, road salt, and everything else that Greater Manchester weather throws at your car.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Ceramic Pro 9H gets its name from the pencil hardness scale — 9H is the hardest rating achievable, significantly tougher than your clear coat alone. That extra hardness is what stops the light swirl marks and abrasions that automatic car washes leave behind. It doesn&apos;t make your car scratch-proof — nothing does — but it gives your paint a level of everyday resilience that unprotected paint simply doesn&apos;t have.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Choose Ceramic Pro 9H?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            How the Ceramic Coating Process Works
          </h2>
          <div className="space-y-6">
            {HOW_TO_STEPS.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c] text-[#0f0f0f] font-bold text-lg flex items-center justify-center shrink-0 mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{step.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Ceramic Coating Prices Bolton
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Latin King Detailing offers a range of coating packages to suit different vehicles, budgets, and protection requirements. All packages include paint decontamination and preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {["Bronze", "Silver", "Gold"].map((tier) => (
              <div key={tier} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 text-center">
                <h3 className="font-heading font-bold text-[#c9a84c] text-xl mb-2">{tier}</h3>
                <p className="text-4xl font-bold text-white mb-1">[PLACEHOLDER]</p>
                <p className="text-gray-500 text-sm mb-4">Price varies by vehicle</p>
                <p className="text-gray-400 text-sm">[PLACEHOLDER: package description — contact client for exact tiers]</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl p-5 text-center">
            <p className="text-gray-400 text-sm">
              Exact pricing depends on vehicle size, paint condition, and package chosen.{" "}
              <Link href="/contact" className="text-[#c9a84c] hover:underline font-semibold">
                Contact us for a free, no-obligation quote.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How long / is it worth it */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              How Long Does Ceramic Coating Last?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Realistically, 2–5 years. Ceramic Pro offers tiered packages — from an annual coating right up to a lifetime warranty option, which requires an annual inspection to stay valid (worth doing anyway, as it lets us catch anything early). Look after it properly — pH-neutral shampoo, no automatic car washes, annual check with us — and you&apos;ll get every year out of it.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Is Ceramic Coating Worth It for a Daily Driver?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Yes — especially if you&apos;re on the M61 or M62 regularly. Road salt in winter, acid rain, bird droppings, motorway debris: Greater Manchester roads are genuinely tough on paint. Ceramic coating doesn&apos;t make your car invincible, but it makes it dramatically easier to keep clean and significantly better protected against the elements. Most of our customers say it paid for itself within 12–18 months — mainly by cutting the time and money spent washing and maintaining the car.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            Ceramic Coating vs PPF vs Traditional Wax
          </h2>
          <ComparisonTable
            columns={["Ceramic Coating", "PPF / KAVACA", "Traditional Wax"]}
            rows={COMPARISON_ROWS}
          />
          <p className="text-gray-500 text-sm mt-4">
            For maximum protection, some customers choose both ceramic coating and PPF —{" "}
            <Link href="/services/paint-protection-film" className="text-[#c9a84c] hover:underline">
              learn more about KAVACA PPF.
            </Link>
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-white mb-3">
            Ceramic Coating Service Area
          </h2>
          <p className="text-gray-400 mb-5">
            Latin King Detailing provides professional ceramic coating services from our Farnworth, Bolton workshop to customers across Greater Manchester, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESS.serviceArea.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="px-4 py-1.5 rounded-full border border-[#3a3a3a] text-sm text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Ceramic Coating FAQs
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Ready to Coat Your Car?"
        subtext="Get a free, no-obligation ceramic coating quote from Bolton's certified Ceramic Pro specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
