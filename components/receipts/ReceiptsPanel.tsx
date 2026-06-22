"use client";

import { useMemo, useState } from "react";
import type { Transaction } from "@/types/fx";
import { formatPhp } from "@/lib/format";
import { Card, CardHeader } from "@/components/ui/Card";
import { Receipt } from "@/components/ui/Receipt";

export function ReceiptsPanel({ transactions }: Readonly<{ transactions: Transaction[] }>) {
  const [selectedId, setSelectedId] = useState(transactions[0]?.id ?? "");

  const selectedTransaction = useMemo(
    () => transactions.find((transaction) => transaction.id === selectedId) ?? transactions[0],
    [selectedId, transactions],
  );

  if (!selectedTransaction) {
    return null;
  }

  function selectReceipt(transactionId: string) {
    setSelectedId(transactionId);
  }

  return (
    <div className="grid gap-4 lg:gap-5 xl:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader title="Receipt List" description="Issued receipts from completed FX transactions." />
        <div className="grid gap-3 md:hidden">
          {transactions.slice(0, 8).map((transaction) => {
            const active = transaction.id === selectedTransaction.id;

            return (
              <button
                key={transaction.id}
                type="button"
                onClick={() => selectReceipt(transaction.id)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  active ? "border-primary bg-primary-soft/80 shadow-[0_10px_24px_rgba(22,122,90,0.12)]" : "border-line bg-white hover:border-primary/40"
                }`}
                aria-current={active ? "true" : undefined}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-black text-primary">{transaction.receiptNo}</span>
                    <span className="mt-1 block truncate text-sm font-semibold text-slate-800">{transaction.customer}</span>
                  </span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border ${
                      active ? "border-primary bg-white text-primary" : "border-line bg-slate-50 text-slate-500"
                    }`}
                  >
                    <EyeIcon />
                  </span>
                </span>
                <span className="mt-3 grid grid-cols-2 gap-3 text-xs">
                  <span>
                    <span className="block font-bold text-muted">Branch</span>
                    <span className="mt-0.5 block truncate text-slate-700">{transaction.branch}</span>
                  </span>
                  <span className="text-right">
                    <span className="block font-bold text-muted">Amount</span>
                    <span className="mt-0.5 block font-black text-slate-800">{formatPhp(transaction.phpEquivalent)}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="border-b border-line bg-slate-50 px-3 py-3 font-bold text-muted">
                  Receipt No.
                </th>
                <th scope="col" className="border-b border-line bg-slate-50 px-3 py-3 font-bold text-muted">
                  Branch
                </th>
                <th scope="col" className="border-b border-line bg-slate-50 px-3 py-3 font-bold text-muted">
                  Customer
                </th>
                <th scope="col" className="border-b border-line bg-slate-50 px-3 py-3 font-bold text-muted">
                  Amount
                </th>
                <th scope="col" className="border-b border-line bg-slate-50 px-3 py-3 text-right font-bold text-muted">
                  Preview
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {transactions.slice(0, 8).map((transaction) => {
                const active = transaction.id === selectedTransaction.id;

                return (
                  <tr
                    key={transaction.id}
                    onClick={() => selectReceipt(transaction.id)}
                    className={`cursor-pointer transition ${active ? "bg-primary-soft/80" : "hover:bg-slate-50"}`}
                    aria-selected={active}
                  >
                    <td className="px-3 py-3 font-bold text-primary">{transaction.receiptNo}</td>
                    <td className="px-3 py-3 text-slate-700">{transaction.branch}</td>
                    <td className="px-3 py-3 text-slate-700">{transaction.customer}</td>
                    <td className="px-3 py-3 font-bold text-slate-700">{formatPhp(transaction.phpEquivalent)}</td>
                    <td className="px-3 py-3 text-right">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          selectReceipt(transaction.id);
                        }}
                        className={`inline-grid size-9 place-items-center rounded-full border transition ${
                          active
                            ? "border-primary bg-white text-primary"
                            : "border-line bg-white text-slate-500 hover:border-primary hover:text-primary"
                        }`}
                        aria-label={`Preview receipt ${transaction.receiptNo}`}
                        aria-current={active ? "true" : undefined}
                      >
                        <EyeIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Receipt transaction={selectedTransaction} className="w-full shadow-panel" />
    </div>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6-9.75-6-9.75-6Z" />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  );
}
