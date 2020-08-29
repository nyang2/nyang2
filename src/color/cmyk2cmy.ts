import { CMYK, CMY } from "../../types";

export function cmyk2cmy(cmyk: CMYK) : CMY {

  let { c, m, y, k} = cmyk;

  k = Math.max(0, Math.min(1, k));

  return {
    c: Math.max(0, Math.min(1, c)) * (1 - k) + k,
    m: Math.max(0, Math.min(1, m)) * (1 - k) + k,
    y: Math.max(0, Math.min(1, y)) * (1 - k) + k
  };
};
