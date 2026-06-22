import type { FxRate } from "@/types/fx";
import { formatRate } from "@/lib/format";

export function LiveRates({ rates }: Readonly<{ rates: FxRate[] }>) {
  return (
    <div className="grid gap-3">
      {rates.slice(0, 3).map((rate) => (
        <article key={rate.currency} className="flex items-center justify-between rounded-2xl border border-line bg-[#fbfdff] p-4">
          <div>
            <div className="text-lg font-black">{rate.currency}/PHP</div>
            <p className="mt-1 text-sm text-muted">{rate.name}</p>
          </div>
          <div className="text-right text-sm text-muted">
            Buy <strong className="text-ink">{formatRate(rate.buyingRate)}</strong>
            <br />
            Sell <strong className="text-ink">{formatRate(rate.sellingRate)}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
