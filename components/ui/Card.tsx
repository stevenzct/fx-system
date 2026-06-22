import type { ReactNode } from "react";

export function Card({ children, className = "" }: Readonly<{ children: ReactNode; className?: string }>) {
  return <section className={`rounded-panel border border-line bg-white p-5 shadow-panel ${className}`}>{children}</section>;
}

export function CardHeader({
  title,
  description,
  action,
}: Readonly<{ title: string; description?: string; action?: ReactNode }>) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="m-0 text-lg font-extrabold tracking-[-0.02em]">{title}</h2>
        {description ? <p className="mt-1.5 text-sm text-muted">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
