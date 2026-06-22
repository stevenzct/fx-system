"use client";

import { useMemo, useState } from "react";
import type { LedgerEntry, TransactionType } from "@/types/fx";
import { branches } from "@/data/mockData";
import { LedgerTable } from "@/components/ledger/LedgerTable";
import { SelectField, Field } from "@/components/ui/Field";

export function LedgerFilters({ entries }: Readonly<{ entries: LedgerEntry[] }>) {
  const [branch, setBranch] = useState("ALL");
  const [type, setType] = useState<"ALL" | TransactionType>("ALL");
  const [search, setSearch] = useState("");

  const filteredEntries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return entries.filter((entry) => {
      const branchMatch = branch === "ALL" || entry.branch === branch;
      const typeMatch = type === "ALL" || entry.type === type;
      const receiptMatch = entry.receiptNo.toLowerCase().includes(query);

      return branchMatch && typeMatch && receiptMatch;
    });
  }, [branch, entries, search, type]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2.5">
        <div className="min-w-[190px]">
          <SelectField label="Branch" id="filterBranch" value={branch} onChange={(event) => setBranch(event.target.value)}>
            <option value="ALL">All Branches</option>
            {branches.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="min-w-[190px]">
          <SelectField label="Type" id="filterType" value={type} onChange={(event) => setType(event.target.value as "ALL" | TransactionType)}>
            <option value="ALL">All Types</option>
            <option value="BUY">Buying FX</option>
            <option value="SELL">Selling FX</option>
          </SelectField>
        </div>
        <div className="min-w-[220px]">
          <Field label="Search" id="searchReceipt" placeholder="Search receipt no." value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
      </div>
      <LedgerTable entries={filteredEntries} />
    </div>
  );
}
