import { buildFAQSchema } from "@/lib/schema";

interface Props {
  faqs: { question: string; answer: string }[];
}

export default function SchemaFAQ({ faqs }: Props) {
  const schema = buildFAQSchema(faqs);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
