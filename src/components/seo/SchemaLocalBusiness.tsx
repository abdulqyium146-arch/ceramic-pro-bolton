import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";

export default function SchemaLocalBusiness() {
  const graph = [buildLocalBusinessSchema(), buildWebSiteSchema()];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
