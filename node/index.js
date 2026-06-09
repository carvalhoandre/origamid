import { createServer } from 'node:http';

createServer((req, res) => {
  const serssion = false;
  
  if (serssion) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.setHeader('X-Accel-Redirect', req.url);
    res.end(`<h1>Bem Vindo</h1>`);

  } else {
    res.writeHead(401, { 'Content-Type': 'text/html' });
    res.end(`<h1>Não autorizado</h1>`);
  }

  res.end(``);
}).listen(3000);