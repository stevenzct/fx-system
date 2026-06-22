export const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ledger/new", label: "New FX Transaction" },
  { href: "/ledger", label: "FX Ledger" },
  { href: "/rates", label: "Rates Database" },
  { href: "/transactions", label: "Transactions" },
  { href: "/branches", label: "Branches" },
];

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
  "/transactions": {
    title: "Transactions",
    subtitle: "Review transaction records, receipt previews, and detailed posted activity.",
  },
  "/transactions/detail": {
    title: "Transaction Details",
    subtitle: "Detailed posted transaction record and receipt preview.",
  },
};
