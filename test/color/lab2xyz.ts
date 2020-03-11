import { lab2xyz } from "../../src/color/lab2xyz";

test("test lab2xyz - convert lab to xyz", () => {
    const xyz = lab2xyz({ l: 54.29, a: 80.82, b: 69.88 });

    expect(xyz).toEqual({ x: 42.98564143983255, y:  22.248803596716236, z: 1.838515853817947 });
});  