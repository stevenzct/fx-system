export type TransactionType = "BUY" | "SELL";

export type TransactionStatus = "Completed" | "Pending";

export type RateStatus = "Active" | "Pending";

export type BranchStatus = "Active" | "Inactive";

export type CurrencyCode = "USD" | "CNY" | "HKD" | "EUR" | "JPY";

export type Branch = {
  id: string;
  name: string;
  location: string;
  status: BranchStatus;
  todayVolume: number;
  utilization: number;
};

export type LedgerEntry = {
  id: string;
  date: string;
  receiptNo: string;
  branch: string;
  customer: string;
  type: TransactionType;
  currency: CurrencyCode;
  fcyAmount: number;
  rate: number;
  phpEquivalent: number;
  serviceFee: number;
  netAmount: number;
  status: TransactionStatus;
  cashier: string;
};

export type Transaction = LedgerEntry;

export type FxRate = {
  currency: CurrencyCode;
  name: string;
  buyingRate: number;
  sellingRate: number;
  branchScope: string;
  effectiveDate: string;
  approvedBy: string;
  status: RateStatus;
};

export type DashboardMetric = {
  label: string;
  value: string;
  subtext: string;
};
