import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  author: string;
  rating: number;
  text: string;
  date: string;
  source?: "google" | "facebook";
  className?: string;
}

export default function ReviewCard({ author, rating, text, date, source = "google", className }: Props) {
  return (
    <div className={cn("bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("w-4 h-4", i < rating ? "fill-[#c9a84c] text-[#c9a84c]" : "text-gray-600")}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 capitalize">{source}</span>
      </div>
      <blockquote className="text-gray-300 text-sm leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="flex items-center justify-between pt-2 border-t border-[#3a3a3a]">
        <cite className="not-italic text-white font-semibold text-sm">{author}</cite>
        <time className="text-gray-500 text-xs">{date}</time>
      </div>
    </div>
  );
}
