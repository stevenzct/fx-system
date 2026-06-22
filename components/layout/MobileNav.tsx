"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/components/layout/navigation";

function isActive(pathname: string, href: string) {
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
      <div className="flex items-center justify-between gap-3">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 shrink-0 place-items-center rounded-[13px] bg-gradient-to-br from-emerald-400 to-primary font-black tracking-[-1px]">
            FX
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-sm">FX Control</strong>
            <small className="block truncate text-xs text-slate-400">Ledger & Branch System</small>
          </span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
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
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-white/[0.06] p-2">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-[13px] px-3.5 py-3 text-sm font-semibold transition ${
                    active ? "bg-white/[0.12] text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`size-2 rounded-full ${active ? "bg-emerald-400" : "bg-slate-500"}`} />
                    {item.label}
                  </span>
                  <span aria-hidden="true" className="text-slate-500">
                    /
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
