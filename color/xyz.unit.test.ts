import {instanceOfXYZ, XYZ} from "./xyz"

test("XYZ color from numbers (0,0,0)", () => {
    let color = XYZ(0,0,0);
    expect(color.X).toBe(0);
    expect(color.Y).toBe(0);
    expect(color.Z).toBe(0);
    expect(instanceOfXYZ(color)).toBe(true);
});

test("XYZ color from number array [0,0,0]", () => {
    let color = XYZ([0,0,0]);
    expect(color.X).toBe(0);
    expect(color.Y).toBe(0);
    expect(color.Z).toBe(0);
    expect(instanceOfXYZ(color)).toBe(true);
});

test("XYZ color from Yxy color", () => {
    let color = XYZ({Y:0.5, x:.1, y:.1, otherAttr:'hello world!'});
    expect(color.X).toBe(.5);
    expect(color.Y).toBe(.5);
    expect(color.Z).toBe(4);
    expect(instanceOfXYZ(color)).toBe(true);
});


