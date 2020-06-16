import { CMYKColorListType, CMYK, CMY } from "../../types";

export function cmyk2cmy(...arg: CMYKColorListType | [CMYK]) : CMY {
  let c:number = 0;
  let m:number = arg[1] || 0;
  let y:number = arg[2] || 0;
  let k:number = arg[3] || 0;
  if (arg.length === 1) {
    c = arg[0].c;
    m = arg[0].m;
    y = arg[0].y;
    k = arg[0].k;
  } else {
    c = arg[0];
  }
  k = Math.max(0, Math.min(1, k));
  return {
    c: Math.max(0, Math.min(1, c)) * (1 - k) + k,
    m: Math.max(0, Math.min(1, m)) * (1 - k) + k,
    y: Math.max(0, Math.min(1, y)) * (1 - k) + k
  };
};
