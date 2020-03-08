export { rgb2hsv } from './rgb2hsv';

export type ColorListType = [number, number, number];
export type CMYKColorListType = [number, number, number, number];

export type RGBColorType = {
  r: number;
  g: number;
  b: number;
};

export type HSVColorType = {
  h: number;
  s: number;
  v: number;
};

export type CMYColorType = {
  c: number;
  m: number;
  y: number;
};

export type CMYKColorType = {
  c: number;
  m: number;
  y: number;
  k: number;
};
