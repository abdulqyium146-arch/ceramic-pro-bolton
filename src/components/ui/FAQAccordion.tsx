"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  className?: string;
}

export default function FAQAccordion({ faqs, className }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-white/5 transition-colors"
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {/* Always render question text in DOM for SEO */}
            <h3 className="font-semibold text-white text-sm sm:text-base">
              {faq.question}
            </h3>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-[#c9a84c] shrink-0 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          {/* Answer always in DOM — only visually hidden when closed for AEO/crawler access */}
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === i ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
          {/* Hidden from screen but always in DOM for crawlers */}
          {open !== i && (
            <div className="sr-only" aria-hidden="true">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
