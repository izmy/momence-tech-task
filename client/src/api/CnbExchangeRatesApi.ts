import * as v from "valibot";
import { SETTINGS } from "../main";

const ExchangeRateInfoSchema = v.object({
  country: v.string(),
  currency: v.string(),
  amount: v.number(),
  code: v.string(),
  rate: v.number(),
});

export type ExchangeRateInfo = v.InferOutput<typeof ExchangeRateInfoSchema>;

export const fetchCnbExchangeRates = async () => {
  const response = await fetch(`${SETTINGS.backendApiUrl}/cnb/exchange-rates`);
  const body = await response.json();

  return v.parse(v.array(ExchangeRateInfoSchema), body);
};
