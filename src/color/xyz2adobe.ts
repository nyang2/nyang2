
import { minmax } from "../util/math";
import { XYZ, RGB } from "../../types";

export function xyz2adobe (xyz: XYZ): RGB {
    const {x, y, z} = xyz;

    const tempX = x / 100;
    const tempY = y / 100;
    const tempZ = z / 100;
    
    const tempR = Math.pow(tempX *  2.04137 + tempY * -0.56495 + tempZ * -0.34469, ( 1 / 2.19921875 ));
    const tempG = Math.pow(tempX * -0.96927 + tempY *  1.87601 + tempZ *  0.04156, ( 1 / 2.19921875 ));
    const tempB = Math.pow(tempX *  0.01345 + tempY * -0.11839 + tempZ *  1.01541, ( 1 / 2.19921875 ));
    
    return {
        r: minmax(0, 255, Math.round(tempR * 255)),
        g: minmax(0, 255, Math.round(tempG * 255)),
        b: minmax(0, 255, Math.round(tempB * 255)),   
    }
}