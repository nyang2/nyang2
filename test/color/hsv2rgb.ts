import { hsv2rgb } from "../../src/color/hsv2rgb";

test("test hsv2rgb - convert hsv to rgb", () => {

    const rgb = hsv2rgb({ h: 0.6598639455782311, s: 0.9607843137254902, v: 1 });  

    expect(rgb).toEqual({ r: 10, g: 20, b: 255 });
});  