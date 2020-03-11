import { rgb2xyz } from "../../src/color/rgb2xyz";

test("test rgb2xyz - convert rgb to xyz", () => {

    const xyz = rgb2xyz({ r: 10, g: 20, b: 255 });

    expect(xyz).toEqual({ x: 18.42533039631215, y: 7.784841573295703, z: 95.13924336021469 });
});  