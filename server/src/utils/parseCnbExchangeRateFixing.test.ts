import { describe, expect, test } from "bun:test";
import { parseCnbExchangeRates } from "./parseCnbExchangeRateFixing";

const CORRECT_DATA = `
23 Sep 2024 #185
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.430
Brazil|real|1|BRL|4.055
Bulgaria|lev|1|BGN|12.897
`;

const INCORRECT_DATA = `
Australia|dollar|1|AUD|15.430
Brazil|real|1|BRL|4.055
`;

describe("parseCnbExchangeRates", () => {
  test("Parse correct data", () => {
    expect(parseCnbExchangeRates(CORRECT_DATA)).toEqual([
      {
        country: "Australia",
        currency: "dollar",
        amount: 1,
        code: "AUD",
        rate: 15.43,
      },
      {
        country: "Brazil",
        currency: "real",
        amount: 1,
        code: "BRL",
        rate: 4.055,
      },
      {
        country: "Bulgaria",
        currency: "lev",
        amount: 1,
        code: "BGN",
        rate: 12.897,
      },
    ]);
  });

  test("Parse incorrect data (invalid data)", () => {
    expect(() => parseCnbExchangeRates("lorem ipsum")).toThrow("Invalid data");
  });

  test("Parse incorrect data (invalid header)", () => {
    expect(() => parseCnbExchangeRates(INCORRECT_DATA)).toThrow(
      "Invalid header"
    );
  });
});
