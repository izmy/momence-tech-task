import { describe, expect, test } from "vitest";
import { convertCzkExchangeRate } from "./convertCzkExchangeRate";

describe("convertCzkExchangeRate", () => {
  test("should correctly convert CZK to target currency", () => {
    expect(convertCzkExchangeRate({ czk: 1000, rate: 25, amount: 1 })).toBe(40);
    expect(convertCzkExchangeRate({ czk: 2000, rate: 20, amount: 2 })).toBe(
      200
    );
  });

  test("should handle fractional rates and amounts", () => {
    expect(convertCzkExchangeRate({ czk: 1000, rate: 25.5, amount: 1 })).toBe(
      39.216
    );
    expect(convertCzkExchangeRate({ czk: 1500, rate: 30.7, amount: 2 })).toBe(
      97.72
    );
  });

  test("should return 0 for amount of 0", () => {
    expect(convertCzkExchangeRate({ czk: 1000, rate: 25, amount: 0 })).toBe(0);
  });

  test("should handle negative numbers", () => {
    expect(convertCzkExchangeRate({ czk: -1000, rate: 25, amount: 1 })).toBe(
      -40
    );
    expect(convertCzkExchangeRate({ czk: 1000, rate: -25, amount: 1 })).toBe(
      -40
    );
  });

  test("should throw an error when rate is 0", () => {
    expect(() =>
      convertCzkExchangeRate({ czk: 1000, rate: 0, amount: 1 })
    ).toThrow("Rate cannot be 0");
  });
});
