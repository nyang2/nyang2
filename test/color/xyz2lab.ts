import { xyz2lab } from "../../src/color/xyz2lab";

test("test xyz2lab - convert xyz to lab", () => {

    const lab = xyz2lab({ x: 42.98564143983255, y:  22.248803596716236, z: 1.838515853817947 });

    expect(lab).toEqual({ l: 73.04024, a: 80.82000000000001, b: 69.88 });
});