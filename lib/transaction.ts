import type { TransactionType } from "@/types/fx";

export function calculateTransaction(values: {
  type: TransactionType;
  amount: number;
  rate: number;
  fee: number;
}) {
  const phpEquivalent = values.amount * values.rate;
  const netAmount = values.type === "BUY" ? phpEquivalent - values.fee : phpEquivalent + values.fee;

  return {
    phpEquivalent,
    netAmount,
  };
}

export function transactionTypeLabel(type: TransactionType) {
  return type === "BUY" ? "Buying FX" : "Selling FX";
}
