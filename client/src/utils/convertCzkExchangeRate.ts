export const convertCzkExchangeRate = ({
  czk,
  rate,
  amount,
}: {
  czk: number;
  rate: number;
  amount: number;
}): number => {
  if (rate === 0) {
    throw new Error("Rate cannot be 0");
  }

  const result = (czk / rate) * amount;

  return Math.round(result * 1000) / 1000;
};
