import { LAB, XYZ } from "../../types";

function reverseXyz (colorValue: number) {
    if ( Math.pow(colorValue, 3)  > 0.008856 ) { 
        return Math.pow(colorValue, 3)
    }

    return ( colorValue - (16 / 116) ) / 7.787


}

export function lab2xyz (lab: LAB): XYZ {
    const {l, a, b} = lab;

    const tempY = ( l + 16 ) / 116;
    const tempX = tempY + (a / 500);
    const tempZ = tempY - (b / 200);

    return {
        x: reverseXyz(tempX) * 95.047,
        y: reverseXyz(tempY) * 100,
        z: reverseXyz(tempZ) * 108.883,
    }
}