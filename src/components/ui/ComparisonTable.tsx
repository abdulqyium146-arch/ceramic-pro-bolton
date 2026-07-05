import { Check, X, Minus } from "lucide-react";

type CellValue = true | false | "partial" | string;

interface Row {
  feature: string;
  [key: string]: CellValue;
}

interface Props {
  columns: string[];
  rows: Row[];
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-5 h-5 text-[#c9a84c] mx-auto" aria-label="Yes" />;
  if (value === false) return <X className="w-5 h-5 text-red-500 mx-auto" aria-label="No" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-yellow-500 mx-auto" aria-label="Partial" />;
  return <span className="text-gray-300 text-sm text-center block">{value}</span>;
}

export default function ComparisonTable({ columns, rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#3a3a3a]">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="bg-[#1a1a1a] border-b border-[#3a3a3a]">
            <th className="px-4 py-3 text-left text-sm font-heading font-bold text-gray-400">
              Feature
            </th>
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 text-center text-sm font-heading font-bold text-[#c9a84c]">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#3a3a3a] last:border-0 bg-[#1a1a1a] even:bg-[#181818] hover:bg-[#242424] transition-colors"
            >
              <td className="px-4 py-3 text-sm text-white font-medium">{row.feature}</td>
              {columns.map((col) => (
                <td key={col} className="px-4 py-3">
                  <Cell value={row[col] as CellValue} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
