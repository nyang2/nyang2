import { rgb2hsl } from "../../src/color/rgb2hsl";

test("test rgb2hsl - convert rgb to hsl", () => {

    const hsl = rgb2hsl({ r: 10, g: 20, b: 255 });

    expect(hsl).toEqual({ h: 0.6598639455782311, s: 1, l: 0.5196078431372549 });
});  