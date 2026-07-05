import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#3a3a3a] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#c9a84c] flex items-center justify-center font-bold text-[#0f0f0f] text-lg font-heading">
                CP
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm leading-tight">
                  Ceramic Pro North West
                </div>
                <div className="text-[#c9a84c] text-xs">{BUSINESS.tradingAs}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Bolton&apos;s specialist in ceramic coatings, paint protection film, and professional car detailing. Serving Greater Manchester since [PLACEHOLDER: year].
            </p>
            {/* Ratings */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="stars text-sm">★★★★★</span>
                <span className="text-white text-sm font-semibold">{BUSINESS.rating.google.value}</span>
                <span className="text-gray-400 text-xs">Google ({BUSINESS.rating.google.count} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="stars text-sm">★★★★★</span>
                <span className="text-white text-sm font-semibold">{BUSINESS.rating.facebook.value}</span>
                <span className="text-gray-400 text-xs">Facebook ({BUSINESS.rating.facebook.count}+ followers)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {BUSINESS.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {BUSINESS.serviceArea.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-start gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a84c]" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-start gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a84c]" />
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a84c]" />
                <span>{BUSINESS.address.full}, United Kingdom</span>
              </div>
            </address>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-white text-sm font-semibold">Opening Hours</span>
              </div>
              <ul className="space-y-1">
                {BUSINESS.hoursDisplay.map((h) => (
                  <li key={h.day} className="flex justify-between text-xs text-gray-400">
                    <span>{h.day}</span>
                    <span className={h.hours === "Closed" ? "text-red-400" : "text-gray-300"}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {year} {BUSINESS.name} ({BUSINESS.tradingAs}). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-[#c9a84c] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
