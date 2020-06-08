import { xyz2rgb } from "../../src/color/xyz2rgb";

test("test rgb2xyz - convert xyz to rgb", () => {

    const rgb = xyz2rgb({ x: 18.42533039631215, y: 7.784841573295703, z: 95.13924336021469 });

    expect(rgb).toEqual({"r": 10, "g": 20, "b": 255 });
});