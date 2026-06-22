import type { ReactNode } from "react";

export function DataTable({ headers, children }: Readonly<{ headers: string[]; children: ReactNode }>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="border-b border-line bg-slate-50 px-3 py-3 font-bold text-muted">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">{children}</tbody>
      </table>
    </div>
  );
}
