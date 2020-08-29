// r, g, b : 0 ~ 255 
export interface RGB {
  r: number;
  g: number;
  b: number;
}

// h, s, v : 0.0 ~ 1.0 
export interface HSV {
  h: number;
  s: number;
  v: number;
}

// h, s, l : 0.0 ~ 1.0
export interface HSL {
  h: number;
  s: number;
  l: number;
}

// c,m,y : 0.0 ~ 1.0
export interface CMY {
  c: number;
  m: number;
  y: number;
}

// c,m,y,k : 0.0 ~ 1.0
export interface CMYK {
  c: number;
  m: number;
  y: number;
  k: number;
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