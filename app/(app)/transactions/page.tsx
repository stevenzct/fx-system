import { TransactionTable } from "@/components/transactions/TransactionTable";
import { Card, CardHeader } from "@/components/ui/Card";
import { Receipt } from "@/components/ui/Receipt";
import { ledgerEntries } from "@/data/mockData";

export default function TransactionsPage() {
  const selectedTransaction = ledgerEntries[0];

  return (
    <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader title="Transaction List" description="Issued receipts from completed FX transactions." />
        <TransactionTable transactions={ledgerEntries} />
      </Card>
      <Receipt transaction={selectedTransaction} />
    </div>
  );
}
