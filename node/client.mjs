const response = await fetch(
  'http://localhost:3000/produtos?cor=azul&tamanho=g',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'applocation/json',
    },
    body: JSON.stringify({ userName: 'andre', password: '1234' }),
  },
);

const body = await response.text();

console.log(body);
