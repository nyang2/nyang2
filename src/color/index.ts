import { rgb2hsv } from "./rgb2hsv"
import { RGB, CMY, LAB, XYZ } from "../../types";
import { rgb2cmy } from "./rgb2cmy";
import { cmy2rgb } from "./cmy2rgb";
import { adobe2xyz } from "./adobe2xyz";
import { cmy2cmyk } from "./cmy2cmyk";
import { cmyk2cmy } from "./cmyk2cmy";
import { lab2rgb } from "./lab2rgb";
import { lab2xyz } from "./lab2xyz";
import { rgb2lab } from "./rgb2lab";
import { rgb2xyz } from "./rgb2xyz";
import { xyz2adobe } from "./xyz2adobe";
import { xyz2lab } from "./xyz2lab";
import { xyz2rgb } from "./xyz2rgb";
import { name } from './name';

export {
    name,
    rgb2hsv,
    rgb2cmy,
    rgb2lab,
    rgb2xyz,    
    adobe2xyz,
    cmy2rgb,
    cmy2cmyk,
    cmyk2cmy,
    lab2rgb,
    lab2xyz,
    xyz2adobe,
    xyz2lab,
    xyz2rgb
};

export interface ColorValue {
    type: string; 
    alpha?: number; 
    r?: number;
    g?: number;
    b?: number;
    h?: number;
    s?: number;
    v?: number;
    x?: number;
    y?: number;
    z?: number;
    c?: number;
    m?: number;
    // y?: number;
    k?: number;
    l?: number;
    a?: number;
}

export function rgb (r: number, g: number, b: number, alpha: number = 1) {
    return new Color({ type: 'rgb', r, g, b, alpha})
}

export const rgba = rgb; 

export function hsv (h: number, s: number, v: number, alpha: number = 1) {
    return new Color({ type: 'hsv', h, s, v, alpha})
}

export const hsva = hsv; 

export function hsl (h: number, s: number, l: number, alpha: number = 1) {
    return new Color({ type: 'hsl', h, s, l, alpha})
}

export const hsla = hsl; 

export function cmy (c: number, m: number, y: number, alpha: number = 1) {
    return new Color({ type: 'cmy', c, m, y, alpha})
}    

export function cmyk (c: number, m: number, y: number, k: number, alpha: number = 1) {
    return new Color({ type: 'cmyk', c, m, y, k, alpha})
}

export function adobe (r: number, g: number, b: number, alpha: number = 1) {
    return new Color({ type: 'adobe', r, g, b, alpha})
}

export function lab (l: number, a: number, b: number, alpha: number = 1) {
    return new Color({ type: 'lab', l, a, b, alpha})
}

export function xyz (x: number, y: number, z: number, alpha: number = 1) {
    return new Color({ type: 'xyz', x, y, z, alpha})
}    


export const ColorFunction = {
    rgb, 
    rgba,
    hsv,
    hsl,
    hsva,
    hsla,
    xyz,
    lab,
    adobe,
    cmy,
    cmyk,  
};

export function parse (colorString: string) {
    return (new Function ('ColorFunction', `
        return ColorFunction.${colorString};
    `))(ColorFunction)
}


export default class Color {
    data = { type: '', a: 1 } as ColorValue;


    constructor (obj: ColorValue) {
        this.data = obj;
    }


    get hsv(): Color| undefined {

        switch(this.data.type) {
        case 'rgb':
            const {h, s, v} = rgb2hsv(this.data as RGB); 
            return hsv(h, s, v, this.data.alpha)
        }
    }

    get cmy(): Color| undefined {

        switch(this.data.type) {
        case 'rgb':
            const {c, y, m} = rgb2cmy(this.data as RGB); 
            return cmy(c, y, m, this.data.alpha);
        }
    }    

    get lab(): Color| undefined {
        let value: LAB;                
        switch(this.data.type) {
        case 'rgb': 
            value = rgb2lab(this.data as RGB);
            return lab(value.l, value.a, value.b, this.data.alpha);
        case 'xyz': 
            value = xyz2lab(this.data as XYZ);
            return lab(value.l, value.a, value.b, this.data.alpha);
        }
    }

    get xyz(): Color| undefined {
        let value: XYZ;        

        switch(this.data.type) {
        case 'rgb': 
            value = rgb2xyz(this.data as RGB);
            return xyz(value.x, value.y, value.z, this.data.alpha);
        case 'lab': 
            value = lab2xyz(this.data as LAB);
            return xyz(value.x, value.y, value.z, this.data.alpha);
        case 'adobe': 
            value = adobe2xyz(this.data as RGB);
            return xyz(value.x, value.y, value.z, this.data.alpha);
        }
    }    

    get rgb(): Color| undefined {
        let value: RGB;

        switch (this.data.type) {
        case 'cmy':
            value = cmy2rgb(this.data as CMY);
            return rgb(value.r, value.g, value.b, this.data.alpha);                    
        case 'lab':
            value = lab2rgb(this.data as LAB);
            return rgb(value.r, value.g, value.b, this.data.alpha);        
        case 'xyz':
            value = xyz2rgb(this.data as XYZ);
            return rgb(value.r, value.g, value.b, this.data.alpha);                                
        }
    }

    get adobe(): Color| undefined {
        let value: RGB;

        switch (this.data.type) {
        case 'xyz':
            value = xyz2adobe(this.data as XYZ);
            return adobe(value.r, value.g, value.b, this.data.alpha);
        }
    }    
}
