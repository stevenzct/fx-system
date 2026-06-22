import type { LedgerEntry } from "@/types/fx";
import { formatMoney, formatPhp, formatRate } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";

const compactHeaders = ["Receipt", "Branch", "Type", "Currency", "FCY Amount", "Rate", "PHP Equivalent", "Status"];
const fullHeaders = ["Date", "Receipt", "Branch", "Customer", "Type", "Currency", "FCY Amount", "Rate", "PHP Equivalent", "Status"];

export function LedgerTable({ entries, compact = false }: Readonly<{ entries: LedgerEntry[]; compact?: boolean }>) {
  return (
    <DataTable headers={compact ? compactHeaders : fullHeaders}>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {!compact ? <td className="px-3 py-3 text-slate-700">{entry.date}</td> : null}
          <td className="px-3 py-3 text-slate-700">{entry.receiptNo}</td>
          <td className="px-3 py-3 text-slate-700">{entry.branch}</td>
          {!compact ? <td className="px-3 py-3 text-slate-700">{entry.customer}</td> : null}
          <td className="px-3 py-3">
            <Badge value={entry.type} />
          </td>
          <td className="px-3 py-3 text-slate-700">{entry.currency}</td>
          <td className="px-3 py-3 text-slate-700">{formatMoney(entry.fcyAmount)}</td>
          <td className="px-3 py-3 text-slate-700">{formatRate(entry.rate)}</td>
          <td className="px-3 py-3 text-slate-700">{formatPhp(entry.phpEquivalent)}</td>
          <td className="px-3 py-3">
            <Badge value={entry.status} />
          </td>
        </tr>
      ))}
    </DataTable>
  );
}
