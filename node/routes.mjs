export const routes = {
  GET: {
    '/': (req, res) => {
      res.end('Home');
    },
    '/produto/notebook': (req, res) => {
      res.end('Produtos - Notebbok');
    },
  },
  POST: {
    '/produto': (req, res) => {
      res.end('Notebbok Post');
    },
  },
};
