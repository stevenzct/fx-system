"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavIcon } from "@/components/layout/NavIcon";
import { navItems } from "@/components/layout/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/receipts") {
    return pathname === href || pathname.startsWith("/transactions/") || pathname.startsWith("/print/transaction/");
  }

  if (href === "/ledger") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900 px-4 py-3 text-white shadow-[0_10px_30px_rgba(15,23,42,0.16)] lg:hidden">
      <div className="grid grid-cols-[44px_1fr_44px] items-center gap-3">
        <button
          type="button"
          aria-label={open ? "Close sidebar navigation" : "Open sidebar navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 shrink-0 place-items-center rounded-[13px] border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
        >
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        <MobileBrand compact onNavigate={() => setOpen(false)} />

        <Link
          href="/profile"
          aria-label="Open profile account"
          className="grid size-11 place-items-center rounded-[13px] border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
        >
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary-soft to-emerald-400 text-primary-dark">
            <ProfileIcon />
          </span>
        </Link>
      </div>

      <div
        className={`fixed inset-0 z-50 transition lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close sidebar navigation"
          className={`absolute inset-0 bg-slate-950/55 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <aside
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute left-0 top-0 flex h-full w-[min(82vw,320px)] flex-col bg-slate-900 px-4 py-5 text-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <MobileBrand onNavigate={() => setOpen(false)} />
            <button
              type="button"
              aria-label="Close sidebar navigation"
              onClick={() => setOpen(false)}
              className="grid size-10 shrink-0 place-items-center rounded-[13px] border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
            >
              <span aria-hidden="true" className="relative block size-5">
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-white" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile primary navigation" className="mt-6 grid gap-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-[14px] px-3.5 py-3 text-sm font-semibold transition ${
                    active ? "bg-white/[0.12] text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-[12px] transition ${
                      active ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <NavIcon name={item.icon} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <section className="mt-auto rounded-panel border border-white/10 bg-white/[0.08] p-4">
            <strong className="text-sm">System Scope</strong>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Buying, selling, rate computation, branch inventory, receipts, and ledger records.
            </p>
          </section>
        </aside>
      </div>
    </header>
  );
}

function ProfileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

function MobileBrand({ onNavigate, compact = false }: Readonly<{ onNavigate: () => void; compact?: boolean }>) {
  return (
    <Link href="/dashboard" className={`flex min-w-0 items-center ${compact ? "justify-center gap-2" : "gap-3"}`} onClick={onNavigate}>
      <span className="grid size-10 shrink-0 place-items-center rounded-[13px] bg-gradient-to-br from-emerald-400 to-primary font-black tracking-[-1px]">
        FX
      </span>
      <span className={`min-w-0 ${compact ? "text-center" : ""}`}>
        <strong className="block truncate text-sm leading-4">FX Control</strong>
        <small className="block truncate text-xs leading-4 text-slate-400">{compact ? "Ledger System" : "Ledger & Branch System"}</small>
      </span>
    </Link>
  );
}
