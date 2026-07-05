"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

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
