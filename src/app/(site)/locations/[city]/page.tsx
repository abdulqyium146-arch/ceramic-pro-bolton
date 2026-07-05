import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/lib/business";
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
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
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
        secondaryCTA={{ label: `Call ${BUSINESS.phoneDisplay}`, href: `tel:${BUSINESS.phone}`, isPhone: true }}
        variant="gold"
      />
    </>
  );
}
