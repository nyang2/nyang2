export { rgb2hsv } from './rgb2hsv';

type ColorArray = [number, number, number];

export type RGBArrayType = ColorArray;
export type RGBColorType = {
  r: number;
  g: number;
  b: number;
};

export type HSVArrayType = ColorArray;
export type HSVColorType = {
  h: number;
  s: number;
  v: number;
};
