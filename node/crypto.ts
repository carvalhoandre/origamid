import {
  type BinaryLike,
  type ScryptOptions,
  scrypt,
  randomBytes,
  createHmac,
} from "node:crypto";
import { promisify } from "node:util";

const randomBytesAsync = promisify(randomBytes);
const scryptAsync: (
  password: BinaryLike,
  salt: BinaryLike,
  keylen: number,
  options?: ScryptOptions,
) => Promise<Buffer> = promisify(scrypt);

const salt = await randomBytesAsync(16);

const SCRYPT_OPTIONS: ScryptOptions = {
  N: 2 ** 14,
  r: 8,
  p: 1,
};

const PEPPER = "segredo_super_secreto";

const password_hmac = createHmac("sha256", PEPPER).update("12345678").digest();

const dk = await scryptAsync(password_hmac, salt, 32, SCRYPT_OPTIONS);
const passwordHash = `${salt.toString("hex")}$${dk.toString("hex")}`;

console.log(passwordHash);
