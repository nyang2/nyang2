import { HSV, RGB } from "../../types";

export function hsv2rgb (hsv: HSV): RGB {
    const { h, s, v} = hsv;

    if (s === 0) {
        return { r: v * 255, g: v * 255, b: v * 255}
    }


    let H = h * 6; 
    if (H === 6) H = 0; 

    const I = Math.floor(H);

    const v1 = v * ( 1 - s);
    const v2 = v * ( 1 - s * (H - I))
    const v3 = v * ( 1 - s * (1 - (H - I)))

    let R, G, B; 

    if (I === 0) { R = v; G = v3; B = v1; }
    else if (I === 1) { R = v2; G = v; B = v1; }
    else if (I === 2) { R = v1; G = v; B = v3; }
    else if (I === 3) { R = v1; G = v2; B = v; }
    else if (I === 4) { R = v3; G = v1; B = v; }    
    else { R = v; G = v1; B = v2; }


    return {
        r: Math.round(R * 255), 
        g: Math.round(G * 255), 
        b: Math.round(B * 255), 
    }
}