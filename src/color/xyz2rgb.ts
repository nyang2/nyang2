import { minmax } from "../util/math";
import { XYZ, RGB } from "../../types";

// refer to https://en.wikipedia.org/wiki/RGB
export function gamma (u: number): number {
    if ( u > 0.0031308 ) {
        return 1.055 * ( Math.pow(u , ( 1 / 2.4 )) ) - 0.055;
    }
    
    return 12.92 * u;    
}

export function xyz2rgb (xyz: XYZ): RGB {
    const {x, y, z} = xyz;

    const tempX = x / 100;
    const tempY = y / 100;
    const tempZ = z / 100;

    const tempR = gamma(tempX *  3.2406 + tempY * -1.5372 + tempZ * -0.4986);
    const tempG = gamma(tempX * -0.9689 + tempY *  1.8758 + tempZ *  0.0415);
    const tempB = gamma(tempX *  0.0557 + tempY * -0.2040 + tempZ *  1.0570);

    return {
        r: minmax(0, 255, Math.round(tempR * 255)),
        g: minmax(0, 255, Math.round(tempG * 255)),
        b: minmax(0, 255, Math.round(tempB * 255)),
    };
}