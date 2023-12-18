### 소개

![chrome-capture-2023-11-21](https://github.com/Sovidi/togrocery/assets/133857264/ed5ddb8f-dc72-47e6-8a5b-8fc5b32e9d57)

현재 서버 교체작업중에 있어 약간의 오류 발생 가능성이 있습니다.


> 1인 가구가 늘며 개인적으로 시장을 보는 상황에 물가를 간편하게 확인하기 위한 앱을 고안하였습니다. 거기에 추가적으로 위치 기반 시스템을 적용하여 근처에 장을 보기 위한 사람을 찾는 매칭 기능을 추가한 것이 저희 장보는날 어플의 주요 기능이 되겠습니다.
> 

### 팀원

임채민 | 박예린 | 정용훈 | 김성태 | 김유진
-|-|-|-|-
팀장, 페이지 구상, 서버 및 데이터 처리, 각 페이지의 회원, 컨텐츠 데이터 교환용 서버 엔드포인트 설정| 개발팀장, 물품리스트 및 Favorite 담당| 로그인 담당 개발| 위치기반 서비스 담당 개발| 메인페이지 담당

### 개발기간

> 2023.10.01 ~ 2023.10.20
> 

### 개발환경

- Visual Studio Code
- Next.js
- SCSS
- HTML

### 플러그인

- 농산물진흥원 API
- MySQL
- MongoDB(NoSQL)
- KakapMap
- Swiper
- CloudType

### 개발이슈

> 본격적인 리액트 프레임워크 next.js 와, 엔드포인트가 내장된 점을 장점으로 서버와의 연결을 쉽게 접근하여 각종 데이터를 대부분 SSR(서버사이드랜더링) 에서 처리하였습니다.
> 

> 서버를 통해 온 데이터는 대부분 프론트 단에서 Context 로 중앙 처리하여 각 팀원이 데이터를 나눠 사용하기 용이하게 처리하였습니다.
> 

> 농촌진흥원의 API 를 사용하여 각종 농산물과 가격추이를 사용하여 리스트를 작성하고 해당 물품에 대해 Favorite 목록을 작성할 수 있게 로그인데이터와 연동하였습니다.
> 

> 핸드폰의 위치기반 접근과, 현재 위도 경도에 해당하는 도로명 주소 추출, 그리고 현재 위치 기반으로 일정거리 안에서만 게시물이 보이게 하는 공식을 사용하여 위치기반 매칭을 구현하였습니다.
>
