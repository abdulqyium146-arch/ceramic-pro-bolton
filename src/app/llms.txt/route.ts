import { BUSINESS } from "@/lib/business";

export async function GET() {
  const content = `# ${BUSINESS.name}

## About

${BUSINESS.name} (trading as ${BUSINESS.tradingAs}) is a professional ceramic coating and car detailing business based in Farnworth, Bolton, Greater Manchester, United Kingdom.

The business is an authorised Ceramic Pro certified installer, offering professional-grade Ceramic Pro 9H ceramic coatings, KAVACA Paint Protection Film (PPF), car detailing and valet services, and leather and interior protection.

## Location

Address: ${BUSINESS.address.full}, United Kingdom
Phone: ${BUSINESS.phoneDisplay}
Workshop postcode: ${BUSINESS.address.postcode}

## Services

- **Ceramic Coating (Ceramic Pro 9H)**: Professional ceramic coating bonding permanently with paint to provide 9H hardness, UV protection, hydrophobic effect, and chemical resistance. Lasts 2-5 years. Certified Ceramic Pro application.
- **Paint Protection Film (KAVACA PPF)**: Self-healing paint protection film providing physical barrier against stone chips, road debris, and scratches. Anti-yellowing, optically clear. 10-year warranty.
- **Car Detailing & Valet**: Professional interior and exterior detailing, paint correction, machine polishing, and valet packages from entry-level clean to full multi-day details.
- **Leather & Interior Protection**: Ceramic-grade leather coating, fabric protection, dashboard treatment, and interior detail services.

## Service Area

${BUSINESS.name} serves customers from the following areas in Greater Manchester:
${BUSINESS.serviceArea.map((a) => `- ${a.name}`).join("\n")}

## Trust Signals

- Google Rating: ${BUSINESS.rating.google.value}★ from ${BUSINESS.rating.google.count} reviews
- Facebook: ${BUSINESS.rating.facebook.value}★ rating, ${BUSINESS.rating.facebook.count}+ followers
- Ceramic Pro Certified Installer
- KAVACA PPF Authorised Installer
- Fully insured

## Opening Hours

${BUSINESS.hoursDisplay.map((h) => `- ${h.day}: ${h.hours}`).join("\n")}

## Key Pages

- Homepage: ${BUSINESS.url}/
- Ceramic Coating: ${BUSINESS.url}/services/ceramic-coating
- Paint Protection Film: ${BUSINESS.url}/services/paint-protection-film
- Car Detailing: ${BUSINESS.url}/services/car-detailing-valet
- Bolton Location: ${BUSINESS.url}/locations/bolton
- Manchester Location: ${BUSINESS.url}/locations/manchester
- FAQ: ${BUSINESS.url}/faq
- Contact / Book: ${BUSINESS.url}/contact
- Gallery: ${BUSINESS.url}/gallery
- Reviews: ${BUSINESS.url}/reviews

## Contact

Phone: ${BUSINESS.phoneDisplay}
WhatsApp: +${BUSINESS.whatsapp}
Address: ${BUSINESS.address.full}
Website: ${BUSINESS.url}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
