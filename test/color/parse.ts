import { name } from "../../src/color/name";
import { parse, rgb } from "../../src/color";


test("test parse - rgb color string", () => {

    const rgb = parse(name('red'));

    expect(rgb.data).toEqual({ type: 'rgb', r: 255, g: 0, b: 0, alpha: 1 });
});  

test("test parse - rgb color", () => {

    const rgb = parse('rgba(255, 255, 255, 0)');

    expect(rgb.data).toEqual({ type: 'rgb', r: 255, g: 255, b: 255, alpha: 0 });
});  

test("test parse - hsl color", () => {

    const hsl = parse('hsla(255, 255, 255, 0)');

    expect(hsl.data).toEqual({ type: 'hsl', h: 255, s: 255, l: 255, alpha: 0 });
});  

test("test parse - LAB color", () => {

    const lab = parse('lab(255, 255, 255, 0)');

    expect(lab.data).toEqual({ type: 'lab', l: 255, a: 255, b: 255, alpha: 0 });
});  

test("test parse - non-expect color string", () => {

    try {
        const lab = parse('abc(255, 255, 255, 0)');
    } catch (e) {
        expect(e.message).toEqual('ColorFunction.abc is not a function');
    }
});  

