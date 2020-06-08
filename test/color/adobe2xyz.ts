import { adobe2xyz } from "../../src/color/adobe2xyz";

test("test adobe2xyz - convert adobe to xyz", () => {

    const xyz = adobe2xyz({ r: 10, g: 20, b: 255 });

    expect(xyz).toEqual({ x: 18.934258643352297, y: 7.783397611279325, z: 99.13836831653705 });
});  

test("test adobe2xyz - convert adobe to xyz with wrong value(b: 300) ", () => {

    const xyz = adobe2xyz({ r: 10, g: 20, b: 300 });

    expect(xyz).toEqual({ x: 18.934258643352297, y: 7.783397611279325, z: 99.13836831653705 });
});  