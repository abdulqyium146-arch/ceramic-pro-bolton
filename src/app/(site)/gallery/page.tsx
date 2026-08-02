import type { Metadata } from "next";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import { GALLERY_IMAGES } from "@/lib/gallery";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import SchemaImageGallery from "@/components/seo/SchemaImageGallery";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Ceramic Coating & Detailing Results Bolton",
  description:
    "Browse real ceramic coating, PPF, and car detailing results from Ceramic Pro North West's Bolton workshop. Lamborghini, Bentley, Ferrari, BMW and more. Serving Greater Manchester.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery — Ceramic Coating & Detailing Results | ${BUSINESS.name}`,
    description:
      "Real ceramic coating and detailing results from our Bolton workshop. Lamborghini, Bentley, Ferrari, BMW, Jaguar, Porsche and more.",
    images: [
      {
        url: "/images/lamborghini-aventador-ceramic-coating-bolton.webp",
        width: 1280,
        height: 853,
        alt: "Lamborghini Aventador ceramic coating — Ceramic Pro North West, Bolton",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: "Home", href: "" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />
      <SchemaImageGallery images={GALLERY_IMAGES} />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Gallery", href: "/gallery" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3 text-center">
            Our Work
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Ceramic Coating &amp; Detailing Gallery
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
            Real results from our Farnworth, Bolton workshop. Every vehicle treated with Ceramic Pro 9H, KAVACA PPF, or professional detailing — from everyday cars to supercars.
          </p>

          <GalleryClient />
        </div>
      </section>

      <CTABanner
        headline="Want Results Like These for Your Car?"
        subtext="Book a free consultation at our Farnworth, Bolton workshop. We'll assess your vehicle and recommend the right treatment."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
