import type { Middleware } from "../router.js";

export const logger: Middleware = (req, res) => {
  console.log(`${req.method} - ${req.pathname}`);
};
