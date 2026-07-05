import { buildBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/business";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function SchemaBreadcrumb({ items }: Props) {
  const schema = buildBreadcrumbSchema(
    items.map((item) => ({
      name: item.name,
      url: `${BUSINESS.url}${item.href}`,
    }))
  );
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
