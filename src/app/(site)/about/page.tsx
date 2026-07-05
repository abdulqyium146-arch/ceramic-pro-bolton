import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Star, Award, Users, Phone, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import StatsBanner from "@/components/ui/StatsBanner";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us — Ceramic Pro North West Bolton | Car Detailing Specialists",
  description:
    "About Ceramic Pro North West — Bolton's certified ceramic coating and car detailing specialists. Our story, certifications, team, and commitment to quality.",
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
            About Ceramic Pro North West — Bolton&apos;s Detailing Specialists
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ceramic Pro North West (trading as Initial Detail – Car Care) is a professional ceramic coating and car detailing business based in Farnworth, Bolton. Founded by car enthusiasts who were frustrated by the lack of genuinely professional paint protection services in the Greater Manchester area, Ceramic Pro North West was established to bring certified Ceramic Pro installations and professional-grade detailing to Bolton and the surrounding region.
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
                Ceramic Pro North West began as a passion project by car enthusiasts who saw a gap in the Greater Manchester market: plenty of car washes, but very few genuinely certified, professional paint protection specialists. The business was founded in [PLACEHOLDER: year] with a single mission — to deliver the same standard of ceramic coating and detailing work that high-end supercar owners expect, to everyday car owners across Bolton and Manchester.
              </p>
              <p>
                After securing certification as an authorised Ceramic Pro installer, Ceramic Pro North West established its workshop in Farnworth, Bolton — a central location with excellent access from across Greater Manchester. Since opening, the business has built a loyal customer base with a {BUSINESS.rating.google.value}★ Google rating and {BUSINESS.rating.facebook.value}★ on Facebook, with many customers returning for multiple vehicles and annual maintenance services.
              </p>
              <p>
                Today, Ceramic Pro North West installs Ceramic Pro 9H coatings, KAVACA PPF, and offers a full range of professional detailing services — all from the same workshop, with the same commitment to quality that the business was founded on.
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
            What Makes Ceramic Pro North West Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Ceramic Pro Certified Installer", desc: "Every coating is applied to the Ceramic Pro brand's certified professional standards. Your vehicle's coating is registered against the VIN for warranty purposes — something non-certified applications cannot offer." },
              { icon: Shield, title: "Genuine Professional Products", desc: "We use only genuine Ceramic Pro 9H and KAVACA PPF products — the same products used on performance cars, supercars, and fleet vehicles worldwide. No consumer-grade alternatives, no diluted products." },
              { icon: Star, title: "Proven Track Record", desc: `${BUSINESS.rating.google.value}★ on Google from verified customers. ${BUSINESS.rating.facebook.value}★ on Facebook with ${BUSINESS.rating.facebook.count}+ followers. Our reputation is built on consistent, high-quality results — not marketing claims.` },
              { icon: Users, title: "Local Knowledge", desc: "Based in Farnworth, Bolton, we know Greater Manchester's roads, weather, and the specific challenges that North West conditions present to car paint. Our advice is practical and locally relevant." },
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
            Ceramic Pro North West is run by a small, dedicated team of professional detailers and ceramic coating specialists. [PLACEHOLDER: add team member names, bios, and photos before launch. Include: lead detailer/founder, PPF specialist if applicable, front-of-house/admin if applicable.]
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
              Every vehicle that enters the Ceramic Pro North West workshop is treated as if it were our own. We won&apos;t recommend a service you don&apos;t need, we won&apos;t cut corners on preparation, and we won&apos;t hand a car back to you until we are satisfied the result meets our standards.
            </p>
            <p>
              If you have any concerns with the work after collection, contact us — we stand behind every job we do. [PLACEHOLDER: confirm exact warranty/guarantee terms with client before launch.]
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all">
              Get in Touch
            </Link>
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
              <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Work With Bolton's Best"
        subtext="Ceramic Pro certified. Fully insured. Genuinely passionate about cars."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
