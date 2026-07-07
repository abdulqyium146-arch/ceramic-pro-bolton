"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WA_MESSAGE = encodeURIComponent("Hi, I'd like a free quote. Can you help?");

const NAV = [
  { label: "Services", href: "/services", children: BUSINESS.services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
  { label: "Locations", href: "/locations/bolton", children: BUSINESS.serviceArea.slice(0, 4).map((a) => ({ label: a.name, href: `/locations/${a.slug}` })) },
  { label: "Gallery", href: "/gallery", children: null },
  { label: "Reviews", href: "/reviews", children: null },
  { label: "About", href: "/about", children: null },
  { label: "FAQ", href: "/faq", children: null },
  { label: "Blog", href: "/blog", children: null },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#3a3a3a] shadow-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Ceramic Pro North West – Home">
            <div className="w-10 h-10 rounded-lg bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f0f0f] text-lg font-heading shrink-0">
              CP
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-white leading-tight text-sm">
                Ceramic Pro North West
              </div>
              <div className="text-[#c9a84c] text-xs leading-tight">
                Bolton&apos;s Detailing Specialists
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-[#c9a84c] transition-colors rounded-md hover:bg-white/5"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl shadow-2xl py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-[#c9a84c] hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#c9a84c] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b858] transition-colors"
              aria-label="WhatsApp us"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-[#c9a84c] text-[#0f0f0f] font-semibold text-sm hover:bg-[#e8c96c] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-[#c9a84c] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0f0f0f]/98 border-t border-[#3a3a3a] px-4 pb-6 pt-2">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-gray-300 hover:text-[#c9a84c] font-medium transition-colors border-b border-[#3a3a3a]/50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-bold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 py-3 border border-[#c9a84c] text-[#c9a84c] rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-3 text-center bg-[#c9a84c] text-[#0f0f0f] rounded-lg font-bold"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
