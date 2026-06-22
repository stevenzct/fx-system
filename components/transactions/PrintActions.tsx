"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function PrintActions({ transactionId }: Readonly<{ transactionId: string }>) {
  return (
    <div className="no-print mb-5 flex flex-wrap justify-between gap-2.5">
      <Button asChild variant="secondary">
        <Link href={`/transactions/${transactionId}`}>Back</Link>
      </Button>
      <Button type="button" onClick={() => window.print()}>
        Print
      </Button>
    </div>
  );
}
