import { LAB, XYZ } from "./color";

export function pivot (colorValue: number): number {
    if ( colorValue > 0.008856 ) {
        return Math.pow(colorValue , ( 1/3 ))
    }

    return ( 7.787 * colorValue ) + ( 16 / 116 )
}

export function xyz2lab (xyz: XYZ): LAB {
    const {x, y, z} = xyz;

    const tempX = x / 95.047
    const tempY = y / 100.00
    const tempZ = z / 108.883

    const X = pivot(tempX);
    const Y = pivot(tempY)
    const Z = pivot(tempZ)
    
    return {
        l: ( 116 * X ) - 16,
        a: 500 * ( X - Y ),
        b: 200 * ( Y  - Z )
    }
}