import { notFound } from "next/navigation";
import { Receipt } from "@/components/ui/Receipt";
import { PrintActions } from "@/components/transactions/PrintActions";
import { ledgerEntries } from "@/data/mockData";

export function generateStaticParams() {
  return ledgerEntries.map((transaction) => ({ id: transaction.id }));
}

export default async function PrintTransactionPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const transaction = ledgerEntries.find((item) => item.id === id);

  if (!transaction) {
    notFound();
  }

  return (
    <main className="print-page min-h-screen bg-white px-4 py-8 text-ink">
      <div className="mx-auto max-w-[560px]">
        <PrintActions transactionId={transaction.id} />
        <Receipt transaction={transaction} className="shadow-panel" />
      </div>
    </main>
  );
}
