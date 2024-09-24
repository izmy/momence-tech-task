import { useQuery } from "@tanstack/react-query";
import { fetchCnbExchangeRates } from "../api/CnbExchangeRatesApi";

const EXCHANGE_RATES_QUERY_KEY = "EXCHANGE_RATES";

export const useExchangeRates = () => {
  return useQuery({
    queryKey: [EXCHANGE_RATES_QUERY_KEY],
    queryFn: fetchCnbExchangeRates,
  });
};
