import type { LedgerEntry } from "@/types/fx";
import { formatMoney, formatPhp, formatRate } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";

const compactHeaders = ["Receipt", "Branch", "Type", "Currency", "FCY Amount", "Rate", "PHP Equivalent", "Status"];
const fullHeaders = ["Date", "Receipt", "Branch", "Customer", "Type", "Currency", "FCY Amount", "Rate", "PHP Equivalent", "Status"];

export function LedgerTable({ entries, compact = false }: Readonly<{ entries: LedgerEntry[]; compact?: boolean }>) {
  return (
    <>
      <div className="grid gap-3 md:hidden">
        {entries.map((entry) => (
          <article key={entry.id} className="rounded-2xl border border-line bg-white p-4 shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-black text-primary">{entry.receiptNo}</h3>
                <p className="mt-1 truncate text-sm font-semibold text-slate-800">{entry.branch}</p>
                {!compact ? <p className="mt-1 truncate text-xs text-muted">{entry.customer}</p> : null}
              </div>
              <Badge value={entry.type} />
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
              {!compact ? (
                <div className="col-span-2">
                  <dt className="font-extrabold text-muted">Date</dt>
                  <dd className="m-0 mt-0.5 text-slate-700">{entry.date}</dd>
                </div>
              ) : null}
              <div>
                <dt className="font-extrabold text-muted">Currency</dt>
                <dd className="m-0 mt-0.5 font-bold text-slate-800">{entry.currency}</dd>
              </div>
              <div className="text-right">
                <dt className="font-extrabold text-muted">Rate</dt>
                <dd className="m-0 mt-0.5 font-bold text-slate-800">{formatRate(entry.rate)}</dd>
              </div>
              <div>
                <dt className="font-extrabold text-muted">FCY Amount</dt>
                <dd className="m-0 mt-0.5 font-bold text-slate-800">{formatMoney(entry.fcyAmount)}</dd>
              </div>
              <div className="text-right">
                <dt className="font-extrabold text-muted">PHP Equivalent</dt>
                <dd className="m-0 mt-0.5 font-black text-slate-900">{formatPhp(entry.phpEquivalent)}</dd>
              </div>
            </dl>

            <div className="mt-4 flex justify-end">
              <Badge value={entry.status} />
            </div>
          </article>
        ))}
      </div>

      <div className="hidden md:block">
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
      </div>
    </>
  );
}
