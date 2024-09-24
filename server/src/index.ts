import { Hono } from "hono";
import { cors } from "hono/cors";
import { exchangeRatesRoute } from "./routes/exchangeRatesRoute";

const app = new Hono();

export default app;
