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

const PEPPER = "segredo_super_secreto";

async function hashPassword(password: string): Promise<string> {
  const password_normalized = password.normalize("NFC");
  const password_hmac = createHmac("sha256", PEPPER)
    .update(password_normalized)
    .digest();

  const salt = await randomBytesAsync(16);

  const dk = await scryptAsync(password_hmac, salt, 32, SCRYPT_OPTIONS);
  return `${salt.toString("hex")}$${dk.toString("hex")}`;
}

function parsePasswordHash(passwordHash: string) {
  const [stored_salt_hex, stored_dk_hex] = passwordHash.split("$");

  const stored_dk = Buffer.from(stored_dk_hex, "hex");
  const stored_salt = Buffer.from(stored_salt_hex, "hex");

  return { stored_salt, stored_dk };
}

async function verifyPassword(password: string, passwordHash: string) {
  const { stored_salt, stored_dk } = parsePasswordHash(passwordHash);

  const password_normalized = password.normalize("NFC");
  const password_hmac = createHmac("sha256", PEPPER)
    .update(password_normalized)
    .digest();

  const dk = await scryptAsync(password_hmac, stored_salt, 32, SCRYPT_OPTIONS);

  if (dk.length !== stored_dk.length) return false;

  return timingSafeEqual(dk, stored_dk);
}

const password = "12345678";
const password_hash = await hashPassword(password);

const isTrue = await verifyPassword(password, password_hash);
const isFalse = await verifyPassword("wrong_password", password_hash);

console.log({ isTrue, isFalse });
