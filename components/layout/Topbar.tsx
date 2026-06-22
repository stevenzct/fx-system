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
        <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2.5 text-sm font-semibold text-muted shadow-[0_6px_18px_rgba(15,23,42,0.04)]">
          <CalendarIcon />
          {reportDate}
        </span>
        <Button type="button" variant="secondary" onClick={() => window.print()}>
          <PrintIcon />
          Print
        </Button>
        <Button asChild>
          <Link href="/ledger/new" className="inline-flex items-center gap-2">
            <PlusIcon />
            New Transaction
          </Link>
        </Button>
      </div>
    </header>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <rect x="4" y="5" width="16" height="16" rx="2.5" />
      <path d="M4 10h16" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-2 size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 8V3h10v5" />
      <path d="M7 17H5a2 2 0 0 1-2-2v-3a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
      <path d="M17 12h.01" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}
