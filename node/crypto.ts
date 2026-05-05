import { randomBytes } from 'node:crypto';
import { promisify } from 'node:util';

const randomBytesAsync = promisify(randomBytes);

const buffer = await randomBytesAsync(32);

const hexString = buffer.toString('hex');

console.log(hexString);