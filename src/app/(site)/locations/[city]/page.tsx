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
  bury: {
    name: "Bury",
    distance: "approx. 8 miles from Bury town centre",
    route: "via A58 through Radcliffe, 15–20 minutes",
    description:
      "Bury drivers regularly visit our Farnworth, Bolton workshop for Ceramic Pro 9H coatings, KAVACA PPF, and professional detailing. Conveniently located just off the A58 corridor.",
  },
  salford: {
    name: "Salford",
    distance: "approx. 9 miles from Salford Quays",
    route: "via A666 through Walkden, 15–20 minutes",
    description:
      "Ceramic Pro North West is the nearest certified Ceramic Pro installer to Salford. Many Salford and MediaCityUK area customers visit our Bolton workshop for premium paint protection.",
  },
  wigan: {
    name: "Wigan",
    distance: "approx. 12 miles from Wigan town centre",
    route: "via A58 / B5238, approximately 20–25 minutes",
    description:
      "Wigan customers come to Ceramic Pro North West for our Ceramic Pro 9H certified installations and KAVACA PPF — professional results not available at every local detailer.",
  },
  chorley: {
    name: "Chorley",
    distance: "approx. 8 miles from Chorley town centre",
    route: "via A6 / A673, approximately 15–20 minutes",
    description:
      "Chorley drivers make the short trip to our Farnworth, Bolton workshop for professional ceramic coatings, paint protection film, and car detailing.",
  },
  farnworth: {
    name: "Farnworth",
    distance: "our workshop is located in Farnworth",
    route: "115 Albert Road, Farnworth, BL4 9EA",
    description:
      "Ceramic Pro North West is based right here in Farnworth. If you are a Farnworth local, you are minutes from Bolton's best ceramic coating and car detailing workshop.",
  },
  altrincham: {
    name: "Altrincham",
    distance: "approx. 13 miles from Altrincham town centre",
    route: "via A56 through Sale and Eccles to M60/A666, approximately 20–25 minutes",
    description:
      "Altrincham drivers regularly make the short journey to our Farnworth, Bolton workshop for Ceramic Pro 9H ceramic coatings, KAVACA PPF, and professional car detailing. Altrincham's high concentration of prestige and luxury vehicles makes paint protection a sound investment — and Ceramic Pro North West is the nearest certified Ceramic Pro installer.",
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
    title: `Ceramic Coating ${data.name} — Ceramic Pro North West Bolton`,
    description: `Professional ceramic coating and car detailing near ${data.name}. Ceramic Pro North West in Bolton — ${data.distance}. Free quote available.`,
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
      question: `How far is Ceramic Pro North West from ${data.name}?`,
      answer: `Ceramic Pro North West is located at 115 Albert Road, Farnworth, Bolton — ${data.distance}. The most convenient route is ${data.route}.`,
    },
    {
      question: `Do you offer ceramic coating near ${data.name}?`,
      answer: `Yes — Ceramic Pro North West serves ${data.name} customers from our professional workshop in Farnworth, Bolton. As a certified Ceramic Pro installer, we apply genuine Ceramic Pro 9H coatings and KAVACA PPF with full manufacturer registration and warranty.`,
    },
    {
      question: `Is it worth travelling from ${data.name} for ceramic coating?`,
      answer: `Our ${data.name} customers consistently say yes. A certified Ceramic Pro 9H installation is a 2–5 year investment, and the short journey to our Bolton workshop ensures you get a properly certified application with registered warranty — not a cheaper alternative product.`,
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
            Ceramic Coating &amp; Car Detailing Near {data.name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {data.description} Ceramic Pro North West is {data.distance} — serving {data.name} customers with professional Ceramic Pro 9H ceramic coatings, KAVACA PPF, and full car detailing.
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
            {data.name} Ceramic Coating FAQs
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        headline={`Serving ${data.name} from Our Bolton Workshop`}
        subtext="Ceramic Pro certified installers. Professional results. Easy journey from across Greater Manchester."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
