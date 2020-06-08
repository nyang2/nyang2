export interface RGB {
    r: number; 
    g: number; 
    b: number; 
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