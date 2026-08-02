"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/gallery";

export default function GalleryClient() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            role="tab"
            aria-selected={active === cat.key}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat.key
                ? "bg-[#c9a84c] text-[#0f0f0f]"
                : "border border-[#3a3a3a] text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((img) => (
          <figure
            key={img.src}
            className="group bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                title={img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={img.priority}
              />
            </div>
            <figcaption className="p-3">
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">
                {GALLERY_CATEGORIES.find((c) => c.key === img.category)?.label}
              </span>
              <p className="text-gray-300 text-xs mt-0.5">{img.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
