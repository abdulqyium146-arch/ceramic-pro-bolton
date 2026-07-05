import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTA {
  label: string;
  href: string;
  isPhone?: boolean;
}

interface Props {
  headline: string;
  subtext?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  variant?: "gold" | "dark";
  className?: string;
}

export default function CTABanner({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  variant = "dark",
  className,
}: Props) {
  const isGold = variant === "gold";

  return (
    <section
      className={cn(
        "py-16 px-4",
        isGold ? "bg-[#c9a84c]" : "bg-[#1a1a1a] border-y border-[#3a3a3a]",
        className
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={cn(
            "font-heading text-3xl sm:text-4xl font-bold mb-4",
            isGold ? "text-[#0f0f0f]" : "text-white"
          )}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            className={cn(
              "text-lg mb-8 max-w-2xl mx-auto",
              isGold ? "text-[#3a2a00]" : "text-gray-400"
            )}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCTA.isPhone ? (
            <a
              href={primaryCTA.href}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all",
                isGold
                  ? "bg-[#0f0f0f] text-[#c9a84c] hover:bg-[#1a1a1a]"
                  : "bg-[#c9a84c] text-[#0f0f0f] hover:bg-[#e8c96c]"
              )}
            >
              <Phone className="w-5 h-5" />
              {primaryCTA.label}
            </a>
          ) : (
            <Link
              href={primaryCTA.href}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all",
                isGold
                  ? "bg-[#0f0f0f] text-[#c9a84c] hover:bg-[#1a1a1a]"
                  : "bg-[#c9a84c] text-[#0f0f0f] hover:bg-[#e8c96c]"
              )}
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
          {secondaryCTA && (
            secondaryCTA.isPhone ? (
              <a
                href={secondaryCTA.href}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all",
                  isGold
                    ? "border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f]/10"
                    : "border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10"
                )}
              >
                <Phone className="w-5 h-5" />
                {secondaryCTA.label}
              </a>
            ) : (
              <Link
                href={secondaryCTA.href}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all",
                  isGold
                    ? "border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f]/10"
                    : "border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10"
                )}
              >
                {secondaryCTA.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
