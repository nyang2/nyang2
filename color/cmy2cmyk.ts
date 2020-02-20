export function cmy2cmyk(cmy:{ c:number, m:number, y:number }) : { c:number, m:number, y:number, k:number };
export function cmy2cmyk(c:number, m:number, y:number) : { c:number, m:number, y:number, k:number };
export function cmy2cmyk(arg1:{ c:number, m:number, y:number }|number, arg2?:number, arg3?:number) : { c:number, m:number, y:number, k:number } {
    let c:number = 0;
    let m:number = arg2 || 0;
    let y:number = arg3 || 0;
    let k:number = 1;
    if (typeof arg1 === 'object') {
        c = arg1.c;
        m = arg1.m;
        y = arg1.y;
    } else {
        c = arg1;
    }
    k = Math.min(c, m, y, k);
    if (k === 1) {
        c = 0;
        m = 0;
        y = 0;
    } else {
        c = (c - k) / (1 - k);
        m = (m - k) / (1 - k);
        y = (y - k) / (1 - k);
    }
    return {
        c,
        m,
        y,
        k
    };
};
