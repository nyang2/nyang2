import { xyz2adobe } from "../../src/color/xyz2adobe";

test("test adobe2xyz - convert xyz to adobe", () => {

    const adobe = xyz2adobe({ x: 18.934258643352297, y: 7.783397611279325, z: 99.13836831653705 });

    expect(adobe).toEqual({"r": 10, "g": 20, "b": 255 });
});