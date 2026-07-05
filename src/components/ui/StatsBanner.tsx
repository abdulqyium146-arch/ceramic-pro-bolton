import { BUSINESS } from "@/lib/business";

interface Stat {
  value: string;
  label: string;
}

const DEFAULT_STATS: Stat[] = [
  { value: `${BUSINESS.rating.google.value}★`, label: "Google Rating" },
  { value: `${BUSINESS.rating.google.count}+`, label: "Verified Reviews" },
  { value: BUSINESS.carsCoated as string, label: "Cars Protected" },
  { value: "Fully Insured", label: "Peace of Mind" },
];

interface Props {
  stats?: Stat[];
  className?: string;
}

export default function StatsBanner({ stats = DEFAULT_STATS, className }: Props) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#3a3a3a] rounded-xl overflow-hidden ${className ?? ""}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#1a1a1a] px-5 py-5 text-center">
          <div className="text-2xl sm:text-3xl font-heading font-bold text-[#c9a84c] leading-none mb-1">
            {stat.value}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
