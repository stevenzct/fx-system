"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getReportDate } from "@/data/mockData";
import { pageMeta } from "@/components/layout/navigation";
import { Button } from "@/components/ui/Button";

export function Topbar() {
  const pathname = usePathname();
  const meta = pathname.startsWith("/transactions/") ? pageMeta["/transactions/detail"] : pageMeta[pathname] ?? pageMeta["/dashboard"];
  const [reportDate, setReportDate] = useState(() => getReportDate());

  useEffect(() => {
    const updateReportDate = () => setReportDate(getReportDate());
    updateReportDate();

    const interval = window.setInterval(updateReportDate, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="m-0 text-[28px] font-extrabold tracking-[-0.04em]">{meta.title}</h1>
        <p className="mt-1.5 text-muted">{meta.subtitle}</p>
      </div>
      <div className="grid w-full grid-cols-2 items-center gap-2 sm:w-auto sm:flex sm:gap-2.5">
        <span className="col-span-2 inline-flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-[13px] border border-line bg-white px-2 py-2 text-xs font-semibold text-muted shadow-[0_6px_18px_rgba(15,23,42,0.04)] sm:col-span-1 sm:min-h-11 sm:justify-start sm:gap-2 sm:rounded-full sm:px-3.5 sm:py-2.5 sm:text-sm">
          <CalendarIcon />
          <span className="truncate">{reportDate}</span>
        </span>
        <Button
          type="button"
          variant="secondary"
          className="min-h-10 min-w-0 gap-1.5 px-2 py-2 text-xs sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm"
          onClick={() => window.print()}
        >
          <PrintIcon />
          <span className="truncate">Print</span>
        </Button>
        <Button asChild className="min-h-10 min-w-0 px-2 py-2 text-xs sm:min-h-11 sm:px-4 sm:py-2.5 sm:text-sm">
          <Link href="/ledger/new" className="inline-flex min-w-0 items-center gap-1.5 sm:gap-2">
            <PlusIcon />
            <span className="truncate">New Transaction</span>
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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
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
