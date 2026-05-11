import {
  type BinaryLike,
  type ScryptOptions,
  scrypt,
  randomBytes,
  createHmac,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";

const randomBytesAsync = promisify(randomBytes);
const scryptAsync: (
  password: BinaryLike,
  salt: BinaryLike,
  keylen: number,
  options?: ScryptOptions,
) => Promise<Buffer> = promisify(scrypt);

const SCRYPT_OPTIONS: ScryptOptions = {
  N: 2 ** 14,
  r: 8,
  p: 1,
};
const NORM = "NFC";
const PEPPER = "segredo_super_secreto";

async function hashPassword(password: string): Promise<string> {
  const password_normalized = password.normalize(NORM);
  const password_hmac = createHmac("sha256", PEPPER)
    .update(password_normalized)
    .digest();

  const salt = await randomBytesAsync(16);
  
  const dk = await scryptAsync(password_hmac, salt, 32, SCRYPT_OPTIONS);
  return `scrypt$v=1$norm=${NORM}$N=${SCRYPT_OPTIONS.N},r=${SCRYPT_OPTIONS.r},p=${SCRYPT_OPTIONS.p}` +  
  `$${salt.toString("hex")}$${dk.toString("hex")}`;
}

function parsePasswordHash(passwordHash: string) {
  const [id, v, norm, options, stored_salt_hex, stored_dk_hex] = passwordHash.split("$");

  const stored_dk = Buffer.from(stored_dk_hex, "hex");
  const stored_salt = Buffer.from(stored_salt_hex, "hex");
  const stored_norm = norm.replace("norm=", "");
  const stored_options = options.split(",").reduce((acc, option) => {
    const [key, value] = option.split("=");
    acc[key] = Number(value);
    return acc;
  }, {} as Record<string, number>);

  return { stored_norm, stored_salt, stored_dk, stored_options };
}

async function verifyPassword(password: string, passwordHash: string) {
  const { stored_norm, stored_salt, stored_dk, stored_options } = parsePasswordHash(passwordHash);

  const password_normalized = password.normalize(stored_norm);
  const password_hmac = createHmac("sha256", PEPPER)
    .update(password_normalized)
    .digest();

  const dk = await scryptAsync(password_hmac, stored_salt, 32, stored_options);

  if (dk.length !== stored_dk.length) return false;

  return timingSafeEqual(dk, stored_dk);
}

const password = "12345678";
const password_hash = await hashPassword(password);

const isTrue = await verifyPassword(password, password_hash);
const isFalse = await verifyPassword("wrong_password", password_hash);

console.log({ isTrue, isFalse });
