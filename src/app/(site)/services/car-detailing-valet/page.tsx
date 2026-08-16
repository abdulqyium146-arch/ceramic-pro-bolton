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
  title: "Car Detailing & Valet Bolton — Paint Correction, Greater Manchester",
  description:
    "Professional car detailing & valet in Bolton, Greater Manchester. Interior & exterior detailing, paint correction, machine polish. Latin King Detailing, Farnworth BL4. Book now.",
  alternates: { canonical: "/services/car-detailing-valet" },
};

const FAQS = [
  {
    question: "How long does a full car detail take?",
    answer:
      "It depends on what the car needs. A basic valet is 2–4 hours. A full detail takes 1–2 days, and if paint correction's involved — removing swirls before ceramic coating, for example — allow up to 2 full days. We give you a clear, honest timeline when you book, so you know exactly when to expect your car back.",
  },
  {
    question: "What's the difference between a valet and a detail?",
    answer:
      "A valet cleans the car. A detail restores it. Valeting covers the wash, vacuum, interior wipe-down, and glass — it keeps a car that's already in good condition looking good. Detailing goes deeper: machine polishing to remove swirl marks, paint decontamination to strip bonded contamination, engine bay cleaning, and proper leather treatment. If the car's seen better days, a detail is what it actually needs.",
  },
  {
    question: "Do you offer mobile car detailing in Bolton?",
    answer:
      "We work from our Farnworth workshop, not mobile — and there's a good reason for it. Professional detailing needs proper lighting to see swirl marks under specialist beams, the right equipment, and a controlled environment. Doing it on a driveway means missing things. Our workshop is easy to reach from across Bolton and Greater Manchester, and the results are worth the trip.",
  },
  {
    question: "How much does car detailing cost in Bolton?",
    answer:
      "Entry valet packages start from [PLACEHOLDER], and a full detail with paint correction is from [PLACEHOLDER]. Every car is different — a daily driver that's been through automatic car washes needs more work than one that's been hand-washed every week. We look at the car first, tell you exactly what it needs, and give you a straight quote.",
  },
];

const PACKAGES = [
  {
    name: "[PLACEHOLDER: Package Name]",
    tier: "Bronze",
    duration: "2–3 hours",
    includes: [
      "Exterior hand wash & dry",
      "Alloy wheel clean",
      "Interior vacuum & wipe down",
      "Glass clean (interior & exterior)",
      "Tyre dressing",
    ],
  },
  {
    name: "[PLACEHOLDER: Package Name]",
    tier: "Silver",
    popular: true,
    duration: "4–6 hours",
    includes: [
      "Everything in Bronze",
      "Paint decontamination & clay bar",
      "Machine polish (single stage)",
      "Leather clean & condition",
      "Dashboard & trim dressing",
      "Boot clean",
    ],
  },
  {
    name: "[PLACEHOLDER: Package Name]",
    tier: "Gold",
    duration: "1–2 days",
    includes: [
      "Everything in Silver",
      "Multi-stage paint correction",
      "Engine bay detail",
      "Fabric/leather deep clean",
      "Door shuts & jambs detail",
      "Ceramic sealant application",
    ],
  },
];

export default function DetailingPage() {
  return (
    <>
      <SchemaService
        name="Car Detailing & Valet Bolton"
        description="Full interior and exterior car detailing and valet services in Bolton. Restore and maintain your vehicle to showroom condition."
        slug="car-detailing-valet"
        serviceType="Car Detailing"
      />
      <SchemaFAQ faqs={FAQS} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Services", href: "/services" },
            { name: "Car Detailing & Valet", href: "/services/car-detailing-valet" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Detailing & Valeting</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional Car Detailing &amp; Valet Services Bolton
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            There&apos;s a difference between a car that&apos;s been washed and a car that&apos;s been detailed. At our Farnworth, Bolton workshop, we do the latter — from a thorough valet that gets your car properly clean, to a full multi-day detail with paint correction that takes a neglected car back to showroom condition. It&apos;s the kind of result you can&apos;t get from a drive-through, and our customers keep coming back because they can genuinely see and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Book a Detail <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Detailing Packages
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            [PLACEHOLDER: confirm exact package names and prices with client. The tiers below reflect the structure — get real names, inclusions, and pricing before launch.]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.tier}
                className={`bg-[#1a1a1a] rounded-xl p-6 border-2 transition-all ${pkg.popular ? "border-[#c9a84c]" : "border-[#3a3a3a]"}`}>
                {pkg.popular && (
                  <span className="inline-block bg-[#c9a84c] text-[#0f0f0f] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <div className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-1">{pkg.tier}</div>
                <h3 className="font-heading font-bold text-white text-xl mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-1">Duration: ~{pkg.duration}</p>
                <p className="text-2xl font-bold text-white mb-5">[PLACEHOLDER]</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`mt-6 block text-center py-3 rounded-lg font-bold transition-all text-sm ${pkg.popular ? "bg-[#c9a84c] text-[#0f0f0f] hover:bg-[#e8c96c]" : "border border-[#3a3a3a] text-white hover:border-[#c9a84c] hover:text-[#c9a84c]"}`}>
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior vs Exterior */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Exterior Detailing</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Exterior detailing starts with a proper two-bucket hand wash, then paint decontamination with fallout remover and clay bar — removing the bonded contamination that regular shampoo simply can&apos;t shift. You&apos;d be surprised what comes off a car that looks clean to the eye.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Machine polishing removes swirl marks, light scratches, and water spots, restoring depth and gloss to the paintwork. This is also the essential step before ceramic coating — a coating bonds over whatever is underneath it, so if the paint goes in with swirls, they stay there permanently.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Interior Detailing</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We clean every surface inside the car — seats, carpets, door cards, dashboard, headlining, boot. We extract embedded dirt and pet hair, treat and condition leather properly, and remove odours at the source rather than masking them.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For vehicles with heavy staining, mould, or smoke damage, we offer specialist interior restoration. Get in touch and tell us what you&apos;re dealing with — we&apos;ll be straight with you about what we can achieve and what it&apos;ll cost.
            </p>
          </div>
        </div>
      </section>

      {/* Paint correction */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-5">
            Paint Correction — What It Is and When You Need It
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Paint correction is the process of using machine polishers and specialist abrasive compounds to remove defects from your car&apos;s clear coat — including swirl marks from automatic car washes, light scratches, buffer trails, water spots, and oxidation.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Paint correction is essential before applying any ceramic coating. Ceramic Pro 9H will permanently lock in whatever is under it, so applying it over swirled or scratched paint simply seals in the imperfections. By correcting the paint first, you ensure the coating bonds over a flawless surface.
          </p>
          <div className="bg-[#1a1a1a] border border-[#c9a84c]/30 rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              <span className="text-[#c9a84c] font-semibold">Tip:</span> Many customers book a detail + ceramic coating combination. We assess your paint first and advise on the level of correction needed before coating.{" "}
              <Link href="/contact" className="text-[#c9a84c] hover:underline">Contact us to discuss.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* How often */}
      <section className="py-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">
            How Often Should I Get My Car Detailed?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            For a daily driver in Greater Manchester, a full valet every 3–6 months will keep your car looking its best. If your car has a ceramic coating, an annual maintenance check and top-up wash is recommended. For high-value or show cars, more frequent detailing (every 4–6 weeks) maintains peak condition. Regular detailing also protects your paint&apos;s condition and preserves resale value.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Car Detailing FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner
        headline="Ready to Restore Your Car's Finish?"
        subtext="Book a professional car detail at our Farnworth, Bolton workshop — and see the difference a proper detail makes."
        primaryCTA={{ label: "Book a Detail", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
