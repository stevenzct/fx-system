import type { FxRate } from "@/types/fx";
import { formatRate } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";

export function RatesTable({ rates }: Readonly<{ rates: FxRate[] }>) {
  return (
    <DataTable headers={["Currency", "Buying Rate", "Selling Rate", "Branch Scope", "Effective Date", "Approved By", "Status"]}>
      {rates.map((rate) => (
        <tr key={`${rate.currency}-${rate.branchScope}`}>
          <td className="px-3 py-3 font-bold text-slate-700">{rate.currency}</td>
          <td className="px-3 py-3 text-slate-700">{formatRate(rate.buyingRate)}</td>
          <td className="px-3 py-3 text-slate-700">{formatRate(rate.sellingRate)}</td>
          <td className="px-3 py-3 text-slate-700">{rate.branchScope}</td>
          <td className="px-3 py-3 text-slate-700">{rate.effectiveDate}</td>
          <td className="px-3 py-3 text-slate-700">{rate.approvedBy}</td>
          <td className="px-3 py-3">
            <Badge value={rate.status} />
          </td>
        </tr>
      ))}
    </DataTable>
  );
}
