import { ReceiptsPanel } from "@/components/receipts/ReceiptsPanel";
import { ledgerEntries } from "@/data/mockData";

export default function ReceiptsPage() {
  return <ReceiptsPanel transactions={ledgerEntries} />;
}
