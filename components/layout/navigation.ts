export type NavIconName = "dashboard" | "transaction" | "ledger" | "rates" | "branches" | "receipts";

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/ledger/new", label: "New FX Transaction", icon: "transaction" },
  { href: "/ledger", label: "FX Ledger", icon: "ledger" },
  { href: "/rates", label: "Rates Database", icon: "rates" },
  { href: "/branches", label: "Branches", icon: "branches" },
  { href: "/receipts", label: "Receipts", icon: "receipts" },
] satisfies Array<{ href: string; label: string; icon: NavIconName }>;

export const pageMeta: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Overview of FX buying, selling, branch balances, and today's transactions.",
  },
  "/ledger/new": {
    title: "New FX Transaction",
    subtitle: "Create buying or selling transactions with automatic equivalent rate computation.",
  },
  "/ledger": {
    title: "FX Ledger",
    subtitle: "Searchable ledger for all posted FX transactions across branches.",
  },
  "/rates": {
    title: "Rates Database",
    subtitle: "Centralized FX rate database for buying, selling, branches, and approval history.",
  },
  "/branches": {
    title: "Branches",
    subtitle: "Monitor branch-level volume, utilization, and currency activity.",
  },
  "/receipts": {
    title: "Receipts",
    subtitle: "Receipt generation and print preview for posted transactions.",
  },
  "/transactions": {
    title: "Transactions",
    subtitle: "Review transaction records, receipt previews, and detailed posted activity.",
  },
  "/transactions/detail": {
    title: "Transaction Details",
    subtitle: "Detailed posted transaction record and receipt preview.",
  },
  "/profile": {
    title: "Profile",
    subtitle: "Account profile, role, and session details for the FX Control system.",
  },
};
