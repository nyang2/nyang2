import { RGBArrayType, RGBColorType, HSVColorType } from './';

export function rgb2hsv(...arg: RGBArrayType | [RGBColorType]): HSVColorType {
  if (arg.length === 1) {
    var { r, g, b } = arg[0];
  } else {
    var [r, g, b] = arg;
  }

  const rAbs = r / 255;
  const gAbs = g / 255;
  const bAbs = b / 255;

  const max = Math.max(rAbs, gAbs, bAbs);
  const min = Math.min(rAbs, gAbs, bAbs);
  const delta = max - min;

  if (delta === 0) {
    return {
      h: 0,
      s: 0,
      v: 0,
    };
  }

  let h = 0;
  const s = delta / max;
  const v = max;

  if (rAbs === max) {
    h = ((gAbs - bAbs) / delta) * 60;
  } else if (gAbs === max) {
    h = ((bAbs - rAbs) / delta + 2) * 60;
  } else if (bAbs === max) {
    h = ((rAbs - gAbs) / delta + 4) * 60;
  }

  if (h < 0) {
    h += 360;
  }

  return {
    h,
    s,
    v,
  };
}
