import { RGB, XYZ } from "./color";

// refer to https://en.wikipedia.org/wiki/RGB
export function gamma_reverse (u: number): number {
    if ( u > 0.04045 ) {
        return Math.pow(( u + 0.055 ) / 1.055 ,  2.4);
    } else {
        return u / 12.92;
    }   
}

export function rgb2xyz (rgb: RGB): XYZ {
    const {r, g, b} = rgb;

    const tempR = gamma_reverse( r / 255 ) * 100;
    const tempG = gamma_reverse( g / 255 ) * 100;
    const tempB = gamma_reverse( b / 255 ) * 100;

    return {
        x: tempR * 0.4124 + tempG * 0.3576 + tempB * 0.1805,
        y: tempR * 0.2126 + tempG * 0.7152 + tempB * 0.0722,
        z: tempR * 0.0193 + tempG * 0.1192 + tempB * 0.9505,
    }
}