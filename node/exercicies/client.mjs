try {
  const response = await fetch(
    'http://localhost:3000/produtos?cor=azul&tamanho=g',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Fixed typo
      },
      body: JSON.stringify({
        name: 'Notebook',
        slug: 'notebook',
        category: 'eletric',
        price: 2000,
      }),
    },
  );

  const body = await response.text();
  console.log(body);
} catch (error) {
  console.error('Error during fetch:', error);
}
