function string(x: unknown): string | undefined {
  if (typeof x !== "string" || x.trim().length === 0) return undefined;
  return x;
}

function number(x: unknown): number | undefined {
  if (typeof x === "number") return Number.isFinite(x) ? x : undefined;
  return undefined;
}

function boolean(x: unknown): boolean | undefined {
  if (x === true || x === "true" || x === 1 || x === "1" || x === "on")
    return true;
  if (x === false || x === "false" || x === 0 || x === "0" || x === "off")
    return false;
  return undefined;
}

function cpf(x: string): string | undefined {
  return x.replace(/\D+/g, "");
}

function email(x: string): string | undefined {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(x) ? x.toLocaleLowerCase() : undefined;
}
