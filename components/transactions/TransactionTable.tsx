import Link from "next/link";
import type { Transaction } from "@/types/fx";
import { formatMoney, formatPhp } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/ui/DataTable";

export function TransactionTable({ transactions }: Readonly<{ transactions: Transaction[] }>) {
  return (
    <DataTable headers={["Receipt", "Date", "Branch", "Customer", "Type", "Currency", "FCY Amount", "PHP Equivalent", "Action"]}>
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td className="px-3 py-3 font-bold text-slate-700">{transaction.receiptNo}</td>
          <td className="px-3 py-3 text-slate-700">{transaction.date}</td>
          <td className="px-3 py-3 text-slate-700">{transaction.branch}</td>
          <td className="px-3 py-3 text-slate-700">{transaction.customer}</td>
          <td className="px-3 py-3">
            <Badge value={transaction.type} />
          </td>
          <td className="px-3 py-3 text-slate-700">{transaction.currency}</td>
          <td className="px-3 py-3 text-slate-700">{formatMoney(transaction.fcyAmount)}</td>
          <td className="px-3 py-3 text-slate-700">{formatPhp(transaction.phpEquivalent)}</td>
          <td className="px-3 py-3">
            <Link className="font-bold text-primary hover:text-primary-dark" href={`/transactions/${transaction.id}`}>
              View
            </Link>
          </td>
        </tr>
      ))}
    </DataTable>
  );
}
