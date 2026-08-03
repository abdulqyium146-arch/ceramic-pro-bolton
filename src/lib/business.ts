export const BUSINESS = {
  name: "Ceramic Pro North West",
  tradingAs: "Initial Detail – Car Care",
  legalName: "Initial Detail – Car Care",
  description:
    "Ceramic Pro North West (trading as Initial Detail – Car Care) is Bolton's specialist in ceramic coatings, paint protection film (PPF/KAVACA), and professional car detailing. Serving Bolton, Farnworth, Manchester and surrounding Greater Manchester towns.",
  url: "https://ceramicpromanchester.com",
  phone: "+447482225323",
  phoneDisplay: "07482 225323",
  whatsapp: "447482225323",
  email: "[PLACEHOLDER: info@ceramicpromanchester.com]",
  address: {
    street: "115 Albert Road",
    locality: "Farnworth",
    city: "Bolton",
    region: "Greater Manchester",
    postcode: "BL4 9EA",
    country: "GB",
    countryName: "United Kingdom",
    full: "115 Albert Road, Farnworth, Bolton, BL4 9EA",
  },
  geo: {
    lat: 53.5511,
    lng: -2.3976,
  },
  social: {
    facebook: "[PLACEHOLDER: https://facebook.com/ceramicpromanchester]",
    instagram: "[PLACEHOLDER: https://instagram.com/ceramicpromanchester]",
    googleBusiness: "[PLACEHOLDER: https://g.page/ceramicpromanchester]",
  },
  rating: {
    google: { value: 4.7, count: 15 },
    facebook: { value: 5.0, count: 760 },
  },
  hours: {
    monday: "00:00–24:00",
    tuesday: "00:00–24:00",
    wednesday: "00:00–24:00",
    thursday: "00:00–24:00",
    friday: "00:00–24:00",
    saturday: "00:00–24:00",
    sunday: "00:00–24:00",
  },
  hoursDisplay: [
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
  ],
  serviceArea: [
    { name: "Bolton", slug: "bolton", primary: true },
    { name: "Farnworth", slug: "farnworth", primary: true },
    { name: "Manchester", slug: "manchester", primary: false },
    { name: "Bury", slug: "bury", primary: false },
    { name: "Salford", slug: "salford", primary: false },
    { name: "Wigan", slug: "wigan", primary: false },
    { name: "Chorley", slug: "chorley", primary: false },
    { name: "Altrincham", slug: "altrincham", primary: false },
  ],
  services: [
    {
      name: "Ceramic Coating",
      slug: "ceramic-coating",
      shortDesc: "Professional-grade Ceramic Pro 9H coatings for lasting protection and showroom shine.",
    },
    {
      name: "Paint Protection Film",
      slug: "paint-protection-film",
      shortDesc: "KAVACA PPF — the ultimate self-healing barrier against stone chips and road damage.",
    },
    {
      name: "Car Detailing & Valet",
      slug: "car-detailing-valet",
      shortDesc: "Full interior and exterior detailing packages to restore and maintain your vehicle.",
    },
    {
      name: "Leather & Interior Protection",
      slug: "leather-interior-protection",
      shortDesc: "Specialist leather coating and interior protection keeping cabins fresh and conditioned.",
    },
  ],
  certifications: ["[PLACEHOLDER: Ceramic Pro Certified Installer]"],
  yearsTrading: "[PLACEHOLDER: confirm year established]",
  carsCoated: "[PLACEHOLDER: number of vehicles coated]",
  warrantyYears: "[PLACEHOLDER: confirm warranty period]",
  insurance: "[PLACEHOLDER: fully insured — confirm details]",
} as const;

export type ServiceArea = (typeof BUSINESS.serviceArea)[number];
export type Service = (typeof BUSINESS.services)[number];

export const WHATSAPP_HREF = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'd like a free quote. Can you help?")}`;
