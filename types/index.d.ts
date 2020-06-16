
export type ColorListType = [number, number, number];
export type CMYKColorListType = [number, number, number, number];

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSV {
  h: number;
  s: number;
  v: number;
}

export interface CMY {
  c: number;
  m: number;
  y: number;
}

export interface CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
}


export interface RGB {
  r: number; 
  g: number; 
  b: number; 
}

/**
* l 0..100
* a -127..127
* b -127..127
*/
export interface LAB {
  l: number; 
  a: number; 
  b: number; 
}

export interface XYZ {
  x: number;
  y: number;
  z: number;
}

export interface Yxy {
  Y: number,
  x: number,
  y: number
}



export interface XYZFactory extends Function {
  (color: XYZ): XYZ;

  (x: number, y: number, z: number): XYZ;

  (v: Array<number>): XYZ;

  (v: Yxy): XYZ;

  fromYxy: (src: Yxy) => XYZ
  fromArray: (arr: number[], startIndex?: number) => XYZ
  fromNumber: (x: number, y: number, z: number) => XYZ
}

export interface YxyFactory extends Function {
  (color: Yxy): Yxy;

  (Y: number, x: number, y: number): Yxy;

  (v: Array<number>): Yxy;

  fromXYZ: (src: XYZ) => Yxy
  fromArray: (arr: number[], startIndex?: number) => Yxy
  fromNumber: (Y: number, x: number, y: number) => Yxy
}