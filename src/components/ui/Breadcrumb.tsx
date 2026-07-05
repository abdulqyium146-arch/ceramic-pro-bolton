import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <SchemaBreadcrumb items={allItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3 h-3 text-gray-600" aria-hidden="true" />}
              {i === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
              {i === allItems.length - 1 ? (
                <span className="text-[#c9a84c] font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
