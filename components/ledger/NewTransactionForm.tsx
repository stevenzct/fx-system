"use client";

import { useMemo, useState } from "react";
import { branches } from "@/data/mockData";
import { calculateTransaction } from "@/lib/transaction";
import type { CurrencyCode, TransactionType } from "@/types/fx";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Field, SelectField } from "@/components/ui/Field";
import { TransactionSummary } from "@/components/ledger/TransactionSummary";

const currencies: CurrencyCode[] = ["USD", "CNY", "HKD", "EUR", "JPY"];

export function NewTransactionForm() {
  const [branch, setBranch] = useState(branches[0].name);
  const [type, setType] = useState<TransactionType>("BUY");
  const [customer, setCustomer] = useState("Juan Dela Cruz");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(56.45);
  const [fee, setFee] = useState(0);
  const [cashier, setCashier] = useState("Cashier 01");

  const totals = useMemo(() => calculateTransaction({ type, amount, rate, fee }), [amount, fee, rate, type]);

  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <Card>
        <CardHeader title="Create FX Transaction" description="Buy or sell foreign currency and auto-compute the equivalent amount." />
        <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField label="Branch" id="branch" value={branch} onChange={(event) => setBranch(event.target.value)}>
              {branches.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </SelectField>
            <SelectField label="Transaction Type" id="type" value={type} onChange={(event) => setType(event.target.value as TransactionType)}>
              <option value="BUY">Buying FX</option>
              <option value="SELL">Selling FX</option>
            </SelectField>
            <Field label="Customer Name" id="customer" value={customer} onChange={(event) => setCustomer(event.target.value)} />
            <SelectField label="Currency" id="currency" value={currency} onChange={(event) => setCurrency(event.target.value as CurrencyCode)}>
              {currencies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </SelectField>
            <Field label="Foreign Currency Amount" id="amount" type="number" min="0" value={amount} onChange={(event) => setAmount(Number(event.target.value || 0))} />
            <Field label="Applied Rate" id="rate" type="number" min="0" step="0.0001" value={rate} onChange={(event) => setRate(Number(event.target.value || 0))} />
            <Field label="Service Fee" id="fee" type="number" min="0" value={fee} onChange={(event) => setFee(Number(event.target.value || 0))} />
            <Field label="Processed By" id="cashier" value={cashier} onChange={(event) => setCashier(event.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Button type="submit">Post to Ledger</Button>
            <Button type="button" variant="secondary">
              Recalculate
            </Button>
          </div>
          <p className="text-sm text-muted">
            Mock mode only: posting is intentionally local UI behavior until backend integration is added.
          </p>
          <input type="hidden" name="branch" value={branch} />
          <input type="hidden" name="cashier" value={cashier} />
        </form>
      </Card>

      <TransactionSummary type={type} currency={currency} amount={amount} rate={rate} {...totals} />
    </div>
  );
}
