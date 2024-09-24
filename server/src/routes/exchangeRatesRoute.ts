import { Hono } from "hono";
import { parseCnbExchangeRates } from "../../utils/parseCnbExchangeRateFixing";
import { fetchCnbExchangeRateFixing } from "../services/fetchCnbExchangeRateFixing";

export type ExchangeRate = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

export const exchangeRatesRoute = new Hono();

exchangeRatesRoute.get("/exchange-rates", async (c) => {
  try {
    const rawCnbExchangeRateFixing = await fetchCnbExchangeRateFixing();
    const data = parseCnbExchangeRates(rawCnbExchangeRateFixing);

    return c.json(data);
  } catch (errorLike) {
    const error = errorLike instanceof Error ? errorLike : new Error(`${errorLike}`);

    return c.json({ error: error.message }, 500);
  }
});
