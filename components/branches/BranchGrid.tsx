import type { Branch } from "@/types/fx";
import { formatCompactPhp } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProgressMeter } from "@/components/ui/ProgressMeter";

export function BranchGrid({ branches }: Readonly<{ branches: Branch[] }>) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Branch summary">
      {branches.map((branch) => (
        <Card key={branch.id} className="grid gap-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="m-0 text-lg font-extrabold">{branch.name}</h2>
              <p className="mt-1 text-sm text-muted">{branch.location}</p>
            </div>
            <Badge value={branch.status} />
          </div>
          <div>
            <div className="text-sm text-muted">Today's Volume</div>
            <strong>{formatCompactPhp(branch.todayVolume)}</strong>
          </div>
          <div>
            <div className="mb-2 text-sm text-muted">Cash Utilization</div>
            <ProgressMeter value={branch.utilization} />
          </div>
        </Card>
      ))}
    </section>
  );
}
