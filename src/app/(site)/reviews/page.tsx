import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ReviewCard from "@/components/ui/ReviewCard";
import CTABanner from "@/components/sections/CTABanner";
import { buildReviewSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | Ceramic Pro North West Bolton | 4.7★ Rated",
  description:
    "Read genuine customer reviews for Ceramic Pro North West Bolton. 4.7★ Google rating, 5.0★ Facebook. Verified reviews from Greater Manchester car owners.",
  alternates: { canonical: "/reviews" },
};

const REVIEWS = [
  { author: "James T.", rating: 5, text: "Had my BMW 5 Series coated with Ceramic Pro 9H — the finish is incredible, water just rolls straight off. Brilliant service from start to finish and the team really knows their stuff. Already recommended to three friends.", date: "2025-03-12", source: "google" as const },
  { author: "Sarah M.", rating: 5, text: "Brought my Audi Q5 in for a full detail and KAVACA paint protection film on the front end. Absolutely delighted with the results. The car looks better than when it came out of the showroom. Outstanding work.", date: "2025-01-08", source: "google" as const },
  { author: "Dave R.", rating: 5, text: "Third time using Initial Detail for my cars — consistent quality every single time. The ceramic coating on my Range Rover has held up perfectly through two winters now. Solid value, great team.", date: "2024-11-22", source: "facebook" as const },
  { author: "Lisa K.", rating: 5, text: "Took my new Porsche for a new car detail and ceramic coating. Couldn't be happier. The team were professional, the finish is flawless, and they explained every step clearly. Will definitely be back.", date: "2025-02-14", source: "google" as const },
  { author: "Michael B.", rating: 4, text: "Great service for my VW Golf GTI — full interior and exterior detail with paint correction. Car looks incredible. Took slightly longer than expected but the result was worth the wait.", date: "2024-12-05", source: "google" as const },
  { author: "Emma W.", rating: 5, text: "Had the interior of my Tesla treated — leather protection, dashboard, carpets. Excellent attention to detail. They spotted a small stone chip on the bonnet and pointed it out without trying to upsell. Really honest business.", date: "2025-04-03", source: "facebook" as const },
];

const reviewSchema = buildReviewSchema(
  REVIEWS.map((r) => ({ author: r.author, rating: r.rating, text: r.text, date: r.date }))
);

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb items={[{ name: "Reviews", href: "/reviews" }]} />
      </div>

      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] font-semibold uppercase tracking-wider text-sm mb-3">What Our Customers Say</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-8">
            Customer Reviews — Ceramic Pro North West Bolton
          </h1>

          {/* Aggregate ratings */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl px-8 py-5 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-3xl font-bold text-white">{BUSINESS.rating.google.value}</p>
              <p className="text-gray-400 text-sm">Google Rating</p>
              <p className="text-gray-500 text-xs">{BUSINESS.rating.google.count} verified reviews</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl px-8 py-5 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-3xl font-bold text-white">{BUSINESS.rating.facebook.value}</p>
              <p className="text-gray-400 text-sm">Facebook Rating</p>
              <p className="text-gray-500 text-xs">{BUSINESS.rating.facebook.count}+ followers</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mb-2">
            [PLACEHOLDER: reviews above are paraphrased for structural demonstration — replace with real, permission-granted customer reviews before launch]
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.author} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 px-4 bg-[#0f0f0f] text-center">
        <h2 className="font-heading text-2xl font-bold text-white mb-4">Happy with Our Work?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Your review helps other Greater Manchester car owners find genuine, quality ceramic coating and detailing services. We&apos;d love to hear about your experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="[PLACEHOLDER: Google review link]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-[#0f0f0f] font-bold rounded-xl hover:bg-[#e8c96c] transition-all"
          >
            Leave a Google Review <ExternalLink className="w-4 h-4" />
          </a>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold rounded-xl hover:bg-[#c9a84c]/10 transition-all">
            Book Your Appointment
          </Link>
        </div>
      </section>

      <CTABanner
        headline="Join Our Satisfied Customers"
        subtext="Experience the Ceramic Pro North West difference — professional results, every time."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
