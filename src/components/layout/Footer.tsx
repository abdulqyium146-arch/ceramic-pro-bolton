import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/business";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WA_MESSAGE = encodeURIComponent("Hi, I'd like a free quote. Can you help?");

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
                  Latin King Detailing
                </div>
                <div className="text-[#c9a84c] text-xs">{BUSINESS.tradingAs}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Bolton&apos;s specialist in ceramic coatings, paint protection film, and professional car detailing. Serving Greater Manchester since [PLACEHOLDER: year].
            </p>
            {/* Ratings */}
            <div className="flex flex-col gap-2 mb-5">
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
            {/* Main website link */}
            <a
              href="https://www.latinkingdetailing.co.uk/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[#c9a84c] hover:text-[#e8c96c] text-sm font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Latin King Detailing
            </a>
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
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-[#25D366] transition-colors text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 mt-0.5 shrink-0 text-[#25D366]" />
                <span>WhatsApp Us</span>
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
                <div>
                  <span className="text-white text-xs font-semibold block mb-0.5">Bolton</span>
                  <span>{BUSINESS.address.full}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a84c]" />
                <div>
                  <span className="text-white text-xs font-semibold block mb-0.5">Manchester</span>
                  <span>426 Flixton Rd, Urmston, Manchester M41 6QT</span>
                </div>
              </div>
            </address>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-white text-sm font-semibold">Available 24/7</span>
              </div>
              <ul className="space-y-1">
                {BUSINESS.hoursDisplay.map((h) => (
                  <li key={h.day} className="flex justify-between text-xs text-gray-400">
                    <span>{h.day}</span>
                    <span className="text-[#c9a84c]">
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
