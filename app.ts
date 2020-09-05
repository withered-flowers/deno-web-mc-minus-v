import { Application } from "./mod.ts";
import { config } from "./mod.ts";
import router from "./routes/index.ts";

const { PORT } = config();

const port = Number(PORT) || 3000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running in ${port}`);
await app.listen({ port: port });
