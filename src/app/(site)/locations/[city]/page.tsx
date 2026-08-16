import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SchemaFAQ from "@/components/seo/SchemaFAQ";

const CITY_DATA: Record<
  string,
  { name: string; distance: string; route: string; description: string }
> = {
  farnworth: {
    name: "Farnworth",
    distance: "our workshop is located in Farnworth",
    route: "115 Albert Road, Farnworth, BL4 9EA",
    description:
      "Latin King Detailing is based right here in Farnworth, Bolton BL4. If you are a Farnworth local, you are minutes from the area's best car ceramic coating and professional car detailing workshop.",
  },
  horwich: {
    name: "Horwich",
    distance: "approx. 5 miles from Horwich town centre",
    route: "via A673 south through Lostock, approximately 10–12 minutes",
    description:
      "Horwich customers are some of our closest visitors — just 10 minutes south via the A673. Latin King Detailing serves Horwich with professional car ceramic coating, KAVACA PPF, paint correction, and car detailing for vehicles across the BL6 postcode area.",
  },
  westhoughton: {
    name: "Westhoughton",
    distance: "approx. 5 miles from Westhoughton town centre",
    route: "via A58 east into Farnworth, approximately 10–12 minutes",
    description:
      "Westhoughton drivers take the A58 east to reach Latin King Detailing in Farnworth in around 10 minutes — short journey for professional Ceramic Pro 9H car ceramic coating, KAVACA PPF, and full car detailing services.",
  },
  kearsley: {
    name: "Kearsley",
    distance: "approx. 3 miles from Kearsley",
    route: "via A666 north, approximately 6–8 minutes",
    description:
      "Kearsley is just minutes north of our Farnworth workshop on the A666. Latin King Detailing is the car ceramic coating and detailing specialist for Kearsley drivers — one of the closest certified Ceramic Pro installers to the BL4 area.",
  },
  "little-lever": {
    name: "Little Lever",
    distance: "approx. 3 miles from Little Lever",
    route: "via Manchester Road west through Farnworth, approximately 7–9 minutes",
    description:
      "Little Lever customers are just minutes from Latin King Detailing's Farnworth workshop. We serve Little Lever and the surrounding BL3 corridor with car ceramic coating, KAVACA PPF, and professional car detailing.",
  },
  harwood: {
    name: "Harwood",
    distance: "approx. 4 miles from Harwood, Bolton",
    route: "via Crompton Way south through Bolton town centre, approximately 10–12 minutes",
    description:
      "Harwood and Bromley Cross residents drive south through Bolton to reach Latin King Detailing's Farnworth workshop in around 10–12 minutes. We serve the BL2 area with Ceramic Pro 9H car ceramic coating, KAVACA PPF, and professional car detailing.",
  },
  walkden: {
    name: "Walkden",
    distance: "approx. 6 miles from Walkden",
    route: "via A666 north through Kearsley, approximately 12–15 minutes",
    description:
      "Walkden and the M28 area are well-connected to our Farnworth workshop via the A666 northbound. Latin King Detailing is the nearest certified Ceramic Pro car ceramic coating installer to Walkden and the Worsley area of Greater Manchester.",
  },
  worsley: {
    name: "Worsley",
    distance: "approx. 7 miles from Worsley village",
    route: "via A572 through Walkden then A666 north, approximately 15 minutes",
    description:
      "Worsley and the M28 corridor are home to a high proportion of prestige and luxury vehicle owners. Latin King Detailing in Farnworth, Bolton is the nearest Ceramic Pro certified car ceramic coating installer — just 15 minutes north via Walkden.",
  },
  leigh: {
    name: "Leigh",
    distance: "approx. 8 miles from Leigh town centre",
    route: "via A579 east through Tyldesley and A577 northeast, approximately 18–20 minutes",
    description:
      "Leigh customers make the 20-minute drive east to Latin King Detailing in Farnworth for Ceramic Pro 9H car ceramic coating, KAVACA PPF, and professional car detailing — results not available from every local detailer across WN7.",
  },
  atherton: {
    name: "Atherton",
    distance: "approx. 6 miles from Atherton town centre",
    route: "via A579 east through Tyldesley to A577, approximately 15 minutes",
    description:
      "Atherton drivers regularly visit Latin King Detailing in Farnworth for professional car ceramic coating and paint protection services. The A579 eastbound makes our Farnworth, Bolton workshop an easy 15-minute drive from the M46 corridor.",
  },
  tyldesley: {
    name: "Tyldesley",
    distance: "approx. 5 miles from Tyldesley",
    route: "via A577 northeast to Farnworth, approximately 12–14 minutes",
    description:
      "Tyldesley customers are just 12 minutes from Latin King Detailing's Farnworth workshop via the A577. We serve Tyldesley and the M29 corridor with professional Ceramic Pro 9H car ceramic coating, KAVACA PPF, and full car detailing.",
  },
  radcliffe: {
    name: "Radcliffe",
    distance: "approx. 5 miles from Radcliffe town centre",
    route: "via A665 west through Little Lever, approximately 10–12 minutes",
    description:
      "Radcliffe drivers take the A665 west through Little Lever to reach Latin King Detailing in Farnworth in just 10–12 minutes. We serve Radcliffe and the surrounding M26 area with professional car ceramic coating and detailing.",
  },
  whitefield: {
    name: "Whitefield",
    distance: "approx. 8 miles from Whitefield",
    route: "via A56 / A666 northwest through Radcliffe, approximately 16–18 minutes",
    description:
      "Whitefield customers make the straightforward journey northwest to Latin King Detailing in Farnworth for Ceramic Pro 9H car ceramic coating, KAVACA PPF, and professional car detailing. The M45 and A56 make our Bolton workshop easily accessible from Whitefield.",
  },
  swinton: {
    name: "Swinton",
    distance: "approx. 7 miles from Swinton",
    route: "via A666 north through Walkden and Kearsley, approximately 13–15 minutes",
    description:
      "Swinton and Pendlebury drivers head north on the A666 to reach Latin King Detailing in Farnworth — the nearest Ceramic Pro certified car ceramic coating installer to the Swinton, Eccles, and Salford area of Greater Manchester.",
  },
  eccles: {
    name: "Eccles",
    distance: "approx. 9 miles from Eccles town centre",
    route: "via A57 then A666 north through Swinton and Walkden, approximately 17–20 minutes",
    description:
      "Eccles customers drive north via the A666 corridor to reach Latin King Detailing in Farnworth, Bolton — the nearest certified Ceramic Pro car ceramic coating installer to the Eccles and Salford M30 area of Greater Manchester.",
  },
  bury: {
    name: "Bury",
    distance: "approx. 8 miles from Bury town centre",
    route: "via A58 through Radcliffe, 15–20 minutes",
    description:
      "Bury drivers regularly visit our Farnworth, Bolton workshop for Ceramic Pro 9H car ceramic coating, KAVACA PPF, and professional detailing. Conveniently located just off the A58 corridor, Latin King Detailing serves the BL9 and M26 areas.",
  },
  salford: {
    name: "Salford",
    distance: "approx. 9 miles from Salford Quays",
    route: "via A666 through Walkden, 15–20 minutes",
    description:
      "Latin King Detailing is the nearest certified Ceramic Pro car ceramic coating installer to Salford. Many Salford and MediaCityUK area customers visit our Bolton workshop for professional paint protection and car detailing.",
  },
  wigan: {
    name: "Wigan",
    distance: "approx. 12 miles from Wigan town centre",
    route: "via A58 / B5238, approximately 20–25 minutes",
    description:
      "Wigan customers come to Latin King Detailing for Ceramic Pro 9H certified car ceramic coating installations and KAVACA PPF — professional results not available at every local detailer across the WN1–WN6 postcodes.",
  },
  chorley: {
    name: "Chorley",
    distance: "approx. 8 miles from Chorley town centre",
    route: "via A6 / A673, approximately 15–20 minutes",
    description:
      "Chorley drivers make the short trip south via the A673 to Latin King Detailing's Farnworth workshop for professional car ceramic coating, paint protection film, paint correction, and car detailing.",
  },
  altrincham: {
    name: "Altrincham",
    distance: "approx. 14 miles from Altrincham town centre",
    route: "via A56 through Sale and Eccles to M60 / A666, approximately 22–26 minutes",
    description:
      "Altrincham's high concentration of prestige and luxury vehicles makes car ceramic coating a sound investment. Latin King Detailing in Farnworth, Bolton is the nearest certified Ceramic Pro installer — Altrincham customers regularly make the straightforward M60/A666 journey for Ceramic Pro 9H and KAVACA PPF.",
  },
  stockport: {
    name: "Stockport",
    distance: "approx. 12 miles from Stockport town centre",
    route: "via M60 westbound then A666 northbound through Farnworth, approximately 18–22 minutes",
    description:
      "Stockport and the SK postcode area sit within easy reach of Latin King Detailing's Farnworth workshop via the M60. We're one of the closest Ceramic Pro certified car ceramic coating installers to Stockport — serving SK1 through SK8 customers with Ceramic Pro 9H, KAVACA PPF, paint correction, and full car detailing.",
  },
  wilmslow: {
    name: "Wilmslow",
    distance: "approx. 16 miles from Wilmslow",
    route: "via A34 north through Handforth to M60 then A666 north, approximately 24–28 minutes",
    description:
      "Wilmslow and the Cheshire Golden Triangle have one of the highest densities of prestige and performance vehicles in the North West. Latin King Detailing in Farnworth, Bolton is the nearest Ceramic Pro certified installer — Wilmslow customers regularly make the M60/A666 journey north for Ceramic Pro 9H ceramic coating and KAVACA PPF on their Porsches, Range Rovers, and luxury cars.",
  },
};

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = CITY_DATA[city];
  if (!data) return {};

  return {
    title: `Car Ceramic Coating Near ${data.name} — Latin King Detailing Bolton`,
    description: `Car ceramic coating near ${data.name}. Latin King Detailing in Bolton — ${data.distance}. Ceramic Pro 9H certified car coating specialists. Free quote: 07482 225323.`,
    alternates: { canonical: `/locations/${city}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = CITY_DATA[city];

  if (!data) notFound();

  const faqs = [
    {
      question: `How far is Latin King Detailing from ${data.name}?`,
      answer: `We're at 115 Albert Road, Farnworth, Bolton BL4 9EA — ${data.distance}. The quickest route is ${data.route}.`,
    },
    {
      question: `Do you offer car ceramic coating near ${data.name}?`,
      answer: `Yes — ${data.name} customers are welcome at our Farnworth, Bolton workshop. As a Ceramic Pro certified installer, we apply genuine Ceramic Pro 9H ceramic coating and KAVACA PPF with manufacturer registration and warranty. Call or WhatsApp us and we'll give you a straight quote for your vehicle.`,
    },
    {
      question: `What car ceramic coating services are available near ${data.name}?`,
      answer: `From our Farnworth workshop, we offer: Ceramic Pro 9H ceramic coating, KAVACA paint protection film, professional car detailing and valeting, paint correction and swirl mark removal, and leather interior protection. We'll advise on what your car actually needs and what it'll cost — no pressure, no hard sell.`,
    },
    {
      question: `How long does car ceramic coating take near ${data.name}?`,
      answer: `Most ceramic coating jobs take 1–3 days depending on the package and whether paint correction is needed first. We'll confirm the exact timeline when you book. Most ${data.name} customers drop off in the morning and collect their car the next day or the day after.`,
    },
    {
      question: `Is it worth travelling from ${data.name} for car ceramic coating?`,
      answer: `Our ${data.name} customers say yes. Ceramic Pro 9H lasts 2–5 years — a short drive to a certified installer with a registered, manufacturer-backed warranty is a straightforward decision against a non-certified application that might fail within 12 months.`,
    },
  ];

  return (
    <>
      <SchemaFAQ faqs={faqs} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { name: "Locations", href: "/locations/bolton" },
            { name: data.name, href: `/locations/${city}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#c9a84c] text-sm font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> {data.name}, Greater Manchester
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Car Ceramic Coating Near {data.name} — Latin King Detailing Bolton
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {data.description} Whether you need Ceramic Pro 9H ceramic coating, KAVACA PPF, paint correction, or a full car detail — it&apos;s all available from our Farnworth workshop. Call or WhatsApp us to discuss your vehicle and get a straight quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            Services Available to {data.name} Customers
          </h2>
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

      {/* Journey */}
      <section className="py-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-white mb-4">
            Getting to Our Workshop from {data.name}
          </h2>
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-2">
              <span className="text-white font-semibold">Address:</span> {BUSINESS.address.full}
            </p>
            <p className="text-gray-400 text-sm mb-3">
              <span className="text-white font-semibold">Route from {data.name}:</span> {data.route}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold hover:underline"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Car Ceramic Coating Near {data.name} — FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        headline={`Car Ceramic Coating Near ${data.name} — Free Quote`}
        subtext="Latin King Detailing, Farnworth Bolton. Ceramic Pro 9H certified. KAVACA PPF. Professional results for Greater Manchester drivers."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
