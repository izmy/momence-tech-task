export const fetchCnbExchangeRateFixing = async () => {
  const response = await fetch(
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );

  return await response.text();
};
