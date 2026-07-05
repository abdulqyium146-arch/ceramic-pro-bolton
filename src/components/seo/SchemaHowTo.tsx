import { buildHowToSchema } from "@/lib/schema";

interface Props {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}

export default function SchemaHowTo({ name, description, steps }: Props) {
  const schema = buildHowToSchema(name, description, steps);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
