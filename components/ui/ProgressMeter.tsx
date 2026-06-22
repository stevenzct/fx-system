export function ProgressMeter({ value }: Readonly<{ value: number }>) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200" aria-label={`${value}% utilization`}>
      <span className="block h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
    </div>
  );
}
