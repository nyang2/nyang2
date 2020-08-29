import { RGB, HSL } from "../../types";
import { hue2rgb } from "./hue2rgb";


export function hsl2rgb(hsl: HSL): RGB {

  const { h: hue, s, l: lightness} = hsl; 
  let r = 0, g = 0, b = 0;

  if (s === 0) {      // gray 
    r = lightness * 255; 
    g = lightness * 255; 
    b = lightness * 255; 

    return { r, g, b }
  } else {

    let v1 = 0, v2 = 0; 
    if (lightness < 0.5) {
      v2 = lightness  * ( 1 + s);
    } else {
      v2 = (lightness + s ) - (s * lightness);
    }

    v1 = (2 * lightness) - v2; 

    return {
      r: Math.round(255 * hue2rgb(v1, v2, hue + (1/3))),
      g: Math.round(255 * hue2rgb(v1, v2, hue)),
      b: Math.round(255 * hue2rgb(v1, v2, hue - (1/3))),
    }
  }

}
