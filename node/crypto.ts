import { createHash, randomBytes } from 'node:crypto';
import { promisify } from 'node:util';

const randomBytesAsync = promisify(randomBytes);

const buffer = await randomBytesAsync(32);

const sid_hash = createHash('sha256').update(buffer).digest('base64url');

const hexString = buffer.toString('hex');

console.log(hexString);