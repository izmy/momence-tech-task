import { ExchangeRate } from "../src/routes/exchangeRatesRoute";

const CNB_EXCHANGE_RATE_TABLE_HEADER = "Country|Currency|Amount|Code|Rate";

const getCnbExchangeRates = (data: string) => {
  // Step 1: Split data by new lines
  const lines = data.split(/\r?\n/);

  // Step 2: Filter out empty lines
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");

  // Step 3: Remove the first two lines (because first line is a date and second line is a header)
  if (nonEmptyLines.length < 2) {
    throw new Error("Invalid data");
  }

  if (nonEmptyLines.at(1) !== CNB_EXCHANGE_RATE_TABLE_HEADER) {
    throw new Error("Invalid header");
  }

  const relevantLines = nonEmptyLines.slice(2);

  return relevantLines;
};

export const parseCnbExchangeRates = (data: string): ExchangeRate[] => {
  // Step 1: Get the relevant exchange rate lines by calling getCnbExchangeRates
  try {
    const rawExchangeRates = getCnbExchangeRates(data);
    // Step 2: Map over each line of raw data and transform it into an object
    const exchangeRates = rawExchangeRates.map((rawData) => {
      const [country, currency, amount, code, rate] = rawData.split("|");

      return {
        country,
        currency,
        amount: Number(amount),
        code,
        rate: Number(rate.replace(",", ".")),
      };
    });

    return exchangeRates;
  } catch (errorLike) {
    const error = errorLike instanceof Error ? errorLike : new Error(`${errorLike}`);

    throw error;
  }
};
