import App from "./app.js";

// HTML element는 다른 변수와 구분하기위해 앞에 $를 붙였습니다.
const $body = document.querySelector("body");

// OOP로 SPA를 작성합니다.
new App({ $target: $body });
