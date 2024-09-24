import { Hono } from "hono";
import { cors } from "hono/cors";
import { exchangeRatesRoute } from "./routes/exchangeRatesRoute";

const app = new Hono();

app.use("*", cors());

app.basePath("/api").route("/cnb", exchangeRatesRoute);

export default app;
