import { LedgerFilters } from "@/components/ledger/LedgerFilters";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { ledgerEntries } from "@/data/mockData";

export default function LedgerPage() {
  return (
    <Card>
      <CardHeader
        title="FX Ledger"
        description="Permanent record of all buying and selling transactions."
        action={
          <Button type="button" variant="secondary">
            Export CSV
          </Button>
        }
      />
      <LedgerFilters entries={ledgerEntries} />
    </Card>
  );
}
