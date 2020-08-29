# nyang2

TypeScript 만드는 Bitmap 이미지 에디터 프로젝트 


# Color 정의 

adobe, rgb, hsl, hsv, lab, xyz, cmyk 의 함수를 지원합니다. 

```js
rgb(255, 0, 0) => { r: 255, g: 0, b: 0}
hsl(1, 0, 0) => { h: 1, s: 0, l: 0}
hsv(1, 0, 0) => { h: 1, s: 0, v: 0}
lab(100, -100, 127) => { l: 100, a: -100, b: 127}
```

# Color 파서 

간단한 컬러 문자열을 파싱할 수 있는 함수를 제공합니다. 

```js
parse('rgb(255, 0, 0)') => rgb(255, 0, 0) => { r: 255, g: 0, b: 0 }
```

parse 함수에 들어온 문자열은 기본적으로 위에 정의된 Color 정의 함수를 실행하는 구조로 되어 있습니다. 내부적으로 자바스크립트의 동적 함수 정의를 사용하여 구현 되어 있어서 함수 정의만 할 수 있으면 좀 더 쉽게 파서를 구현할 수 있습니다. 


# Color 변환 함수 

https://www.easyrgb.com/en/math.php  여기에 있는 공식을 TypeScript 로 변환합니다. 

nyang2는 아래의 컬러 변화 함수를 제공합니다. 

* adobe2xyz
* cmy2cmyk
* cmy2rgb
* cmyk2cmy
* hsl2rgb
* hsv2rgb
* lab2rgb
* lab2xyz
* name
* rgb2cmy
* rgb2hsl
* rgb2hsv
* rgb2lab
* rgb2xyz
* xyz2adobe
* xyz2lab
* xyz2rgb 


# 이미지 편집을 위해서 구현해야할 것들 
* 이미지 Filter 알고리즘 
* 자체 UI 

# 구조 
```
config/
      webpack.common.js -> 웹팩 공용 설정 
      webpack.dev.js  -> 개발용 웹팩 설정 
      webpack.prod.js -> 빌드용 웹팩 설정 
src/
    color/ -> 컬러 함수 모음 
          rgb2hsv.js  
          ....
    filter/ -> 필터 함수 모음 
          ....
    ui/ -> UI 함수, 라이브러리 모음 
       ....
    index.js -> 모든 라이브러리 시작점 
```

# 개발

```
npm install

npm run dev     -> webpack-dev-server 기준으로 작업 
```

# 빌드 

```
npm install 
npm run build 
```


# License : MIT 

