import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Car Detailing & Valet Services Bolton | Ceramic Pro North West",
  description:
    "Professional car detailing and valet services in Bolton. Interior & exterior detailing, paint correction, machine polish. Book at our Farnworth workshop.",
  alternates: { canonical: "/services/car-detailing-valet" },
};

const FAQS = [
  {
    question: "How long does a full car detail take?",
    answer:
      "A full car detail at Ceramic Pro North West typically takes 1–2 days depending on the package and the condition of the vehicle. A basic valet takes 2–4 hours. Paint correction details can take up to 2 full days. We will give you a clear timeline when you book your appointment.",
  },
  {
    question: "What's the difference between a valet and a detail?",
    answer:
      "A valet is a thorough clean of your car — washing, vacuuming, wipe-down of interior surfaces, and window cleaning. A full detail goes further: machine polishing to remove swirl marks and scratches, paint decontamination, engine bay cleaning, and thorough leather/fabric treatment. Detailing restores; valeting maintains.",
  },
  {
    question: "Do you offer mobile car detailing in Bolton?",
    answer:
      "Our detailing packages are carried out at our workshop in Farnworth, Bolton, where we have the correct lighting, equipment, and controlled environment to deliver a professional-quality result. We do not currently offer mobile detailing. Our workshop is conveniently located and easily accessible from Bolton town centre and surrounding areas.",
  },
  {
    question: "How much does car detailing cost in Bolton?",
    answer:
      "Car detailing prices at Ceramic Pro North West depend on the package chosen and vehicle size. Entry-level valet packages start from [PLACEHOLDER]. Full detail with paint correction is priced from [PLACEHOLDER]. Contact us for a specific quote — every car is different and we tailor our packages to what each vehicle needs.",
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
            Ceramic Pro North West provides professional car detailing and valet services from our Farnworth, Bolton workshop. Whether you need a thorough valet to maintain your car between ceramic coating services, or a full multi-day detail with paint correction to restore your vehicle to showroom condition, our team delivers results that go beyond what any automatic car wash or home wash can achieve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Book a Detail <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
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
              Exterior car detailing at Ceramic Pro North West goes far beyond a standard car wash. We use a two-bucket hand wash method, followed by paint decontamination with fallout remover and clay bar to remove bonded contaminants your shampoo can&apos;t shift.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Machine polishing removes swirl marks, light scratches, and water spots, restoring depth and gloss to the paintwork. This is also the essential preparation step before ceramic coating — applying a coating over imperfect paint will lock those defects in permanently.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Interior Detailing</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our interior detailing service thoroughly cleans every surface inside your vehicle — seats, carpets, door cards, dashboard, headlining, and boot. We extract embedded dirt and pet hair, treat and condition leather, and remove odours.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For vehicles with heavy staining, mould, or smoke damage, we also offer specialist interior restoration treatments. Contact us to discuss your specific requirements.
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
        secondaryCTA={{ label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phone}`, isPhone: true }}
        variant="gold"
      />
    </>
  );
}
