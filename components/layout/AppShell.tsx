import { MobileNav } from "@/components/layout/MobileNav";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Topbar } from "@/components/layout/Topbar";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-canvas text-ink lg:grid-cols-[280px_1fr]">
      <MobileNav />
      <SidebarNav />
      <main className="overflow-hidden px-4 py-5 sm:px-7 sm:py-7">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
