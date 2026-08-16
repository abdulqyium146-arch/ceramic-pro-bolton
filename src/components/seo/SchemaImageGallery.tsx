import { BUSINESS } from "@/lib/business";
import type { GalleryImage } from "@/lib/gallery";

export default function SchemaImageGallery({ images }: { images: GalleryImage[] }) {
  const graph = images.map((img) => ({
    "@type": "ImageObject",
    "@id": `${BUSINESS.url}${img.src}`,
    url: `${BUSINESS.url}${img.src}`,
    name: img.title,
    description: img.alt,
    caption: img.caption,
    width: img.width,
    height: img.height,
    contentLocation: {
      "@type": "Place",
      name: "Latin King Detailing",
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
    },
    creator: {
      "@type": "LocalBusiness",
      "@id": BUSINESS.url,
      name: BUSINESS.name,
    },
    copyrightHolder: {
      "@type": "LocalBusiness",
      "@id": BUSINESS.url,
      name: BUSINESS.name,
    },
    inLanguage: "en-GB",
    acquireLicensePage: BUSINESS.url,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
