export const BUSINESS = {
  name: "Ceramic Pro North West",
  tradingAs: "Initial Detail – Car Care",
  legalName: "Initial Detail – Car Care",
  description:
    "Ceramic Pro North West (trading as Initial Detail – Car Care) is Bolton's specialist in ceramic coatings, paint protection film (PPF/KAVACA), and professional car detailing. Serving Bolton, Farnworth, Manchester and surrounding Greater Manchester towns.",
  url: "https://www.ceramicpronorthwest.co.uk",
  phone: "+447375759686",
  phoneDisplay: "07375 759686",
  whatsapp: "447375759686",
  email: "[PLACEHOLDER: info@ceramicpronorthwest.co.uk]",
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
    facebook: "[PLACEHOLDER: https://facebook.com/ceramicpronorthwest]",
    instagram: "[PLACEHOLDER: https://instagram.com/ceramicpronorthwest]",
    googleBusiness: "[PLACEHOLDER: https://g.page/ceramicpronorthwest]",
  },
  rating: {
    google: { value: 4.7, count: 15 },
    facebook: { value: 5.0, count: 760 },
  },
  hours: {
    monday: "09:00–17:30",
    tuesday: "09:00–17:30",
    wednesday: "09:00–17:30",
    thursday: "09:00–17:30",
    friday: "09:00–17:30",
    saturday: "09:00–14:00",
    sunday: "Closed",
  },
  hoursDisplay: [
    { day: "Monday", hours: "9:00am – 5:30pm" },
    { day: "Tuesday", hours: "9:00am – 5:30pm" },
    { day: "Wednesday", hours: "9:00am – 5:30pm" },
    { day: "Thursday", hours: "9:00am – 5:30pm" },
    { day: "Friday", hours: "9:00am – 5:30pm" },
    { day: "Saturday", hours: "9:00am – 2:00pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  serviceArea: [
    { name: "Bolton", slug: "bolton", primary: true },
    { name: "Farnworth", slug: "farnworth", primary: true },
    { name: "Manchester", slug: "manchester", primary: false },
    { name: "Bury", slug: "bury", primary: false },
    { name: "Salford", slug: "salford", primary: false },
    { name: "Wigan", slug: "wigan", primary: false },
    { name: "Chorley", slug: "chorley", primary: false },
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
