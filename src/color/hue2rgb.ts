export function hue2rgb(v1: number, v2: number, hue: number): number {

    if (hue < 0) hue += 1; 
    if (hue > 1) hue -= 1; 

    if ((6 * hue) < 1) return v1 + (v2 - v1) * 6 * hue 
    if ((2 * hue) < 1) return v2
    if ((3 * hue) < 2) return v1 + (v2 - v1) * 6 * ( (2/3) - hue)

    return v1; 
}