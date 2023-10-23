# 아이엠파인 SD팀 지원자 김진영

> 주석없이 코드 자체로 설명이 되게끔 작성하려고 노력했습니다.
> 
> 그러나 코드량이 많기 때문에 빠르게 코드의 의도를 파악하실 수 있도록 일부 코드에 주석을 달아두었습니다.
> 
> 편의상 코드 작성은
> 
> `AddValue` -> `EditValue` -> `AdvancedEdit` -> `Graph`
> 
> 순으로 작성하였기 때문에 주석 설명 또한 앞에서 작성한 부분은 재차 언급하지 않았습니다.

## 과제 결과물

https://javascriptbiggosoo.github.io/iamfine/

## 과제 진행 중 검색 내역

과제 진행에서의 성실성을 보여주기 위해 진행중 검색한 키워드를 모두 남겼습니다.

### **ChatGPT 검색**

- **(그래프 전용 element가 있을지도 모른다고 생각했습니다.)** html 요소만으로 그래프 차트를 그릴 수 있나?

  원하는 답은 얻지 못했습니다.
- td 요소의 텍스트를 유저가 수정할 수 있도록 할 수 있나?

  `contentEditable` property를 알아냈습니다.
- flex에서 모든 자식 요소들이 컨테이너의 하단에 위치하도록 하려면 어떻게 해야하지?
  ```css
  .container {
    display: flex;
    flex-direction: column; /* 컨테이너 내의 요소들을 세로로 배치 */
    align-items: flex-end; /* 자식 요소들을 세로 방향으로 하단에 정렬 */
  }
  ```
- **(구현 난도가 어렵진 않지만 시간 단축을 위해 부탁했습니다.)** 배열을 검사하는 함수를 만들어줘.

  모든 요소는 "id", "value" 프로퍼티만 가지고 있는 객체야.
  
  이 두 프로퍼티만 가지고 있고 다른 프로퍼티는 없어.

  "id" 프로퍼티의 값은 string 타입이고 "value" 프로퍼티의 값은 number 타입이어야해

  "value"의 값은 0~100 사이의 값이어야해

  ```jsx
  function validateArray(arr) {
  	// 배열의 모든 요소에 대한 검사
  	...
  }
  ```

  - **(추가 요청)** 각 false 이전에 왜 false가 발생했는지 alert과 console에서 각각 에러메세지가 나오도록해줘
    ```jsx
    function validateArray(arr) {
    	...
    }
    ```
  - **(추가 요청)** 위에 작성해준 validateArray 함수에서 중복된 id를 허용하지 않는 조건도 추가해줘
    ```jsx
    validateArray(arr) {
        const idSet = new Set(); // 중복된 id를 체크하기 위한 Set 생성
    		...
    }
    ```

### **Google 검색**

- textarea 크기 고정
  
  `[resize` 프로퍼티](https://velog.io/@leemember/CSS-textarea-%ED%81%AC%EA%B8%B0-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0) 발견
- json 판별
  
  `[isJSonString` 함수](https://blog.voidmainvoid.net/205) 참고
- 이 외 간단한 것들: "mdn table", "classlist contains", "html dataset"
