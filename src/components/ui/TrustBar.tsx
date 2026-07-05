import { ShieldCheck, Star, Award, Wrench } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Star, label: "4.7★ Google Rated" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Ceramic Pro Certified" },
  { icon: Wrench, label: "Professional Grade Products" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#c9a84c] py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[#0f0f0f]" aria-hidden="true" />
              <span className="text-[#0f0f0f] text-sm font-semibold">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
