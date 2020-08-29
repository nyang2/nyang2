import { RGB, HSV } from "../../types";

export function rgb2hsv(rgb: RGB): HSV {

  const { r, g, b } = rgb;

  const R = r / 255;
  const G = g / 255;
  const B = b / 255;

  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);
  const delta = max - min;

  const V = max

  if (delta === 0) {      // gray 
    return {
      h: 0,
      s: 0,
      v: V,
    };
  }


  const S = delta / max; 
  let H = 0; 

  const delR = ((( max - R ) / 6 ) + (delta / 2) ) / delta
  const delG = ((( max - G ) / 6 ) + (delta / 2) ) / delta
  const delB = ((( max - B ) / 6 ) + (delta / 2) ) / delta

  if      ( R == max ) H = delB - delG
  else if ( G == max ) H = ( 1 / 3 ) + delR - delB
  else if ( B == max ) H = ( 2 / 3 ) + delG - delR

  if ( H < 0 ) H += 1
  if ( H > 1 ) H -= 1

  return {
    h: H,
    s: S,
    v: V,
  };
}
