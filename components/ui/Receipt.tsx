import type { Transaction } from "@/types/fx";
import { formatMoney, formatPhp, formatRate } from "@/lib/format";
import { transactionTypeLabel } from "@/lib/transaction";

export function Receipt({ transaction, className = "" }: Readonly<{ transaction: Transaction; className?: string }>) {
  return (
    <article className={`print-receipt self-start rounded-2xl border border-line bg-white p-4 font-mono text-slate-950 ${className}`}>
      <header className="mb-2.5 border-b border-dashed border-slate-400 pb-2.5 text-center">
        <h2 className="m-0 text-base font-black">FX TRANSACTION RECEIPT</h2>
        <div className="text-sm">{transaction.branch}</div>
        <small>{transaction.receiptNo}</small>
      </header>
      <ReceiptLine label="Date/Time" value={transaction.date} />
      <ReceiptLine label="Customer" value={transaction.customer} />
      <ReceiptLine label="Transaction Type" value={transactionTypeLabel(transaction.type).toUpperCase()} />
      <ReceiptLine label="Currency" value={transaction.currency} />
      <ReceiptLine label="FCY Amount" value={formatMoney(transaction.fcyAmount)} />
      <ReceiptLine label="Applied Rate" value={formatRate(transaction.rate)} />
      <ReceiptLine label="PHP Equivalent" value={formatPhp(transaction.phpEquivalent)} strong />
      <p className="mt-3 text-center text-[11px] text-slate-500">Posted to FX Ledger - System Generated Receipt</p>
    </article>
  );
}

function ReceiptLine({ label, value, strong }: Readonly<{ label: string; value: string; strong?: boolean }>) {
  return (
    <div className={`flex justify-between gap-4 py-1 text-xs ${strong ? "mt-1.5 border-t border-dashed border-slate-400 pt-2.5 font-black" : ""}`}>
      <span>{label}</span>
      <strong className="text-right">{value}</strong>
    </div>
  );
}
