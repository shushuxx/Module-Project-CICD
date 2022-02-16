# Management System
React, node.js, AWS RDS를 사용한 CRUD + @
- node.js: express, axios, multer등을 활용해서 client에 REST API 제공
- React: MaterialUI로 기본적인 UI 구성, 필터함수로 search 기능 구현. node.js server가 제공하는 REST API를 사용해서 데이터베이스에 CRUD.
- AWS RDS: 프리티어 MySQL, 외부 시스템에선 HeidiSQL 등으로 접근 및 수정 가능.

## 기능 
### search
 - 서치 바에 입력한 문자열이 포함된 이름을 갖는 데이터만 출력하도록 단순한 필터구현
![search](https://user-images.githubusercontent.com/48829883/104590732-136b5980-56af-11eb-8bc6-42097d2eef8d.gif)

### Create
 - '고객 추가하기' 버튼으로 Dialog를 띄워 폼 데이터를 받아서 POST방식으로 REST API 호출하여 데이터베이스에 입력한 데이터 추가 
 -  axios 모듈의 post를 사용해서 간편하게 구현
 ![create](https://user-images.githubusercontent.com/48829883/104590790-23833900-56af-11eb-80fe-db8cb808f475.gif)

### Read
 - GET방식으로 REST API 호출하여 데이터베이스에 있는 모든 데이터 가져옴.
 - fetch 함수 사용

### Delete
 - '삭제' 버튼으로 Dialog를 띄워 삭제여부 선택 후 DELETE방식으로 REST API 호출하여 데이터베이스에서 해당 데이터 삭제.
 - fetch 함수 사용
 ![delete](https://user-images.githubusercontent.com/48829883/104590752-16fee080-56af-11eb-8115-6892adc658c9.gif)


## 자세한 구현 설명
https://suuntree.tistory.com/328


 ## PS
 instructor : 나동빈 (https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw)