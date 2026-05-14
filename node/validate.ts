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

// ^ início da string
// [^@]+ 1 ou mais caracteres que não são @
// @ um @
// [^@]+ 1 ou mais caracteres que não são @
// $ fim da string
function email(x: string) {
  return /^[^@]+@[^@]+$/.test(x) ? x.toLocaleLowerCase() : undefined;
}

// 146.104.560-60
function cpf(x: string) {
  // 14610456060
  const cpf = x.replace(/\D+/g, "");

  // testa 11111111111, 22222222222 e +
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return undefined;

  let total1 = 0;
  for (let i = 0; i < 9; i++) {
    // 1 * 10 + 4 * 9 + 6 * 8 ...
    total1 += Number(cpf[i]) * (10 - i);
  }
  // 1590 % 11 = 6 % 10 = 6
  const digito1 = ((total1 * 10) % 11) % 10;
  // 6 !== 6
  if (digito1 !== Number(cpf[9])) return undefined;

  let total2 = 0;
  for (let i = 0; i < 10; i++) {
    // 1 * 11 + 4 * 10 + 6 * 9 ...
    total2 += Number(cpf[i]) * (11 - i);
  }
  // 1980 % 11 = 0 % 10 = 0
  const digito2 = ((total2 * 10) % 11) % 10;
  // 0 !== 0
  if (digito2 !== Number(cpf[10])) return undefined;

  return cpf;
}


function removeZwh(x: string): string {
  return x.replace(/[\u200B-\u200D\uFEFF]/g, "");
}
