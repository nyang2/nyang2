
import { rgb2xyz } from "./rgb2xyz";
import { xyz2lab } from "./xyz2lab";
import { RGB, LAB } from "../../types";

export function rgb2lab (rgb: RGB): LAB {
    return xyz2lab(rgb2xyz(rgb));
}