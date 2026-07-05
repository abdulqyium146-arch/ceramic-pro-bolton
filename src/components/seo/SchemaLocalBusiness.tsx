import { buildLocalBusinessSchema } from "@/lib/schema";

export default function SchemaLocalBusiness() {
  const schema = buildLocalBusinessSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
