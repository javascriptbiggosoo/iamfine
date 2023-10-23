// 3. 값 추가
class AddValue {
  $container = document.createElement("section");
  $idInput = document.createElement("input");
  $valueInput = document.createElement("input");
  $addBtn = document.createElement("button");

  states = [];
  constructor({ $target = new HTMLElement(), onAddClick, isIdAlreadyUsed }) {
    this.onAddClick = onAddClick;
    this.isIdAlreadyUsed = isIdAlreadyUsed;

    this.$idInput.placeholder = "id";
    this.$idInput.classList.add("id-input");
    this.$container.append(this.$idInput);

    this.$valueInput.placeholder = "value";
    this.$valueInput.classList.add("value-input");
    this.$valueInput.type = "number";
    this.$valueInput.min = 0;
    this.$valueInput.max = 100;
    this.$container.append(this.$valueInput);

    this.$addBtn.innerText = "Add";
    this.$container.append(this.$addBtn);

    $target.append(this.$container);

    // 이벤트핸들러의 `this`는 타겟 엘리먼트가 되므로 `.bind(this)`를 사용합니다.
    this.$addBtn.addEventListener("click", this.addState.bind(this));
  }
  addState(ev = new MouseEvent()) {
    ev.preventDefault();

    const idValue = this.$idInput.value;
    const valueValue = this.$valueInput.value;
    if (!(idValue && valueValue)) {
      const errMessage = `"id"와 "value"를 모두 입력해주세요.`;
      alert(errMessage);
      console.error(errMessage);
      return;
    }
    if (this.isIdAlreadyUsed(idValue)) {
      const errMessage = `"id" "${idValue}"가 이미 존재합니다.`;
      alert(errMessage);
      console.error(errMessage);
      return;
    }
    if (valueValue < 0 || valueValue > 100) {
      const errMessage = `"value"는 0~100 사이의 숫자여야 합니다.`;
      alert(errMessage);
      console.error(errMessage);
      return;
    }

    this.onAddClick({
      id: idValue,
      value: +valueValue,
    });
    this.$idInput.value = "";
    this.$valueInput.value = "";
  }
}

export default AddValue;
