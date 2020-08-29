
import { hsl2rgb } from "../../src/color/hsl2rgb";

test("test hsl2rgb - convert hsl to rgb", () => {

    const rgb = hsl2rgb({ h: 0.6598639455782311, s: 1, l: 0.5196078431372549 });

    expect(rgb).toEqual({ r: 10, g: 20, b: 255 });
});  