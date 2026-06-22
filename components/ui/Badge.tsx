import type { BranchStatus, RateStatus, TransactionStatus, TransactionType } from "@/types/fx";
import { transactionTypeLabel } from "@/lib/transaction";

type BadgeKind = TransactionType | TransactionStatus | RateStatus | BranchStatus;

export function Badge({ value }: Readonly<{ value: BadgeKind }>) {
  const styles: Record<BadgeKind, string> = {
    BUY: "bg-primary-soft text-primary",
    SELL: "bg-blue-50 text-blue-600",
    Completed: "bg-emerald-50 text-emerald-600",
    Active: "bg-emerald-50 text-emerald-600",
    Inactive: "bg-slate-100 text-slate-600",
    Pending: "bg-orange-50 text-orange-600",
  };
  const label = value === "BUY" || value === "SELL" ? transactionTypeLabel(value) : value;

  return <span className={`inline-flex rounded-full px-2.5 py-1.5 text-xs font-extrabold ${styles[value]}`}>{label}</span>;
}
