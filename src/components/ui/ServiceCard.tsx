import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  slug: string;
  shortDesc: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function ServiceCard({ name, slug, shortDesc, icon, className }: Props) {
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group block bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-6 hover:border-[#c9a84c]/50 hover:bg-[#1f1f1f] transition-all duration-300",
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-4 text-[#c9a84c] group-hover:bg-[#c9a84c]/20 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">
        {name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{shortDesc}</p>
      <div className="flex items-center gap-1 text-[#c9a84c] text-sm font-medium">
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
