import type { Branch } from "@/types/fx";

export function BranchVolumeChart({ branches }: Readonly<{ branches: Branch[] }>) {
  return (
    <div className="flex h-60 items-end gap-3 border-b border-line px-1 pb-1 pt-4">
      {branches.map((branch) => (
        <div
          key={branch.id}
          className="relative min-w-6 flex-1 rounded-t-xl bg-gradient-to-b from-emerald-400 to-primary"
          style={{ height: `${branch.utilization}%` }}
        >
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap text-xs text-muted">
            {branch.name.replace(" Branch", "")}
          </span>
        </div>
      ))}
    </div>
  );
}
