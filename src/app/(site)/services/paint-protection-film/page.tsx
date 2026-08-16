import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaService from "@/components/seo/SchemaService";

export const metadata: Metadata = {
  title: "Paint Protection Film Bolton — KAVACA PPF for Cars",
  description:
    "KAVACA Paint Protection Film for cars in Bolton & Greater Manchester. Self-healing, anti-yellowing, optically clear. Latin King Detailing — Ceramic Pro certified PPF installers. Free quote.",
  alternates: { canonical: "/services/paint-protection-film" },
};

const FAQS = [
  {
    question: "What is paint protection film (PPF)?",
    answer:
      "PPF is a thick, clear film that sits on your paint and takes the hits so your car doesn't have to. Stone chips on the motorway, shopping trolleys, grit and debris — the film absorbs the impact and your paint stays untouched underneath. KAVACA PPF from Ceramic Pro goes further with self-healing technology: minor surface scratches disappear when heat is applied, so the film stays looking clean without you needing to do anything.",
  },
  {
    question: "Does KAVACA PPF yellow over time?",
    answer:
      "No — and this used to be a real problem with older PPF films. KAVACA has built-in UV inhibitors that prevent yellowing and hazing, so it stays optically clear for the life of the film. That's what makes it suitable for the full car, not just the bonnet — you won't even notice it's there until something that would have chipped your paint bounces off it instead.",
  },
  {
    question: "How long does KAVACA PPF last?",
    answer:
      "KAVACA installed by a certified Ceramic Pro installer carries a 10-year manufacturer warranty against yellowing, bubbling, and peeling. In practice, with correct maintenance — hand washing rather than pressure washing at film edges — most customers keep it on for the life of the vehicle. It's the kind of protection you fit and forget.",
  },
  {
    question: "Can PPF be removed?",
    answer:
      "Yes, and that's one of the reasons it's so popular with lease car drivers. A trained installer can remove KAVACA cleanly without damaging the paint underneath. It's not something you'd want to attempt yourself — you need heat, the right tools, and patience — but in our hands, it comes off safely. A smart choice if you want to protect your paint and hand the car back in perfect condition.",
  },
];

const KAVACA_BENEFITS = [
  "Self-healing — minor scratches disappear with heat",
  "Anti-yellowing technology — stays clear for years",
  "9H ceramic coating pre-infused option available",
  "Optically clear — invisible protection on any colour",
  "10-year manufacturer warranty",
  "Stone chip and road debris protection",
  "Chemical and acid rain resistance",
  "Safe for lease vehicles — removable without paint damage",
];

const COVERAGE_OPTIONS = [
  {
    name: "High-Impact Zones",
    desc: "Bonnet leading edge, front bumper, headlights, mirror caps, and A-pillars — the areas most vulnerable to stone chips and road debris.",
    popular: false,
  },
  {
    name: "Front End Package",
    desc: "Full bonnet, front bumper, headlights, mirrors, and front quarter panels — ideal for motorway drivers on the M61/M62.",
    popular: true,
  },
  {
    name: "Full Vehicle",
    desc: "Complete vehicle coverage for maximum paint protection. Popular for new car deliveries, high-value vehicles, and show cars.",
    popular: false,
  },
];

export default function PPFPage() {
  return (
    <>
      <SchemaService
        name="Paint Protection Film (PPF) Bolton — KAVACA"
        description="KAVACA Paint Protection Film in Bolton. Self-healing, anti-yellowing, optically clear barrier against stone chips and road damage."
        slug="paint-protection-film"
        serviceType="Paint Protection Film"
      />
      <SchemaFAQ faqs={FAQS} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Paint Protection Film", href: "/services/paint-protection-film" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Physical Paint Protection</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Paint Protection Film Bolton — KAVACA PPF by Ceramic Pro
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We install KAVACA Paint Protection Film at our Farnworth, Bolton workshop — Ceramic Pro&apos;s own premium PPF product. If you regularly drive on the M61 or M62, you know what motorway debris does to a bonnet. KAVACA takes those hits physically so your paint doesn&apos;t have to. It&apos;s self-healing, stays optically clear without yellowing, and carries a 10-year manufacturer warranty when we fit it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
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

      {/* What is PPF */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-5">
            What Is Paint Protection Film?
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Paint protection film is a thick, clear film applied directly to your paintwork. Where ceramic coating creates a chemical bond that hardens the surface, PPF is a different kind of protection altogether — a sacrificial physical layer that absorbs stone chips, debris impacts, and scratches. The film takes the damage; your paint stays untouched underneath.
          </p>
          <p className="text-gray-400 leading-relaxed">
            KAVACA is Ceramic Pro&apos;s own PPF product, and it&apos;s among the most capable films on the market. The self-healing top coat means minor surface scratches disappear when heat is applied — sun, warm water, or even just a warm day. The anti-yellowing formula means it stays crystal clear year after year, which is why we&apos;re confident fitting it to full vehicles, not just stone chip zones.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            KAVACA PPF Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {KAVACA_BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage options */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Where Can PPF Be Applied?
          </h2>
          <p className="text-gray-400 mb-8">
            KAVACA PPF can be applied to any painted surface on your vehicle — from targeted stone chip zones to a full-vehicle wrap. Latin King Detailing offers three coverage options:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COVERAGE_OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className={`bg-[#1a1a1a] rounded-xl p-6 border-2 transition-all ${
                  opt.popular ? "border-[#c9a84c]" : "border-[#3a3a3a]"
                }`}
              >
                {opt.popular && (
                  <span className="inline-block bg-[#c9a84c] text-[#0f0f0f] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-white text-lg mb-3">{opt.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              PPF can also be combined with Ceramic Pro 9H ceramic coating on top for the ultimate dual-layer protection.{" "}
              <Link href="/services/ceramic-coating" className="text-[#c9a84c] hover:underline">
                Learn about ceramic coating.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* PPF vs Ceramic */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            PPF vs Ceramic Coating — Which Is Right for You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
              <h3 className="font-heading font-bold text-[#c9a84c] text-lg mb-3">Choose PPF if you want…</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Physical protection from stone chips</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Self-healing scratch resistance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Maximum protection on a motorway vehicle</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Removable protection for a lease car</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
              <h3 className="font-heading font-bold text-[#c9a84c] text-lg mb-3">Choose Ceramic Coating if you want…</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Deep gloss enhancement</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Hydrophobic self-cleaning effect</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Chemical and UV protection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" /> Lower investment, still long-lasting</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Many customers choose both — PPF on high-impact zones, ceramic coating over the top.{" "}
            <Link href="/contact" className="text-[#c9a84c] hover:underline">Talk to us about a combined package.</Link>
          </p>
        </div>
      </section>

      {/* Longevity */}
      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">
            How Long Does Paint Protection Film Last?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            KAVACA PPF installed by Latin King Detailing carries a 10-year manufacturer warranty against yellowing, bubbling, peeling, and hazing. With correct maintenance — gentle hand washing, avoiding pressure washing film edges, and periodic inspection — your KAVACA film will keep your paint protected for the full duration of your ownership.
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-white mb-3">PPF Service Area</h2>
          <p className="text-gray-400 mb-5">
            We install KAVACA Paint Protection Film for customers across Bolton and Greater Manchester:
          </p>
          <div className="flex flex-wrap gap-2">
            {BUSINESS.serviceArea.map((area) => (
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
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Paint Protection Film FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Protect Your Paint from Day One"
        subtext="KAVACA PPF from Ceramic Pro — installed by Bolton's certified specialists."
        primaryCTA={{ label: "Get a Free PPF Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
