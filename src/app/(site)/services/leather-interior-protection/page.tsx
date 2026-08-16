import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaService from "@/components/seo/SchemaService";

export const metadata: Metadata = {
  title: "Car Leather Coating & Interior Protection Bolton, Greater Manchester",
  description:
    "Specialist car leather coating & interior protection in Bolton, Greater Manchester. UV protection, crack prevention, stain resistance. Latin King Detailing, Farnworth BL4. Free quote.",
  alternates: { canonical: "/services/leather-interior-protection" },
};

const FAQS = [
  {
    question: "Does leather coating change how the leather feels?",
    answer:
      "No — once cured, it's invisible and you won't feel it. The leather still feels like leather. What changes is how it behaves: spills bead up instead of soaking in, UV stops fading the colour, and the surface is far easier to wipe clean. Same feel; much better performance.",
  },
  {
    question: "How long does leather protection last?",
    answer:
      "Ceramic-grade leather protection typically lasts 12–24 months under normal use. We recommend an annual reapplication as part of your interior detail — it's not expensive, takes no time, and means your protection never lapses. Between appointments, conditioning with the right product helps extend it further.",
  },
  {
    question: "Can you treat synthetic or vegan leather?",
    answer:
      "Yes — our interior protection products work on genuine leather, synthetic leather (pleather), and Alcantara or suede-style materials. The prep process varies slightly by material, so when you book, just tell us what's in your car. If you're not sure what type of leather you have, we'll identify it when the car comes in.",
  },
  {
    question: "What happens if leather isn't protected?",
    answer:
      "Without protection, leather absorbs UV, body oils, and spills — and once the damage is done, it's difficult and expensive to reverse. In the UK, the combination of summer sun and a cold, damp car in winter is particularly harsh. Cracking, fading, and permanent staining typically appear after 3–5 years in an unprotected interior. Protecting it now costs a fraction of what leather restoration or replacement does later.",
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
      <SchemaService
        name="Leather & Interior Protection Bolton"
        description="Specialist leather coating and interior protection services in Bolton. Keeps cabins fresh, conditioned and protected against wear and staining."
        slug="leather-interior-protection"
        serviceType="Leather & Interior Protection"
      />
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
            Most people think about protecting the paint. Fewer think about what happens inside — and interiors take just as much punishment. At our Farnworth, Bolton workshop, we apply specialist leather coating and interior protection that guards against UV fade, body oil staining, spills, and the slow deterioration that makes a car feel old before its time. The exterior might look the part; the interior is where you actually sit every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
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
            After your leather protection treatment at Latin King Detailing, follow these simple steps to maximise its lifespan:
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
            Yes — leather interior protection is one of the highest return-on-investment car care services available. Leather seat restoration or replacement can cost £500–£3,000+ depending on the vehicle. Leather protection treatment at Latin King Detailing costs a fraction of that. For new vehicles and recently purchased used cars in good condition, applying leather protection from the outset keeps the interior in showroom condition and significantly supports residual value at resale.
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
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
