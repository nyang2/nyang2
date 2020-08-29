import { RGB, HSL } from "../../types";


export function rgb2hsl(rgb: RGB): HSL {


  const R = ( rgb.r / 255 )
  const G = ( rgb.g / 255 )
  const B = ( rgb.b / 255 )

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);
  const dt = max - min;

  const lightness = (max + min) / 2; 

  if ( dt == 0 ){
    return {
      h: 0,
      s: 0,
      l: lightness
    }
  } else {

    let hue = 0, s = 0;

    if ( lightness < 0.5 ) {
      s = dt / ( min + max )
    } else {
      s = dt / ( 2 - max - min )
    } 

    const dR = (((max - R) / 6) + (dt/2) ) / dt
    const dG = (((max - G) / 6) + (dt/2) ) / dt
    const dB = (((max - B) / 6) + (dt/2) ) / dt

    if ( R == max ) {
      hue = dB - dG
    } else if ( G == max ) {
      hue = (1/3) + dR - dG
    } else if (B == max ) {
      hue = (2/3) + dG - dR
    }

    if (hue < 0) hue += 1; 
    if (hue > 1) hue -= 1; 

    return {
      h: hue,
      s,
      l: lightness
    }
  }

}
