import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#3a3a3a] shadow-2xl"
      role="complementary"
      aria-label="Quick contact options"
    >
      <div className="grid grid-cols-3 h-16">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-white hover:bg-white/5 transition-colors border-r border-[#3a3a3a]"
          aria-label={`Call us on ${BUSINESS.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 text-[#c9a84c]" />
          <span className="text-[10px] font-medium">Call Now</span>
        </a>
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi,%20I%27d%20like%20a%20quote%20for%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-white hover:bg-white/5 transition-colors border-r border-[#3a3a3a]"
          aria-label="WhatsApp us for a quick quote"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 bg-[#c9a84c] text-[#0f0f0f] hover:bg-[#e8c96c] transition-colors"
          aria-label="Book a detailing appointment"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] font-bold">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
