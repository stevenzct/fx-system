import { BranchVolumeChart } from "@/components/dashboard/BranchVolumeChart";
import { LiveRates } from "@/components/dashboard/LiveRates";
import { LedgerTable } from "@/components/ledger/LedgerTable";
import { Card, CardHeader } from "@/components/ui/Card";
import { MetricCard } from "@/components/ui/MetricCard";
import { branches, dashboardMetrics, ledgerEntries, rates } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <section aria-label="Dashboard metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader title="Transaction Volume by Branch" description="Sample daily volume across active branches." />
          <BranchVolumeChart branches={branches} />
        </Card>

        <Card>
          <CardHeader title="Live FX Rates" description="Approved branch-wide rates." />
          <LiveRates rates={rates} />
        </Card>
      </section>

      <Card>
        <CardHeader title="Recent Ledger Entries" description="Latest posted FX records." />
        <LedgerTable entries={ledgerEntries.slice(0, 5)} compact />
      </Card>
    </div>
  );
}
