import { RGB, CMY } from "../../types";

export function rgb2cmy(rgb: RGB) : CMY {
  const { r, g, b} = rgb; 

  return {
    c: 1 - (Math.max(0, Math.min(255, Math.round(r))) / 255),
    m: 1 - (Math.max(0, Math.min(255, Math.round(g))) / 255),
    y: 1 - (Math.max(0, Math.min(255, Math.round(b))) / 255)
  };
};
