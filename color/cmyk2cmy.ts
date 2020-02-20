export function cmyk2cmy(cmy:{ c:number, m:number, y:number, k:number }) : { c:number, m:number, y:number };
export function cmyk2cmy(c:number, m:number, y:number, k:number) : { c:number, m:number, y:number };
export function cmyk2cmy(arg1:{ c:number, m:number, y:number, k:number }|number, arg2?:number, arg3?:number, arg4?:number) : { c:number, m:number, y:number } {
    let c:number = 0;
    let m:number = arg2 || 0;
    let y:number = arg3 || 0;
    let k:number = arg4 || 0;
    if (typeof arg1 === 'object') {
        c = arg1.c;
        m = arg1.m;
        y = arg1.y;
        k = arg1.k;
    } else {
        c = arg1;
    }
    return {
        c: c * (1 - k) + k,
        m: m * (1 - k) + k,
        y: y * (1 - k) + k
    };
};
