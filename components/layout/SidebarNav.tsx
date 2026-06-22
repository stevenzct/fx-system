"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen bg-slate-900 px-5 py-7 text-white lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-[14px] bg-gradient-to-br from-emerald-400 to-primary font-black tracking-[-1px]">
          FX
        </div>
        <div>
          <strong>FX Control</strong>
          <small className="mt-0.5 block text-slate-400">Ledger & Branch System</small>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-[14px] px-3.5 py-3 text-sm transition ${
                active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-[11px] transition ${
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

      <section className="mt-8 rounded-panel border border-white/10 bg-white/[0.08] p-4">
        <strong>System Scope</strong>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Buying, selling, equivalent rate computation, branch inventory, receipts, and ledger records in one clean workflow.
        </p>
      </section>
    </aside>
  );
}
