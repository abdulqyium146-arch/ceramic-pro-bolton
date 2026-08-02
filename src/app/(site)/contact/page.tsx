import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MapEmbed from "@/components/ui/MapEmbed";
import BookingForm from "@/components/ui/BookingForm";

export const metadata: Metadata = {
  title: "Contact & Book | Ceramic Pro North West Bolton | Free Quote",
  description:
    "Contact Ceramic Pro North West in Bolton for a free ceramic coating or car detailing quote. Call, WhatsApp, or use our online form. Based in Farnworth, BL4 9EA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Get in Touch</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Ceramic Pro North West
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to protect your car? Get a free, no-obligation quote from Bolton&apos;s Ceramic Pro certified specialists. Call us, send a WhatsApp, or fill in the form below and we&apos;ll get back to you within 1 business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div className="space-y-8">
              {/* Quick contact options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href={`tel:${BUSINESS.phone}`}
                  className="flex flex-col items-center gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 hover:border-[#c9a84c]/50 transition-all text-center">
                  <Phone className="w-7 h-7 text-[#c9a84c]" />
                  <span className="font-semibold text-white text-sm">Call</span>
                  <span className="text-gray-400 text-xs">{BUSINESS.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi,%20I%27d%20like%20a%20quote%20for%20your%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 hover:border-[#25D366]/50 transition-all text-center"
                >
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  <span className="font-semibold text-white text-sm">WhatsApp</span>
                  <span className="text-gray-400 text-xs">Quick reply</span>
                </a>
                <a href={`mailto:${BUSINESS.email}`}
                  className="flex flex-col items-center gap-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 hover:border-[#c9a84c]/50 transition-all text-center">
                  <Mail className="w-7 h-7 text-[#c9a84c]" />
                  <span className="font-semibold text-white text-sm">Email</span>
                  <span className="text-gray-400 text-xs truncate w-full">{BUSINESS.email}</span>
                </a>
              </div>

              {/* Address */}
              <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#c9a84c] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-white mb-1">Workshop Address</h3>
                    <address className="not-italic text-gray-400 text-sm leading-relaxed">
                      {BUSINESS.name}<br />
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.locality}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.postcode}<br />
                      United Kingdom
                    </address>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-[#c9a84c] text-sm font-semibold hover:underline"
                    >
                      <MapPin className="w-3 h-3" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#c9a84c]" />
                  <h3 className="font-heading font-bold text-white">Available 24/7</h3>
                </div>
                <ul className="space-y-2">
                  {BUSINESS.hoursDisplay.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-400">{h.day}</span>
                      <span className="text-[#c9a84c] font-medium">
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time note */}
              <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl p-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-[#c9a84c] font-semibold">Response time:</span> We aim to respond to all enquiries within 1 business day. For urgent bookings, please call or WhatsApp directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-2xl p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-white mb-6">Get a Free Quote</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <MapEmbed height={400} />
        </div>
      </section>
    </>
  );
}
