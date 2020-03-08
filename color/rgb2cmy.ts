import { ColorListType, RGBColorType, CMYColorType } from './';

export function rgb2cmy(...arg: ColorListType | [RGBColorType]) : CMYColorType {
  let r:number = 0;
  let g:number = arg[1] || 0;
  let b:number = arg[2] || 0;
  if (typeof arg[0] === 'object') {
    r = arg[0].r;
    g = arg[0].g;
    b = arg[0].b;
  } else {
    r = arg[0];
  }
  return {
    c: 1 - (r / 255),
    m: 1 - (g / 255),
    y: 1 - (b / 255)
  };
};
