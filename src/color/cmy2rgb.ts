import { CMY, RGB } from "../../types";

export function cmy2rgb(cmy: CMY) : RGB {
  const {c, m, y} = cmy; 

  return {
    r: Math.round((1 - Math.max(0, Math.max(c))) * 255),
    g: Math.round((1 - Math.max(0, Math.max(m))) * 255),
    b: Math.round((1 - Math.max(0, Math.max(y))) * 255)
  };
};
