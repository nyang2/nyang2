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
    r: Math.round((1 - Math.max(0, Math.max(c))) * 255),
    g: Math.round((1 - Math.max(0, Math.max(m))) * 255),
    b: Math.round((1 - Math.max(0, Math.max(y))) * 255)
  };
};
