import type { CurrencyCode, TransactionType } from "@/types/fx";
import { formatMoney, formatPhp, formatRate } from "@/lib/format";
import { transactionTypeLabel } from "@/lib/transaction";

export function TransactionSummary({
  type,
  currency,
  amount,
  rate,
  phpEquivalent,
  netAmount,
}: Readonly<{
  type: TransactionType;
  currency: CurrencyCode;
  amount: number;
  rate: number;
  phpEquivalent: number;
  netAmount: number;
}>) {
  const rows = [
    ["Transaction Type", transactionTypeLabel(type)],
    ["Currency", currency],
    ["FCY Amount", formatMoney(amount)],
    ["Applied Rate", formatRate(rate)],
    ["PHP Equivalent", formatPhp(phpEquivalent)],
    ["Net Amount", formatPhp(netAmount)],
  ];

  return (
    <aside className="rounded-panel border border-[#ccebdd] bg-gradient-to-br from-primary-soft to-white p-5">
      <h2 className="m-0 text-lg font-extrabold tracking-[-0.02em]">Transaction Summary</h2>
      <p className="mt-1.5 text-sm text-muted">Equivalent amount updates based on amount, rate, type, and fee.</p>
      <dl className="mt-4">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-dashed border-slate-300 py-2.5 last:border-b-0">
            <dt className="text-sm text-slate-700">{label}</dt>
            <dd className="m-0 text-right text-base font-black">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
