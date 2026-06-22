"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { reportDate } from "@/data/mockData";
import { pageMeta } from "@/components/layout/navigation";
import { Button } from "@/components/ui/Button";

export function Topbar() {
  const pathname = usePathname();
  const meta = pathname.startsWith("/transactions/") ? pageMeta["/transactions/detail"] : pageMeta[pathname] ?? pageMeta["/dashboard"];

  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="m-0 text-[28px] font-extrabold tracking-[-0.04em]">{meta.title}</h1>
        <p className="mt-1.5 text-muted">{meta.subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full border border-line bg-white px-3.5 py-2.5 text-sm text-muted shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
          {reportDate}
        </span>
        <Button type="button" variant="secondary" onClick={() => window.print()}>
          Print
        </Button>
        <Button asChild>
          <Link href="/ledger/new">New Transaction</Link>
        </Button>
      </div>
    </header>
  );
}
