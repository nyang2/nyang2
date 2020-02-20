export function cmy2rgb(cmy:{ c:number, m:number, y:number }) : { r:number, g:number, b:number };
export function cmy2rgb(c:number, m:number, y:number) : { r:number, g:number, b:number };
export function cmy2rgb(arg1:{ c:number, m:number, y:number }|number, arg2?:number, arg3?:number) : { r:number, g:number, b:number } {
    let c:number = 0;
    let m:number = arg2 || 0;
    let y:number = arg3 || 0;
    if (typeof arg1 === 'object') {
        c = arg1.c;
        m = arg1.m;
        y = arg1.y;
    } else {
        c = arg1;
    }
    return {
        r: (1 - c) * 255,
        g: (1 - m) * 255,
        b: (1 - y) * 255
    };
};
