console.clear();
const base = "http://localhost:3000";

const functions = {
  async getProduct() {
    const response = await fetch(`${base}/produto/Produto1`);
    const body = await response.json();

    console.table(body);
  },
};

functions[process.argv[2]]();
