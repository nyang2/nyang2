import { CMYKColorListType, CMYColorType, CMYKColorType } from './';

export function cmyk2cmy(...arg: CMYKColorListType | [CMYKColorType]) : CMYColorType {
	let c:number = 0;
	let m:number = arg[1] || 0;
	let y:number = arg[2] || 0;
	let k:number = arg[3] || 0;
	if (typeof arg[0] === 'object') {
		c = arg[0].c;
		m = arg[0].m;
		y = arg[0].y;
		k = arg[0].k;
	} else {
		c = arg[0];
	}
	return {
		c: c * (1 - k) + k,
		m: m * (1 - k) + k,
		y: y * (1 - k) + k
	};
};
