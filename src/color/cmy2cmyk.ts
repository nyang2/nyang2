import { CMY, CMYK } from "../../types";

export function cmy2cmyk(cmy: CMY) : CMYK {
  let {c, m, y} = cmy; 

  let k:number = 1;  
  k = Math.min(c, m, y, k);

  if (k === 1) {
    c = 0;
    m = 0;
    y = 0;
  } else {
    c = (Math.max(0, Math.max(c)) - k) / (1 - k);
    m = (Math.max(0, Math.max(m)) - k) / (1 - k);
    y = (Math.max(0, Math.max(y)) - k) / (1 - k);
  }
  return {
    c,
    m,
    y,
    k
  };
};
