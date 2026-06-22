export function formatPhp(value: number) {
  return `PHP ${Number(value).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatMoney(value: number) {
  return Number(value).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatCompactPhp(value: number) {
  if (value >= 1_000_000) {
    return `PHP ${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 2)}M`;
  }

  if (value >= 1_000) {
    return `PHP ${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 0)}K`;
  }

  return formatPhp(value);
}

export function formatRate(value: number) {
  return value.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");
}
