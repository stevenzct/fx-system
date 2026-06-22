import Link from "next/link";
import type { Transaction } from "@/types/fx";
import { formatMoney, formatPhp, formatRate } from "@/lib/format";
import { transactionTypeLabel } from "@/lib/transaction";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Receipt } from "@/components/ui/Receipt";

export function TransactionDetail({ transaction }: Readonly<{ transaction: Transaction }>) {
  const details = [
    ["Receipt No.", transaction.receiptNo],
    ["Date/Time", transaction.date],
    ["Branch", transaction.branch],
    ["Customer", transaction.customer],
    ["Transaction Type", transactionTypeLabel(transaction.type)],
    ["Currency", transaction.currency],
    ["FCY Amount", formatMoney(transaction.fcyAmount)],
    ["Applied Rate", formatRate(transaction.rate)],
    ["Service Fee", formatPhp(transaction.serviceFee)],
    ["PHP Equivalent", formatPhp(transaction.phpEquivalent)],
    ["Net Amount", formatPhp(transaction.netAmount)],
    ["Processed By", transaction.cashier],
  ];

  return (
    <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardHeader
          title="Posted Transaction"
          description="Static mock transaction details for the current prototype."
          action={<Badge value={transaction.status} />}
        />
        <dl className="grid gap-3 sm:grid-cols-2">
          {details.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-line bg-slate-50 p-4">
              <dt className="text-xs font-extrabold text-muted">{label}</dt>
              <dd className="m-0 mt-1 font-bold text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <Button asChild>
            <Link href={`/print/transaction/${transaction.id}`}>Print Receipt</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/transactions">Back to Transactions</Link>
          </Button>
        </div>
      </Card>

      <Receipt transaction={transaction} />
    </div>
  );
}
