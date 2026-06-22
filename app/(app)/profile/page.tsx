import { Card, CardHeader } from "@/components/ui/Card";

const profileItems = [
  ["Role", "Control Officer"],
  ["Branch", "BGC Branch"],
  ["Session", "Active"],
  ["Access", "Ledger, Receipts, Rates"],
];

export default function ProfilePage() {
  return (
    <Card className="max-w-3xl">
      <CardHeader title="Profile Account" description="Account profile placeholder for the FX Control system." />
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="grid size-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-primary-soft to-emerald-400 text-2xl font-black text-primary-dark">
          CO
        </div>
        <div>
          <h2 className="m-0 text-2xl font-black tracking-[-0.03em]">Control Officer</h2>
          <p className="mt-1 text-sm text-muted">FX Control Ledger & Branch System</p>
        </div>
      </div>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {profileItems.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-line bg-slate-50 p-4">
            <dt className="text-xs font-extrabold text-muted">{label}</dt>
            <dd className="m-0 mt-1 font-bold text-slate-800">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
