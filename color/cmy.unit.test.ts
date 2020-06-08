import { rgb2cmy } from './rgb2cmy';
import { cmy2cmyk } from './cmy2cmyk';
import { cmyk2cmy } from './cmyk2cmy';
import { cmy2rgb } from './cmy2rgb';

test("test cmy - convert rgb -> cmy -> cmyk", () => {
  const cmy = rgb2cmy({ r: 50, g: 102, b: 153 });
  const cmyk = cmy2cmyk(cmy);

  expect({
    c: Number(cmy.c.toFixed(2)),
    m: Number(cmy.m.toFixed(2)),
    y: Number(cmy.y.toFixed(2))
  }).toEqual({
    c: 0.8,
    m: 0.6,
    y: 0.4
  });

  expect({
    c: Number(cmyk.c.toFixed(2)),
    m: Number(cmyk.m.toFixed(2)),
    y: Number(cmyk.y.toFixed(2)),
    k: Number(cmyk.k.toFixed(2))
  }).toEqual({
    c: 0.67,
    m: 0.33,
    y: 0,
    k: 0.4
  });
});

test("test cmy - convert cmyk -> cmy -> rgb", () => {
  const cmy = cmyk2cmy({ c: 0.673202614379085, m: 0.33333333333333326, y: 0, k: 0.4 });
  const rgb = cmy2rgb(cmy);

  expect({
    c: Number(cmy.c.toFixed(2)),
    m: Number(cmy.m.toFixed(2)),
    y: Number(cmy.y.toFixed(2))
  }).toEqual({
    c: 0.8,
    m: 0.6,
    y: 0.4
  });
  expect({
    r: rgb.r,
    g: rgb.g,
    b: rgb.b
  }).toEqual({
    r: 50,
    g: 102,
    b: 153
  });
});
