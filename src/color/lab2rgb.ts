import { lab2xyz } from "./lab2xyz";
import { xyz2rgb } from "./xyz2rgb";
import { LAB, RGB } from "../../types";

export function lab2rgb (lab: LAB): RGB {
    return xyz2rgb(lab2xyz(lab));
}