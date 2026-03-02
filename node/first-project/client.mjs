const response = await fetch('http://localhost:3000/produtos', {
  method: 'POST',
  headers: {
    'Content-Type': 'applocation/json',
  },
  body: JSON.stringify({
    name: 'Notebook',
    slug: 'notebook',
    category: 'eletronic',
  }),
});

const body = await response.text();

console.log(body);
