import { Card } from "@/components/ui/Card";

export function MetricCard({
  label,
  value,
  subtext,
}: Readonly<{
  label: string;
  value: string;
  subtext: string;
}>) {
  return (
    <Card className="p-5">
      <div className="text-sm text-muted">{label}</div>
      <div className="mt-2 text-2xl font-black tracking-[-0.04em]">{value}</div>
      <div className="mt-2 text-xs font-bold text-primary">{subtext}</div>
    </Card>
  );
}
