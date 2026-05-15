import { RouteError } from "./router-error.ts";

type Parse<T> = (x: unknown) => T | undefined;

/** trim e nao aceita string vazia */
function string(x: unknown): string | undefined {
  if (typeof x !== "string") return undefined;
  const s = removeZwh(x.trim());

  if (s.length === 0) return undefined;

  return s;
}

/** se a string representa um número finito */
function number(x: unknown): number | undefined {
  if (typeof x === "number") return Number.isFinite(x) ? x : undefined;

  if (typeof x === "string" && x.trim().length > 0) {
    const n = Number(x);

    return Number.isFinite(n) ? n : undefined;
  }

  return undefined;
}

/** aceita valores como true, "true", 1, "1", "on" para verdadeiro e false, "false", 0, "0", "off" para falso */
function boolean(x: unknown): boolean | undefined {
  if (x === true || x === "true" || x === 1 || x === "1" || x === "on")
    return true;
  if (x === false || x === "false" || x === 0 || x === "0" || x === "off")
    return false;
  return undefined;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function email(x: unknown) {
  const s = string(x)?.toLowerCase();
  if (s === undefined) return undefined;
  return emailRegex.test(s) ? s : undefined;
}

const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

/** minimo 10 caracteres, máximo 256 caracteres pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial */
function password(x: unknown) {
  if (typeof x !== 'string') return undefined;
  if (x.length < 10 || x.length > 256) return undefined;
  
  return password_regex.test(x) ? x : undefined;
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

/** aceita objetos {}, mas não null */
function object<T>(x: unknown): Record<string, unknown> | undefined {
  return typeof x === "object" && x !== null && !Array.isArray(x)
    ? (x as Record<string, unknown>)
    : undefined;
}

function required<T>(fn: Parse<T>, error: string): (x: unknown) => T {
  return (x: unknown) => {
    const value = fn?.(x);

    if (value === undefined) {
      throw new RouteError(422, error);
    }

    return value;
  };
}

export const validate = {
  string: required(string, "String esperada"),
  number: required(number, "Número esperado"),
  boolean: required(boolean, "Booleano esperado"),
  email: required(email, "Email inválido"),
  password: required(password, "Senha inválida"),
  object: required(object, "Objeto inválido"),
  optional: {
    string,
    number,
    boolean,
    email,
    password,
    cpf,
    object,
  },
};
