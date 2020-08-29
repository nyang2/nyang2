import { rgb2hsv } from "../../src/color";

test("test rgb2hsv - convert rgb to hsv", () => {

    const hsv = rgb2hsv({ r: 10, g: 20, b: 255 });

    expect(hsv).toEqual({ h: 0.6598639455782311, s: 0.9607843137254902, v: 1 });
});  