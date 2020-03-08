import { ColorListType, CMYColorType, RGBColorType } from './';

export function cmy2rgb(...arg: ColorListType | [CMYColorType]) : RGBColorType {
  let c:number = 0;
  let m:number = arg[1] || 0;
  let y:number = arg[2] || 0;
  if (arg.length === 1) {
    c = arg[0].c;
    m = arg[0].m;
    y = arg[0].y;
  } else {
    c = arg[0];
  }
  return {
    r: (1 - c) * 255,
    g: (1 - m) * 255,
    b: (1 - y) * 255
  };
};
