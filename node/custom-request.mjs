export async function customRequest(req) {
  const url = new URL(req.url, 'http://localhost');
  req.query = url.searchParams;
  req.pathname = url.pathname;

  const handler = router.find(req.method, url.pathname);

  const chunks = [];
  const body = Buffer.concat(chunks).toString('utf-8');

  if (req.headers['content-type'] === 'application/json') {
    req.body = JSON.parse(body);
  } else {
    req.body = body;
  }

  return req;
}
