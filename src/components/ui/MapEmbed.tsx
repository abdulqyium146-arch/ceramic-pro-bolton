import { BUSINESS } from "@/lib/business";

interface Props {
  className?: string;
  height?: number;
}

export default function MapEmbed({ className, height = 400 }: Props) {
  const query = encodeURIComponent(`${BUSINESS.address.full}, United Kingdom`);
  const src = `https://maps.google.com/maps?q=${query}&output=embed&z=15`;

  return (
    <div className={`overflow-hidden rounded-xl border border-[#3a3a3a] ${className ?? ""}`}>
      <iframe
        title={`Map showing ${BUSINESS.name} location at ${BUSINESS.address.full}`}
        src={src}
        width="100%"
        height={height}
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
