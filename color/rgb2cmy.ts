export function rgb2cmy(rgb:{ r:number, g:number, b:number }) : { c:number, m:number, y:number };
export function rgb2cmy(r:number, g:number, b:number) : { c:number, m:number, y:number };
export function rgb2cmy(arg1:{ r:number, g:number, b:number }|number, arg2?:number, arg3?:number) : { c:number, m:number, y:number } {
    let r:number = 0;
    let g:number = arg2 || 0;
    let b:number = arg3 || 0;
    if (typeof arg1 === 'object') {
        r = arg1.r;
        g = arg1.g;
        b = arg1.b;
    } else {
        r = arg1;
    }
    return {
        c: 1 - (r / 255),
        m: 1 - (g / 255),
        y: 1 - (b / 255)
    };
};
