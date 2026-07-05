import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "FAQ — Ceramic Coating & Car Detailing Bolton | Ceramic Pro North West",
  description:
    "Answers to common questions about ceramic coating, PPF, car detailing, and booking at Ceramic Pro North West in Bolton. Expert answers from local specialists.",
  alternates: { canonical: "/faq" },
};

const CERAMIC_FAQS = [
  { question: "What is Ceramic Pro 9H?", answer: "Ceramic Pro 9H is a professional-grade ceramic coating with a 9H pencil hardness rating — the highest achievable. Applied by a certified installer, it bonds permanently with your vehicle's paint to create a hard, hydrophobic, UV-resistant layer. It is not the same as consumer ceramic spray coatings sold online, which offer far inferior durability and hardness." },
  { question: "How much does ceramic coating cost in Bolton?", answer: "Ceramic coating prices at Ceramic Pro North West start from [PLACEHOLDER] for smaller vehicles and increase depending on vehicle size and the package chosen. Paint correction beforehand will add to the total. We provide free, no-obligation quotes — contact us with your vehicle details for a tailored price." },
  { question: "How long does ceramic coating last?", answer: "A professionally applied Ceramic Pro 9H coating typically lasts 2–5 years depending on the package. Ceramic Pro offers packages with different warranty periods, including lifetime warranty options (subject to annual inspection). With correct aftercare, you can achieve the maximum lifespan for your coating." },
  { question: "Is ceramic coating worth it for a daily driver?", answer: "Yes. Ceramic coating reduces the time and cost of keeping your car clean, protects against UV fading, bird droppings, road salt, and chemical damage, and helps maintain resale value. For Greater Manchester drivers dealing with wet weather and road salt from October to March, the protection is especially valuable." },
  { question: "Can ceramic coating be applied to matte paint?", answer: "Yes — Ceramic Pro offers specific products formulated for matte and satin paintwork that enhance protection without adding gloss. Standard ceramic coatings designed for gloss paint should not be used on matte finishes. Tell us if your vehicle has a matte or wrapped finish when you contact us." },
  { question: "Does ceramic coating scratch-proof my car?", answer: "Ceramic coating increases the hardness of your paint's surface and improves its resistance to light swirl marks and minor abrasions. However, it is not scratch-proof — significant impacts, keys, or abrasive cleaning will still damage it. For full physical protection against stone chips and deeper scratches, PPF is required." },
];

const PPF_FAQS = [
  { question: "What is paint protection film (PPF)?", answer: "Paint protection film is a thick, optically clear urethane film applied to your vehicle's painted surfaces to act as a physical shield. It absorbs stone chips, road debris, and scratches before they reach the paint. KAVACA PPF by Ceramic Pro also features self-healing technology — minor surface scratches disappear with heat." },
  { question: "Is PPF better than ceramic coating?", answer: "PPF and ceramic coating do different things. PPF provides physical impact protection (stone chips, scratches) that ceramic coating cannot. Ceramic coating provides chemical protection, gloss enhancement, and hydrophobic properties that PPF alone does not deliver as strongly. Many customers use both — PPF on impact zones, ceramic coating over the top." },
  { question: "Does PPF yellow over time?", answer: "KAVACA PPF uses advanced anti-yellowing technology with built-in UV inhibitors. Unlike older PPF products, KAVACA maintains optical clarity for the life of the film — typically 10 years under the manufacturer's warranty when installed by a certified installer." },
  { question: "Can PPF be removed without damaging the paint?", answer: "Yes — KAVACA PPF installed by Ceramic Pro North West can be safely removed by a trained professional without damaging the underlying paint. This is important for leased vehicles. Do not attempt to remove PPF yourself without heat and the correct tools." },
  { question: "How much does PPF cost?", answer: "KAVACA PPF pricing depends on the coverage area — targeted stone chip zones start from [PLACEHOLDER], front end packages from [PLACEHOLDER], and full vehicle coverage from [PLACEHOLDER]. Contact us with your vehicle details for an accurate quote." },
];

const DETAILING_FAQS = [
  { question: "What's included in a full car detail?", answer: "A full car detail at Ceramic Pro North West includes: two-bucket hand wash, paint decontamination and clay bar, machine polishing (single or multi-stage depending on package), interior deep clean, leather condition, glass polish, tyre dressing, and door jamb cleaning. Higher packages include paint correction and ceramic sealant." },
  { question: "What's the difference between a valet and a full detail?", answer: "A valet is a thorough clean — washing, vacuuming, window cleaning, and interior wipe-down. A full detail goes further with machine polishing to correct the paint, specialist decontamination, and deeper interior treatment. Detailing restores condition; valeting maintains it." },
  { question: "How often should I get my car detailed?", answer: "For a daily driver, a thorough valet every 3–4 months and a full detail once a year will maintain the car's condition. If your car has a ceramic coating, an annual inspection and maintenance wash is recommended. High-value or show cars benefit from monthly detail maintenance." },
  { question: "Can you remove swirl marks?", answer: "Yes — swirl marks are removed during paint correction using machine polishers and specialist compounds. The level of correction depends on how deep the swirl marks are. We assess the paint under specialist lighting and advise on the appropriate correction before proceeding." },
  { question: "Do you offer mobile detailing in Bolton?", answer: "We carry out all detailing work at our Farnworth workshop, where we have controlled lighting, proper equipment, and the right working conditions to deliver professional results. We do not currently offer mobile detailing. Our workshop is easy to reach from all parts of Bolton and Greater Manchester." },
];

const BOOKING_FAQS = [
  { question: "How do I book an appointment?", answer: "You can book by calling Ceramic Pro North West on +44 1204 435933, sending a WhatsApp message, or using the contact form on our website. We'll discuss your requirements and confirm availability. A deposit may be required to secure your booking for larger jobs." },
  { question: "How long does ceramic coating application take?", answer: "A ceramic coating application takes 1–3 days depending on the vehicle and whether paint correction is required beforehand. We will give you a clear timeline during your booking. Your vehicle should be kept dry for 24 hours after collection while the coating cures." },
  { question: "Do you work on all vehicle types?", answer: "Yes — Ceramic Pro North West works on cars, SUVs, vans, motorcycles, and motorhomes. We tailor every service to the specific vehicle. Contact us with your vehicle type and requirements and we will advise on the best service and pricing." },
  { question: "Where are you located?", answer: "Our workshop is at 115 Albert Road, Farnworth, Bolton, BL4 9EA — approximately 2 miles from Bolton town centre and 15–20 minutes from Manchester city centre via the A666 or M61." },
  { question: "Do I need to book in advance?", answer: "Yes — we recommend booking in advance, especially for ceramic coating and PPF appointments which require a full day or more. For valets, we often have more availability. Call or message us to check current availability and secure your preferred date." },
];

const ALL_FAQS = [...CERAMIC_FAQS, ...PPF_FAQS, ...DETAILING_FAQS, ...BOOKING_FAQS];

const SECTIONS = [
  { title: "Ceramic Coating FAQs", faqs: CERAMIC_FAQS },
  { title: "Paint Protection Film FAQs", faqs: PPF_FAQS },
  { title: "Car Detailing & Valeting FAQs", faqs: DETAILING_FAQS },
  { title: "Booking & Pricing FAQs", faqs: BOOKING_FAQS },
];

export default function FAQPage() {
  return (
    <>
      <SchemaFAQ faqs={ALL_FAQS} />

      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Everything You Need to Know</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ceramic Pro North West answers the most common questions about ceramic coating, paint protection film, car detailing, and booking at our Bolton workshop. If your question isn&apos;t answered here,{" "}
            <Link href="/contact" className="text-[#c9a84c] hover:underline">contact us directly.</Link>
          </p>
        </div>
      </section>

      <div className="py-8 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-16">
          {SECTIONS.map((section) => (
            <section key={section.title} aria-labelledby={section.title.replace(/\s+/g, "-").toLowerCase()}>
              <h2
                id={section.title.replace(/\s+/g, "-").toLowerCase()}
                className="font-heading text-2xl font-bold text-white mb-6 pb-3 border-b border-[#3a3a3a]"
              >
                {section.title}
              </h2>
              <FAQAccordion faqs={section.faqs} />
            </section>
          ))}
        </div>
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Still Have a Question?</h2>
          <p className="text-gray-400 mb-8">
            The team at Ceramic Pro North West is happy to answer any questions about ceramic coating, PPF, or car detailing. Call us, send a WhatsApp, or use our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Contact Us
            </Link>
            <a href={`tel:${BUSINESS.phone}`}
              className="px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Get a free, no-obligation quote from Bolton's Ceramic Pro certified specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
