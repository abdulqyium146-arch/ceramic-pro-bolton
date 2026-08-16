import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

export const metadata: Metadata = {
  title: "Car Ceramic Coating & Detailing FAQ — Bolton, Greater Manchester",
  description:
    "Expert answers about car ceramic coating, PPF, paint correction & car detailing. Latin King Detailing Bolton — serving Greater Manchester. Your ceramic coating questions answered.",
  alternates: { canonical: "/faq" },
};

const CERAMIC_FAQS = [
  { question: "What is Ceramic Pro 9H?", answer: "Ceramic Pro 9H is a professional-grade coating that bonds permanently with your car's paint at a molecular level. It's named after its 9H pencil hardness rating — the highest on the scale — which is significantly harder than unprotected clear coat. Don't confuse it with consumer ceramic spray products sold online; those sit on the surface and last weeks. Ceramic Pro 9H, applied by a certified installer, lasts years." },
  { question: "How much does ceramic coating cost in Bolton?", answer: "Entry-level starts from [PLACEHOLDER] on a smaller car — a full Ceramic Pro 9H application on a larger vehicle, or one that needs paint correction first, will cost more. Paint correction is sometimes needed beforehand because ceramic coating bonds over whatever's underneath: if the paint has swirls, they stay there permanently. Message us your make and model and we'll give you a straight, itemised quote." },
  { question: "How long does ceramic coating last?", answer: "A properly applied Ceramic Pro 9H coating lasts 2–5 years. Ceramic Pro also offers longer packages, including lifetime warranty options, which require an annual inspection to stay valid. The honest answer to 'how long?' is: it depends on the package you choose, how often you drive, and whether you maintain it correctly. We'll guide you through what's realistic for your car and usage." },
  { question: "Is ceramic coating worth it for a daily driver?", answer: "Yes — especially in Greater Manchester, where you're dealing with road salt from October to March, acid rain, and motorway debris on the M61 and M62. Ceramic coating doesn't make your car invincible, but it makes it dramatically easier to keep clean and much better protected. Most of our customers say it paid for itself within 12–18 months in reduced washing and detailing costs." },
  { question: "Can ceramic coating be applied to matte paint?", answer: "Yes — Ceramic Pro makes specific products for matte and satin finishes that enhance protection without adding gloss. Standard gloss coatings should never go on matte paint, as they'd ruin the finish. If your car has a matte wrap or factory matte paint, just mention it when you get in touch and we'll recommend the right product." },
  { question: "Does ceramic coating scratch-proof my car?", answer: "No — and anyone who claims it does is overselling it. Ceramic coating increases surface hardness and resists the light swirl marks that automatic car washes create, but a key, a significant stone chip, or abrasive cleaning will still damage it. For genuine physical protection against stone chips and deeper scratches, you need PPF. Many customers use both: PPF on high-impact zones, ceramic coating over the top." },
];

const PPF_FAQS = [
  { question: "What is paint protection film (PPF)?", answer: "Paint protection film — PPF — is a thick, self-healing urethane film that physically shields your car's paint from what the road throws at it: stone chips on the M60 or M61, motorway debris, bird lime, and everyday kerb scuffs. We install KAVACA PPF by Ceramic Pro, which includes self-healing technology — light surface scratches disappear with heat. It goes on completely transparent and doesn't change how the paint looks. It just protects it." },
  { question: "Is PPF better than ceramic coating?", answer: "Neither is better — they do different jobs. PPF physically absorbs impact: stone chips, road debris, scratches. Ceramic coating chemically protects and enhances: hydrophobic water-beading, UV resistance, gloss, easy-clean properties. PPF alone won't bead water the way ceramic does. Ceramic coating alone won't absorb a stone chip. Most customers who care seriously about protecting their car use both — PPF on the high-impact zones like the bonnet, front bumper, and door edges, ceramic coating over the rest." },
  { question: "Does PPF yellow over time?", answer: "Old PPF did. KAVACA doesn't. Older films were notorious for going orange or cloudy after a few years in UV — especially on white and light-coloured cars. KAVACA is built with UV inhibitors that maintain optical clarity for the life of the film, typically backed by a 10-year manufacturer warranty when installed by a certified fitter. What goes on clear, stays clear." },
  { question: "Can PPF be removed without damaging the paint?", answer: "Yes — if it's removed correctly. KAVACA PPF installed by Latin King Detailing can be safely taken off with heat and the right technique without harming the paint underneath. That's particularly useful for leased vehicles where you need to return the car in original condition. Never try to pull PPF off cold without a heat gun — you risk lifting clear coat edges and doing the damage you were trying to avoid." },
  { question: "How much does PPF cost?", answer: "PPF pricing depends on coverage. Targeted protection on the most stone-chip-prone zones — bonnet, A-pillars, door edges — starts from [PLACEHOLDER]. A front-end package covering the full bonnet, bumper, and wings starts from [PLACEHOLDER]. Full vehicle coverage from [PLACEHOLDER]. Exact pricing depends on your vehicle — a three-door hatch is a different job to a large SUV. Send us your make and model and we'll quote accurately." },
];

const DETAILING_FAQS = [
  { question: "What's included in a full car detail?", answer: "A full detail at Latin King Detailing starts with a two-bucket hand wash and paint decontamination — chemical fallout remover, iron remover, and clay bar to strip everything that regular washing leaves behind. Then machine polishing to correct swirl marks and restore gloss, followed by a deep interior clean covering seats, carpets, door cards, dashboard, boot, and glass. Higher packages include multi-stage paint correction and a ceramic sealant application. It's a full day's work — sometimes two — and the results show." },
  { question: "What's the difference between a valet and a full detail?", answer: "A valet cleans the car. A detail corrects it. Valeting covers the wash, interior vacuum, window clean, and wipe-down — it's the right service for a car that's already in decent shape and needs maintaining. Detailing goes to the paint: machine polishing to remove swirl marks and light scratches, specialist decontamination to strip bonded contamination that shampoo won't touch. If you can see swirls in sunlight or the paint looks dull, you need a detail — not a valet." },
  { question: "How often should I get my car detailed?", answer: "For a daily driver in Greater Manchester, a thorough valet every 3–4 months keeps it looking right, and a full detail once a year keeps the paint in good condition. If your car has a ceramic coating, an annual maintenance wash and inspection will keep the coating performing. The more regularly you maintain it, the less correction work the paint ever needs — and correction is the expensive part." },
  { question: "Can you remove swirl marks?", answer: "Yes — swirl mark removal is one of the most common jobs we do. Swirls come from automatic car washes, using the wrong drying cloth, or wiping a dusty car. We remove them with machine polishers and specialist abrasive compounds during paint correction. The depth of the swirls determines how many polishing stages are needed. We inspect the paint under specialist lighting first and tell you exactly what's there and what it'll take to fix it — no guessing." },
  { question: "Do you offer mobile detailing in Bolton?", answer: "We don't — and there's a genuine reason. Professional detailing needs specialist lighting to reveal swirl marks you'd miss in normal daylight, proper drainage for decontamination chemicals, and a stable environment for coatings to cure. You can't replicate that on a driveway. Our Farnworth workshop has everything set up correctly, and it's straightforward to reach from anywhere in Bolton and across Greater Manchester. The results make the trip worth it." },
];

const BOOKING_FAQS = [
  { question: "How do I book an appointment?", answer: `Call us or WhatsApp us on ${BUSINESS.phoneDisplay}, or use the contact form on our website. We'll ask about your car, what you want done, and check availability — then confirm the booking and answer any questions. For ceramic coating and PPF jobs, we may ask to see the car first if there are questions about paint condition. A deposit secures your slot for larger bookings.` },
  { question: "How long does ceramic coating application take?", answer: "Most ceramic coating jobs take 1–3 working days. A car that just needs washing and coating is the shorter end; one that needs paint correction first can take the full 2–3 days. We'll tell you the exact timeline when you book — no surprises. After you collect the car, keep it out of rain and away from jet washes for 48 hours while the coating finishes curing. We'll give you aftercare instructions to take with you." },
  { question: "Do you work on all vehicle types?", answer: "Yes — cars, SUVs, vans, motorcycles, and motorhomes. We adjust the approach for each vehicle; a motorbike and a Range Rover are very different jobs, same principle, different preparation and product choice. When you get in touch, tell us exactly what you're bringing in and what you want done — we'll give you honest advice and accurate pricing. We won't quote for one type of vehicle and adjust the price when something bigger turns up." },
  { question: "Where are you located?", answer: "Our workshop is at 115 Albert Road, Farnworth, Bolton, BL4 9EA — about 2 miles south of Bolton town centre. From the M61, leave at junction 3 or 4 and you're there within minutes. From Manchester city centre, it's 15–20 minutes via the A666. There's parking at the workshop." },
  { question: "Do I need to book in advance?", answer: "Yes — especially for ceramic coating, PPF, and full details, which need a full day or more blocked out. For basic valets, we often have availability sooner. We're a small specialist workshop, not a drive-through, so spaces get taken quickly. Call or WhatsApp us to check availability and lock in your date — the earlier you book, the more choice you have over timing." },
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
            Latin King Detailing answers the most common questions about ceramic coating, paint protection film, car detailing, and booking at our Bolton workshop. If your question isn&apos;t answered here,{" "}
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
            The team at Latin King Detailing is happy to answer any questions about ceramic coating, PPF, or car detailing. Call us, send a WhatsApp, or use our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get a Free Quote
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-[#c9a84c] text-sm font-medium transition-colors self-center">
              Or call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Protect Your Car?"
        subtext="Get a free, no-obligation quote from Bolton's Ceramic Pro certified specialists."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="dark"
      />
    </>
  );
}
