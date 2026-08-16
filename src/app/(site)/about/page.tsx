import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, Award, Users, Phone, CheckCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_HREF } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import StatsBanner from "@/components/ui/StatsBanner";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Latin King Detailing — Bolton Car Ceramic Coating Specialists",
  description:
    "About Latin King Detailing — Bolton & Greater Manchester's car ceramic coating and detailing specialists. Our story, Ceramic Pro certifications, team & commitment to quality.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "About", href: "/about" }]} />
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">Our Story</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            About Latin King Detailing — Bolton&apos;s Detailing Specialists
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Latin King Detailing is a professional ceramic coating and car detailing business based in Farnworth, Bolton. We were set up by car enthusiasts who were frustrated by what passed for paint protection in Greater Manchester — drive-through washes, consumer spray coatings marketed as professional, and a general lack of honest advice. We're here to do it properly: certified Ceramic Pro installations, KAVACA PPF, real paint correction, and detailing that actually improves your car instead of just cleaning it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <StatsBanner
            stats={[
              { value: `${BUSINESS.rating.google.value}★`, label: "Google Rating" },
              { value: `${BUSINESS.rating.facebook.value}★`, label: "Facebook Rating" },
              { value: `${BUSINESS.rating.google.count}+`, label: "Verified Reviews" },
              { value: `${BUSINESS.rating.facebook.count}+`, label: "Facebook Followers" },
            ]}
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-5">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Latin King Detailing started the way most proper businesses do — out of a problem we couldn&apos;t find a decent solution to. There were plenty of car washes in Bolton. There were people advertising ceramic coating online. But finding someone genuinely certified, working from a proper workshop, using the actual professional-grade products? That was harder than it should have been.
              </p>
              <p>
                We set up our Farnworth workshop to fix that. After securing certification as an authorised Ceramic Pro installer — which means every coating is applied to the brand&apos;s professional standards and registered against your VIN for warranty purposes — we&apos;ve built a {BUSINESS.rating.google.value}★ Google rating from verified customers. Not by being the cheapest, but by doing the job right.
              </p>
              <p>
                Today, Latin King Detailing covers the full range: Ceramic Pro 9H coatings, KAVACA PPF installation, multi-stage paint correction, and professional detailing and valeting — all from the same Farnworth workshop, on all vehicle types, with the same standard on every job.
              </p>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <Users className="w-16 h-16 mx-auto mb-3 text-gray-700" />
              <p className="text-sm">[PLACEHOLDER: Team / workshop photo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
            What Makes Latin King Detailing Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Ceramic Pro Certified Installer", desc: "We're an authorised Ceramic Pro installer — not self-certified. Every coating is applied to the brand's professional standards and your VIN is registered for warranty purposes. That warranty is meaningless without certification, which is why it matters." },
              { icon: Shield, title: "Genuine Professional Products", desc: "We use only genuine Ceramic Pro 9H and KAVACA PPF — the same products on performance and supercar fleets worldwide. Not watered-down, not consumer-grade products repackaged with a professional price tag." },
              { icon: Star, title: "Proven Track Record", desc: `${BUSINESS.rating.google.value}★ on Google from verified customers. ${BUSINESS.rating.facebook.value}★ on Facebook. Those ratings aren't from a single good week — they're from consistent results across every job, every vehicle, every month.` },
              { icon: Users, title: "Local Knowledge, Honest Advice", desc: "Based in Farnworth, Bolton, we know Greater Manchester's roads, its road salt season, and what North West weather does to car paint over winter. We'll tell you what your car actually needs — not the most expensive option." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Latin King Detailing is a small, specialist team — not a production-line car wash with rotating staff. Every vehicle is handled by an experienced detailer who cares about the result. [PLACEHOLDER: add team member names, bios, and photos before launch.]
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Lead Detailer", "PPF Specialist"].map((role) => (
              <div key={role} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#242424] flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white">[PLACEHOLDER: Name]</p>
                  <p className="text-[#c9a84c] text-sm">{role}</p>
                  <p className="text-gray-500 text-xs mt-1">[PLACEHOLDER: short bio]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">
            Certifications &amp; Affiliations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Ceramic Pro Certified", detail: "Authorised Ceramic Pro installer. Applications registered and warranted." },
              { title: "Fully Insured", detail: "[PLACEHOLDER: confirm insurance details — public liability, treatment risk, etc.]" },
              { title: "KAVACA PPF Approved", detail: "Authorised KAVACA paint protection film installer." },
            ].map((cert) => (
              <div key={cert.title} className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5 text-center">
                <CheckCircle className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
                <h3 className="font-heading font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-5">
            <p className="text-gray-400 text-sm">
              [PLACEHOLDER: add any additional certifications, awards, press coverage, or memberships before launch — e.g. trade association memberships, featured in local press, etc.]
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-5">Our Commitment to You</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Every vehicle that comes into the Latin King Detailing workshop is treated as if it were our own. We won&apos;t recommend a service you don&apos;t need, we won&apos;t rush the preparation, and we won&apos;t hand a car back until the result is right. Preparation is what separates a coating that lasts from one that fails — and we don&apos;t skip it.
            </p>
            <p>
              We&apos;re honest about what we can and can&apos;t achieve. If your paint has damage that we can&apos;t fully correct, we&apos;ll tell you that before we start — not after. If you have any concern after collection, contact us. We stand behind every job we do.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get in Touch
            </Link>
            <a href={WHATSAPP_HREF}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Us
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="text-gray-400 hover:text-[#c9a84c] text-sm font-medium transition-colors self-center">
              <Phone className="w-4 h-4 inline mr-1" />{BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Work With Bolton's Best"
        subtext="Ceramic Pro certified. Fully insured. Genuinely passionate about cars."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "WhatsApp Us", href: WHATSAPP_HREF, isWhatsApp: true }}
        variant="dark"
      />
    </>
  );
}
