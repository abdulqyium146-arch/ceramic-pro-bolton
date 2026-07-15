import { buildServiceSchema } from "@/lib/schema";

interface Props {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}

export default function SchemaService(props: Props) {
  const schema = buildServiceSchema(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
