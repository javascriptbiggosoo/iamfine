// 2. 값 편집
class EditValue {
  $container = document.createElement("section");
  $editTable = document.createElement("table");
  $editBtn = document.createElement("button");
  states = [];
  constructor({ $target = new HTMLElement(), onDeleteClick, onEditClick }) {
    this.onDeleteClick = onDeleteClick;
    this.onEditClick = onEditClick;

    this.$container.append(this.$editTable);

    this.$editBtn.innerText = "Apply";
    this.$container.append(this.$editBtn);

    $target.append(this.$container);

    this.$editTable.addEventListener("click", this.deleteValue.bind(this));
    this.$editBtn.addEventListener("click", this.editValue.bind(this));

    this.renderTable();
  }
  editValue(ev = new MouseEvent()) {
    ev.preventDefault();

    const $valueTds = document.querySelectorAll(".value-td");

    let isValid = true;
    const newStates = [...this.states];
    $valueTds.forEach((el, idx) => {
      const currValue = +el.innerText;
      if (!isFinite(currValue) || currValue < 0 || currValue > 100) {
        isValid = false;
      } else {
        newStates[idx].value = currValue;
      }
    });
    if (!isValid) {
      const errMessage = "값에는 숫자만 0~100 사이의 숫자값만 입력해주세요.";
      alert(errMessage);
      console.error(errMessage);
      this.setStates(this.states);
    }

    this.onEditClick(newStates);
  }
  deleteValue(ev = new MouseEvent()) {
    if (ev.target.classList.contains("delete-td")) {
      const $deleteBtn = ev.target;

      this.onDeleteClick($deleteBtn.dataset.idx);
    }
  }
  // states가 변하면 다시 렌더링합니다.
  setStates(nextStates) {
    this.states = nextStates;

    this.renderTable();
  }
  renderTable() {
    this.$editTable.innerHTML = `  
        <thead>
          <tr>
            <th>ID</th>
            <th>값</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.states
            .map(
              ({ id, value }, idx) =>
                `<tr>
                <td>${id}</td>
                <td class="value-td" contentEditable="true">${value}</td>
                <td class="delete-td" data-idx="${idx}">삭제하기</td>
              </tr>`
            )
            .join("")}
        </tbody>
      `;
  }
}

export default EditValue;
