import Link from "next/link";
import { Home, ArrowRight, Search, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function NotFound() {
  const quickLinks = [
    { label: "Ceramic Coating", href: "/services/ceramic-coating" },
    { label: "Paint Protection Film", href: "/services/paint-protection-film" },
    { label: "Car Detailing", href: "/services/car-detailing-valet" },
    { label: "Get a Quote", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-heading font-bold text-[#c9a84c] mb-4">404</div>
        <h1 className="font-heading text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Find what you need below, or contact Latin King Detailing directly.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-sm text-gray-300 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            >
              {link.label}
              <ArrowRight className="w-3 h-3 shrink-0" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all"
          >
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
