import {instanceOfXYZ, XYZ} from "./xyz"
import {instanceOfYxy, Yxy} from "./xyz"

test("XYZ color from numbers ", () => {
    let color = XYZ(1/3,1/3,1/3);
    expect(color.X).toBe(1/3);
    expect(color.Y).toBe(1/3);
    expect(color.Z).toBe(1/3);
    expect(instanceOfXYZ(color)).toBe(true);
});

test("XYZ color from number array ", () => {
    let color = XYZ([1/3,1/3,1/3]);
    expect(color.X).toBe(1/3);
    expect(color.Y).toBe(1/3);
    expect(color.Z).toBe(1/3);
    expect(instanceOfXYZ(color)).toBe(true);
});

test("XYZ color from Yxy color", () => {
    let color = XYZ({Y:0.3, x:0.3, y:0.3, otherAttr:'hello world!'});
    expect(color.X).toBe(.3);
    expect(color.Y).toBe(.3);
    expect(color.Z).toBe(0.39999999999999997);
    expect(instanceOfXYZ(color)).toBe(true);
});

test("XYZ color from XYZ color", () => {
    let param = {X:1/3, Y:1/3, Z:1/3, otherAttr:[]};
    let color = XYZ(param);
    expect(color).toBe(param);
});

//------

test("Yxy color from numbers ", () => {
    let color = Yxy(1/3, 1/3,1/3);
    expect(color.Y).toBe(1/3);
    expect(color.x).toBe(1/3);
    expect(color.y).toBe(1/3);
    expect(instanceOfYxy(color)).toBe(true);
});

test("Yxy color from number array ", () => {
    let color = Yxy([1/3,1/3,1/3]);
    expect(color.Y).toBe(1/3);
    expect(color.x).toBe(1/3);
    expect(color.y).toBe(1/3);
    expect(instanceOfYxy(color)).toBe(true);
});

test("Yxy color from XYZ color", () => {
    let color = Yxy({Y:0.5, x:.1, y:.1, otherAttr:'hello world!'});
    expect(color.Y).toBe(.5);
    expect(color.x).toBe(.1);
    expect(color.y).toBe(.1);
    expect(instanceOfYxy(color)).toBe(true);
});

test("Yxy color from Yxy color", () => {
    let param = {X:1/3, Y:1/3, Z:1/3, otherAttr:[]};
    let color = XYZ(param);
    expect(color).toBe(param);
});

