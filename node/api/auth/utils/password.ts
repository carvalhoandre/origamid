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

export class Password {
  NORM = "NFC";
  SCRYPT_OPTIONS: ScryptOptions = {
    N: 2 ** 14,
    r: 8,
    p: 1,
  };
  pepper: string;
  dk_len = 32;
  salt_len = 16;

  constructor(pepper: string) {
    this.pepper = pepper;
  }

  async hash(password: string): Promise<string> {
    const password_normalized = password.normalize(this.NORM);
    const password_hmac = createHmac("sha256", this.pepper)
      .update(password_normalized)
      .digest();

    const salt = await randomBytesAsync(this.salt_len);

    const dk = await scryptAsync(password_hmac, salt, this.dk_len, this.SCRYPT_OPTIONS);
    return (
      `scrypt$v=1$norm=${this.NORM}$N=${this.SCRYPT_OPTIONS.N},r=${this.SCRYPT_OPTIONS.r},p=${this.SCRYPT_OPTIONS.p}` +
      `$${salt.toString("hex")}$${dk.toString("hex")}`
    );
  }

  parse(passwordHash: string) {
    const [id, v, norm, options, stored_salt_hex, stored_dk_hex] =
      passwordHash.split("$");

    const stored_dk = Buffer.from(stored_dk_hex, "hex");
    const stored_salt = Buffer.from(stored_salt_hex, "hex");
    const stored_norm = norm.replace("norm=", "");
    const stored_options = options.split(",").reduce(
      (acc, option) => {
        const [key, value] = option.split("=");
        acc[key] = Number(value);
        return acc;
      },
      {} as Record<string, number>,
    );

    return { stored_norm, stored_salt, stored_dk, stored_options };
  }

  async verify(password: string, passwordHash: string) {
    const { stored_norm, stored_salt, stored_dk, stored_options } =
      this.parse(passwordHash);

    const password_normalized = password.normalize(stored_norm);
    const password_hmac = createHmac("sha256", this.pepper)
      .update(password_normalized)
      .digest();

    const dk = await scryptAsync(
      password_hmac,
      stored_salt,
      this.dk_len,
      stored_options,
    );

    if (dk.length !== stored_dk.length) return false;

    return timingSafeEqual(dk, stored_dk);
  }
}

const password = new Password("my_pepper");
const password_hash = await password.hash("12345678"  );

const isTrue = await password.verify("12345678", password_hash);
const isFalse = await password.verify("wrong_password", password_hash);

console.log({ isTrue, isFalse });