import { BUSINESS } from "./business";

const isPlaceholder = (s: string) => s.startsWith("[PLACEHOLDER");

export function buildLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${BUSINESS.url}/#localbusiness`,
    name: BUSINESS.name,
    alternateName: BUSINESS.tradingAs,
    description: BUSINESS.description,
    slogan: "Bolton's Car Ceramic Coating Specialists",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    image: [
      `${BUSINESS.url}/images/lamborghini-aventador-ceramic-coating-bolton.webp`,
      `${BUSINESS.url}/images/bmw-m5-ceramic-coating-bolton-workshop.webp`,
      `${BUSINESS.url}/images/ceramic-pro-north-west-workshop-farnworth-bolton.webp`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/favicon.svg`,
      width: 512,
      height: 512,
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
    knowsAbout: [
      "car ceramic coating",
      "Ceramic Pro 9H",
      "KAVACA paint protection film",
      "PPF installation",
      "paint correction",
      "swirl mark removal",
      "professional car detailing",
      "car valet",
      "leather interior protection",
      "hydrophobic ceramic coating",
      "paint decontamination",
      "machine polishing",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.google.value,
      reviewCount: BUSINESS.rating.google.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: [
      ...BUSINESS.serviceArea.map((area) => ({
        "@type": "City",
        name: area.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Greater Manchester",
        },
      })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        geoRadius: "25000",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Ceramic Coating & Detailing Services",
      itemListElement: BUSINESS.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDesc,
          url: `${BUSINESS.url}/services/${service.slug}`,
        },
      })),
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.googleBusiness,
    ].filter((s) => !isPlaceholder(s)),
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };

  if (!isPlaceholder(BUSINESS.email)) {
    schema.email = BUSINESS.email;
  }

  return schema;
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    alternateName: "Latin King Detailing Bolton",
    description: BUSINESS.description,
    inLanguage: "en-GB",
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#localbusiness`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${BUSINESS.url}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#localbusiness`,
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.serviceArea
      .filter((a) => a.primary)
      .map((area) => ({ "@type": "City", name: area.name })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BUSINESS.url}/contact`,
      servicePhone: BUSINESS.phone,
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildReviewSchema(reviews: {
  author: string;
  rating: number;
  text: string;
  date: string;
}[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
  }));
}
