function string(x: unknown): string | undefined {
  if (typeof x !== "string" || x.trim().length === 0) return undefined;
  return x;
}

function number(x: unknown): number | undefined {
  if (typeof x === "number") return Number.isFinite(x) ? x : undefined;
  return undefined;
}

