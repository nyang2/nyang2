import { ColorListType, CMY, CMYK } from "../../types";

export function cmy2cmyk(...arg: ColorListType | [CMY]) : CMYK {
  let c:number = 0;
  let m:number = arg[1] || 0;
  let y:number = arg[2] || 0;
  let k:number = 1;
  if (arg.length === 1) {
    c = arg[0].c;
    m = arg[0].m;
    y = arg[0].y;
  } else {
    c = arg[0];
  }
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
