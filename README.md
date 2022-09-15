# 시작 : $ npm run dev

# npm init 생성

## index.js 생성

- nodeJS 실행 명령어
- $ node index.js

---[ | ]
ㄴ

# installing Express

- $ npm i express
- .gitignore 파일 생성 후 /node_modules 파일 추가

---

# the Tower of Babel

- index.js 에 require 변수를 선언해주다.
- $ npm install --save-dev @babel/core
- $ npm install --save-dev @babel/preset-env
- babel.config.json 파일 생성. 최상위루트에, 입력 후 저장
  '''{
  "presets": ["@babel/preset-env"]
  }'''

## babel 사용법

'''require("@babel/core").transform("code",{presets:["@babel/preset/env"
],});'''

- bable/node 추가
- $ npm install --save-dev @babel/node
- package.json 의 script에 "dev" 를 추가하고 설명으로 "babel-node index.js"라고 써준다.원래는 "node index.js" 였는데 babel 이 적용된 node 라서 이렇게 된 것이다. 오른쪽엔 실행된 파일이 들어오는데 경로가 설정되면 같이 변경해주어야한다.

# Nodemon (알아서 재시작 해주는 프로그램 매번 npm run dev 칠 필요 없따)

- $ npm i nodemon --save-dev
- 수정해주었던 "dev" 앞에 "nodemon --exexc" 을 추가 해준다. npm 공식문서에 사용법이 나와있다.
- $ nodemon index.js

# NodeJS 서버 생성하기

- src 폴더 생성 -> 모든 app을 안에다 넣는다. (고작 index 파일이지만..)
- 많이 놀랐을 nodemon 을 위해 package.json 의 경로를 수정해준다. (dev 의 index.js -> src/index.js)
- express import 해준다.
- index.js => server.js
