// 4. 값 고급 편집
class AdvancedEdit {
  $container = document.createElement("section");
  $editTextArea = document.createElement("textarea");
  $advancedEditBtn = document.createElement("button");
  states = [];
  constructor({ $target = new HTMLElement(), onEditClick }) {
    this.onEditClick = onEditClick;

    this.$container.append(this.$editTextArea);

    this.$advancedEditBtn.innerText = "Apply";
    this.$container.append(this.$advancedEditBtn);

    $target.append(this.$container);

    this.$advancedEditBtn.addEventListener(
      "click",
      this.replaceStates.bind(this)
    );
    this.renderTextArea();
  }
  setStates = (nextStates) => {
    this.states = nextStates;

    this.renderTextArea();
  };
  renderTextArea() {
    this.$editTextArea.value = `[${this.states
      .map(
        ({ id, value }) => `
  {
    "id" : "${id}",
    "value" : ${+value}
  }`
      )
      .join(",")}
]`;
  }
  replaceStates(ev = new MouseEvent()) {
    ev.preventDefault();

    // 입력된 문자열이 유효한 json이 아니거나
    const json = this.$editTextArea.value;
    if (!this.isJsonString(json)) {
      this.setStates(this.states);
      return;
    }

    // 뭐 하나라도 잘못된 형식이면 원래대로 돌려놓습니다.
    const arr = JSON.parse(json);
    if (this.validateArray(arr)) {
      this.onEditClick(arr);
    } else {
      this.setStates(this.states);
    }
  }
  isJsonString(str) {
    try {
      var json = JSON.parse(str);
      return typeof json === "object";
    } catch (err) {
      alert("올바른 JSON 형식으로 작성해주세요.");
      console.error(err.message);
      return false;
    }
  }

  validateArray(arr) {
    const idSet = new Set(); // 중복된 id를 체크하기 위한 Set 생성

    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];

      if (
        Object.keys(obj).length !== 2 ||
        !obj.hasOwnProperty("id") ||
        !obj.hasOwnProperty("value")
      ) {
        const errorMsg =
          "에러: 객체는 'id'와 'value' 프로퍼티만 가져야 합니다.";
        alert(errorMsg);
        console.error(errorMsg);
        return false;
      }

      if (typeof obj.id !== "string" || typeof obj.value !== "number") {
        const errorMsg =
          "에러: 'id' 프로퍼티는 문자열이어야 하고, 'value' 프로퍼티는 숫자여야 합니다.";
        alert(errorMsg);
        console.error(errorMsg);
        return false;
      }

      if (obj.value < 0 || obj.value > 100) {
        const errorMsg =
          "에러: 'value' 프로퍼티의 값은 0에서 100 사이의 값이어야 합니다.";
        alert(errorMsg);
        console.error(errorMsg);
        return false;
      }

      if (idSet.has(obj.id)) {
        const errorMsg = `에러: 중복된 'id' 값 '${obj.id}'이(가) 있습니다.`;
        alert(errorMsg);
        console.error(errorMsg);
        return false;
      }

      // 중복된 id를 Set에 추가
      idSet.add(obj.id);
    }

    return true;
  }
}

export default AdvancedEdit;
