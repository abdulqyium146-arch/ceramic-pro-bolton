"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";
import { WHATSAPP_HREF } from "@/lib/business";

// Note: metadata can't be exported from client component — move to a layout or use generateMetadata pattern
// This page is client for filter state only; in production convert to RSC + URL params

const CATEGORIES = ["All", "Ceramic Coating", "PPF", "Detailing", "Interior"];

const GALLERY_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: CATEGORIES[(i % 4) + 1],
  vehicle: ["BMW 3 Series", "Audi Q5", "Range Rover", "Ford Mustang", "Mercedes C-Class", "VW Golf GTI", "Porsche 911", "Tesla Model 3", "Toyota GR86", "Kia EV6", "Honda Civic Type R", "Jaguar F-Type"][i],
  service: ["Ceramic Pro 9H Full Car", "KAVACA Front End PPF", "Full Detail + Correction", "Interior Protection", "Ceramic Pro 9H + Correction", "Full Valet", "KAVACA Full Vehicle PPF", "Ceramic Coating", "Paint Correction", "New Car Detail", "Ceramic Pro 9H", "Interior & Exterior Detail"][i],
}));

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Gallery", href: "/gallery" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3 text-center">Our Work</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Before &amp; After Gallery
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-4">
            Ceramic Pro North West&apos;s results speak for themselves. Browse ceramic coating transformations, PPF installations, paint corrections, and interior details from our Bolton workshop.
          </p>
          <p className="text-center text-sm text-gray-500 mb-10">
            [PLACEHOLDER: Replace all placeholder cards with real before/after photos from the workshop before launch]
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                role="tab"
                aria-selected={active === cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-[#c9a84c] text-[#0f0f0f]"
                    : "border border-[#3a3a3a] text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all"
              >
                {/* Before/after placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#242424] to-[#1a1a1a] flex flex-col items-center justify-center gap-2">
                  <span className="text-xs text-gray-600 uppercase tracking-widest">Before / After</span>
                  <span className="text-xs text-gray-700">[PLACEHOLDER]</span>
                  {/* After half */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-[#1f1f1f]" />
                    <div className="w-px bg-[#c9a84c]/40" />
                    <div className="w-1/2 bg-[#2a2a2a]" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 rounded px-2 py-0.5">
                    <span className="text-[10px] text-gray-400">Before</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#c9a84c]/80 rounded px-2 py-0.5">
                    <span className="text-[10px] text-[#0f0f0f] font-bold">After</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                  <p className="text-white font-semibold text-sm mt-1">{item.vehicle}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want Results Like These?"
        subtext="Book a free consultation at our Farnworth, Bolton workshop. We'll assess your vehicle and recommend the right treatment."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="gold"
      />
    </>
  );
}
