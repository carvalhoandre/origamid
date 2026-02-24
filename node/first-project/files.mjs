import fs from 'node:fs/promises';

try {
  fs.mkdir('./products');
} catch {
  console.log('Folder already exists');
}

fs.writeFile('./products/nootebook.json', JSON.stringify({ name: 'Azus 297' }));

const dir = await fs.readdir('./products', { recursive: true });
const data = await fs.readFile('./products/nootebook.json', 'utf-8');

console.log(data);
console.log(dir.filter((file) => file.endsWith('.json')));
