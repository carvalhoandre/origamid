export class Router {
  routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  };

  get(route, handler) {
    this.routes['GET'][route] = handler;
  }

  post(route, handler) {
    this.routes['GET'][route] = handler;
  }

  find(method, route) {
    this.routes[method]?.[route] || null;
  }
}
