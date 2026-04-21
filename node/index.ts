import { ProdutsApi } from "./api/products/index.ts";
import { Core } from "./core/core.ts";

const core = new Core();

new ProdutsApi(core).init();

core.init();
