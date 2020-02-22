import { RGB, XYZ } from "./color";

export function adobe2xyz (rgb: RGB): XYZ {
    const {r, g, b} = rgb;

    const tempR = Math.pow(( r / 255 ), 2.19921875) * 100;
    const tempG = Math.pow(( g / 255 ), 2.19921875) * 100;
    const tempB = Math.pow(( b / 255 ), 2.19921875) * 100;

    return {
        x: tempR * 0.57667 + tempG * 0.18555 + tempB * 0.18819,
        y: tempR * 0.29738 + tempG * 0.62735 + tempB * 0.07527,
        z: tempR * 0.02703 + tempG * 0.07069 + tempB * 0.99110,
    }
}