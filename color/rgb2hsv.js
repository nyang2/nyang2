export function rgb2hsv(r, g, b) {
  if (arguments.length === 1) {
    var { r, g, b } = arguments[0];
  }

  const rAbs = r / 255;
  const gAbs = g / 255;
  const bAbs = b / 255;

  const max = Math.max(rAbs, gAbs, bAbs);
  const min = Math.min(rAbs, gAbs, bAbs);
  const delta = max - min;

  if (delta === 0) {
    return {
      h: 0,
      s: 0,
      v: 0
    };
  }

  let h = 0;
  const s = delta / max;
  const v = max;

  if (rAbs === max) {
    h = ((gAbs - bAbs) / delta) * 60;
  } else if (gAbs === max) {
    h = ((bAbs - rAbs) / delta + 2) * 60;
  } else if (bAbs === max) {
    h = ((rAbs - gAbs) / delta + 4) * 60;
  }

  if (h < 0) {
    h += 360;
  }

  return {
    h,
    s,
    v
  };
}
