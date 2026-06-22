import type { Branch, DashboardMetric, FxRate, LedgerEntry } from "@/types/fx";

export const reportDate = "June 8, 2026";

export const branches: Branch[] = [
  { id: "bgc", name: "BGC Branch", location: "Main branch", status: "Active", todayVolume: 1420000, utilization: 76 },
  { id: "makati", name: "Makati Branch", location: "Metro Manila", status: "Active", todayVolume: 1060000, utilization: 58 },
  { id: "cebu", name: "Cebu Branch", location: "Visayas", status: "Active", todayVolume: 760000, utilization: 46 },
  { id: "ortigas", name: "Ortigas Branch", location: "Metro Manila", status: "Active", todayVolume: 980000, utilization: 64 },
  { id: "davao", name: "Davao Branch", location: "Mindanao", status: "Active", todayVolume: 420000, utilization: 34 },
  { id: "qc", name: "QC Branch", location: "Metro Manila", status: "Active", todayVolume: 610000, utilization: 51 },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Today's Volume", value: "PHP 4.86M", subtext: "+18.2% vs yesterday" },
  { label: "FX Transactions", value: "128", subtext: "74 Buy / 54 Sell" },
  { label: "Branch Count", value: "6", subtext: "All active" },
  { label: "Open Variance", value: "PHP 0.00", subtext: "Balanced" },
];

export const rates: FxRate[] = [
  { currency: "USD", name: "US Dollar", buyingRate: 56.1, sellingRate: 56.45, branchScope: "All Branches", effectiveDate: "Jun 8, 2026", approvedBy: "FX Manager", status: "Active" },
  { currency: "CNY", name: "Chinese Yuan", buyingRate: 7.72, sellingRate: 7.89, branchScope: "All Branches", effectiveDate: "Jun 8, 2026", approvedBy: "FX Manager", status: "Active" },
  { currency: "HKD", name: "Hong Kong Dollar", buyingRate: 7.14, sellingRate: 7.28, branchScope: "BGC Branch", effectiveDate: "Jun 8, 2026", approvedBy: "Compliance", status: "Active" },
  { currency: "EUR", name: "Euro", buyingRate: 61.2, sellingRate: 61.85, branchScope: "All Branches", effectiveDate: "Jun 8, 2026", approvedBy: "FX Manager", status: "Pending" },
  { currency: "JPY", name: "Japanese Yen", buyingRate: 0.358, sellingRate: 0.371, branchScope: "All Branches", effectiveDate: "Jun 8, 2026", approvedBy: "FX Manager", status: "Active" },
];

export const ledgerEntries: LedgerEntry[] = [
  { id: "fxr-000001", date: "Jun 8, 2026 10:30", receiptNo: "FXR-000001", branch: "BGC Branch", customer: "Juan Dela Cruz", type: "SELL", currency: "USD", fcyAmount: 1000, rate: 56.45, phpEquivalent: 56450, serviceFee: 0, netAmount: 56450, status: "Completed", cashier: "Cashier 01" },
  { id: "fxr-000002", date: "Jun 8, 2026 10:18", receiptNo: "FXR-000002", branch: "Makati Branch", customer: "Maria Santos", type: "BUY", currency: "USD", fcyAmount: 2500, rate: 56.1, phpEquivalent: 140250, serviceFee: 0, netAmount: 140250, status: "Completed", cashier: "Cashier 02" },
  { id: "fxr-000003", date: "Jun 8, 2026 09:54", receiptNo: "FXR-000003", branch: "Cebu Branch", customer: "ABC Trading", type: "SELL", currency: "CNY", fcyAmount: 8000, rate: 7.89, phpEquivalent: 63120, serviceFee: 0, netAmount: 63120, status: "Completed", cashier: "Cashier 03" },
  { id: "fxr-000004", date: "Jun 8, 2026 09:22", receiptNo: "FXR-000004", branch: "Ortigas Branch", customer: "Lee Wei", type: "BUY", currency: "HKD", fcyAmount: 12000, rate: 7.14, phpEquivalent: 85680, serviceFee: 0, netAmount: 85680, status: "Completed", cashier: "Cashier 01" },
  { id: "fxr-000005", date: "Jun 8, 2026 08:45", receiptNo: "FXR-000005", branch: "QC Branch", customer: "Global Mart", type: "SELL", currency: "JPY", fcyAmount: 200000, rate: 0.371, phpEquivalent: 74200, serviceFee: 0, netAmount: 74200, status: "Completed", cashier: "Cashier 04" },
];
