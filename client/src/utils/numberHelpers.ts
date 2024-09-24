const NUMBER_REGEXP = /^-?[0-9]*\.?[0-9]*$/;

export const isLikeNumber = (value: string) => {
  return value.match(NUMBER_REGEXP);
};

export const parseNumber = (value: string) => {
  const trimmedValue = value.trim();
  if (trimmedValue === "") {
    return undefined;
  }

  const parsedNumber = Number.parseFloat(trimmedValue);
  if (!Number.isFinite(parsedNumber)) {
    return undefined;
  }

  return parsedNumber;
};
