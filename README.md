# nyang2

JS로 만드는 Bitmap 이미지 에디터 프로젝트 

# 이미지 편집을 위해서 구현해야할 것들 

* Color 변환 함수 
  * https://www.easyrgb.com/en/math.php  여기에 있는 공식을 JS 로 변환합니다. 
  * 변환하기 전에 전체 모듈 사용에 대한 방식이 필요하니 그것 먼저 설정하고 갈게요. 
* 이미지 Filter 알고리즘 
* 자체 UI 

# 기술스택 

* Javascript
* Webpack 빌드 
* Color 변환 함수는 자체 제작 
* 필터도 자체 제작 (알고리즘 힌트는 다른 곳에서 얻어올 수 있으려나?) 


# 구조 
```
config/
      webpack.common.js -> 웹팩 공용 설정 
      webpack.development.js  -> 개발용 웹팩 설정 
      webpack.js -> 빌드용 웹팩 설정 
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


