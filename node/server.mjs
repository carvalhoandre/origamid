import { createServer } from 'node:http';

const phrase1 = Promise.resolve('Hello');
const phrase2 = Promise.resolve('Hi');
const phrasesPromise = [phrase1, phrase2];
const phrases = [];

for await (const phrase of phrasesPromise) {
  phrases.push(phrase);
}

console.log(phrases.join(' - '));

const part1 = Buffer.from('hello');
const part2 = Buffer.from('world');
const final = Buffer.concat([part1, part2]);
console.log(final.toString('utf-8'));

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  res.statusCode = 200;

  const color = url.searchParams.get('cor');
  const size = url.searchParams.get('tamanho');

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString('utf-8');
  console.log(JSON.parse(body));

  if (req.method === 'GET' && url.pathname === '/') {
    res.setHeader(
      'Content-Type',
      'text/hmtl; charset=utf-8',
      'Access-Control-Allow-Headers',
    );

    res.end(`
      <html>
         <head>
      </head> 
      <body>
        Olá Mundo!
      </body> 
      </html>  
    `);
  } else if (req.method === 'POST' && url.pathnam === './produtos') {
    res.statusCode = 201;

    res.setHeader(
      'Content-Type',
      'text/hmtl; charset=utf-8',
      'Access-Control-Allow-Headers',
    );

    res.end(p);
    console.log('Productos:', color, size);
  } else {
    console.log('Nao encontrado');
  }

  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
