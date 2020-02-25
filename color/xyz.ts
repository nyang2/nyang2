export interface Color extends Object{

}

export interface XYZ extends Color {
    X: number,
    Y: number,
    Z: number
}

export interface Yxy extends Color {
    Y: number,
    x: number,
    y: number
}

/**
 * duck typing support
 * @param v
 * @return {v is XYZ}
 */
export function instanceOfXYZ(v: any): v is XYZ {
    return 'X' in v && 'Y' in v && 'Z' in v;
}

/**
 * duck typing support
 * @param v
 * @return {v is Yxy}
 */
export function instanceOfYxy(v: any): v is Yxy {
    return 'Y' in v && 'x' in v && 'y' in v;
}

interface XYZFactory extends Function {
    (color: XYZ): XYZ;
    (x: number, y: number, z: number): XYZ;
    (v: Array<number>): XYZ;
    (v: Yxy): XYZ;

    fromYxy: (src: Yxy) => XYZ
    fromArray: (arr: number[]) => XYZ
    fromNumber: (x:number, y:number, z:number) => XYZ
}

interface YxyFactory extends Function {
    (color: Yxy): Yxy;
    (Y: number, x: number, y: number): Yxy;
    (v: Array<number>): Yxy;

    fromXYZ: (src: XYZ) => Yxy
    fromArray: (arr: number[]) => Yxy
    fromNumber: (Y:number, x:number, y:number) => Yxy
}

export const XYZ: XYZFactory = function (x: XYZ | Yxy | number | Array<number> = 0, y: number = 0, z: number = 0) {
    if (x instanceof Array) {
        return XYZ.fromArray(x);
    } else if (typeof x === 'number') {
        return XYZ.fromNumber(x,y,z)
    } else if (instanceOfXYZ(x)) {
        return x;
    } else if (instanceOfYxy(x)){
        return XYZ.fromYxy(x);
    }else {
        throw new Error("invalid input parameter.")
    }
};

XYZ.fromYxy = function(src: Yxy): XYZ {
    let {Y,x,y} = src;
    return {
        X: x * ( Y / y ),
        Y: Y,
        Z: ( 1 - x - y ) * ( Y / y )
    }
};

XYZ.fromNumber = function(x: number, y: number ,z: number){
    return {
        X: x,
        Y: y,
        Z: z
    }
}

XYZ.fromArray = function(arr: number[], startIndex: number = 0) {
    return {
        X: arr[0],
        Y: arr[1],
        Z: arr[2]
    }
};

export const Yxy: YxyFactory = function(Y: XYZ | Yxy | number | Array<number> =0,x:number=0,y:number=0) {
    if (Y instanceof Array) {
        return Yxy.fromArray(Y);
    } else if (typeof Y === 'number') {
        return Yxy.fromNumber(Y,x,y)
    } else if (instanceOfYxy(Y)) {
        return Y;
    } else if (instanceOfXYZ(Y)){
        return Yxy.fromXYZ(Y);
    } else {
        throw new Error("invalid input parameter.")
    }
};

Yxy.fromArray = function(arr: number[], startIndex: number = 0) {
    return {
        Y: arr[0],
        x: arr[1],
        y: arr[2]
    }
};

Yxy.fromNumber = function(Y,x,y):Yxy {
    return {
        Y: Y,
        x: x,
        y: y
    }
};

Yxy.fromXYZ = function(src: XYZ):Yxy {
        let {X,Y,Z} = src;
    return {
        Y: Y,
        x: X / ( X + Y + Z ),
        y: Y / ( X + Y + Z )
    }
};

