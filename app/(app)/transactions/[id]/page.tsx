import { notFound } from "next/navigation";
import { TransactionDetail } from "@/components/transactions/TransactionDetail";
import { ledgerEntries } from "@/data/mockData";

export function generateStaticParams() {
  return ledgerEntries.map((transaction) => ({ id: transaction.id }));
}

export default async function TransactionDetailPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const transaction = ledgerEntries.find((item) => item.id === id);

  if (!transaction) {
    notFound();
  }

  return <TransactionDetail transaction={transaction} />;
}
