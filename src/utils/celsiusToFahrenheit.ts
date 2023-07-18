import { normalizeNumber } from './normalizeNumber';

export const celsiusToFahrenheit = (C: number) => {
  const result = (C * (9 / 5) + 32);

  return normalizeNumber(result);
};
