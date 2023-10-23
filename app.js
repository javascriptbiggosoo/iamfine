import AddValue from "./AddValue/index.js";
import AdvancedEdit from "./AdvancedEdit/index.js";
import EditValue from "./EditValue/index.js";
import Graph from "./Graph/index.js";

class App {
  states = [];
  constructor({ $target = new HTMLElement() }) {
    this.graph = new Graph({ $target });
    this.editValue = new EditValue({
      $target,
      // arrow function으로 작성하지 않았기 때문에 `.bind(this)`를 해주지 않으면 this가 호출시점 스코프에서 결정됩니다.
      onDeleteClick: this.handleDeleteClick.bind(this),
      onEditClick: this.setStates.bind(this),
    });
    this.addValue = new AddValue({
      $target,
      onAddClick: this.handleAddClick.bind(this),
      isIdAlreadyUsed: this.isIdAlreadyUsed.bind(this),
    });
    this.advancedEdit = new AdvancedEdit({
      $target,
      onEditClick: this.setStates.bind(this),
    });

    this.setStates([
      { id: "dummy_1", value: 60 },
      { id: "dummy_2", value: 20 },
      { id: "dummy_3", value: 30 },
      { id: "dummy_4", value: 100 },
    ]);
  }
  // 클래스에서 function declaration을 이용하면 자동으로 `.ptorotype` 의 메소드로 포함되기 때문에 인스턴스를 아무리 만들어도 메소드는 늘어나지 않고 프로토타입 상속으로 받을 수 있는 이점이 생깁니다.
  setStates(nextStates) {
    this.states = nextStates;
    console.log(this.states);

    this.graph.setStates(this.states);
    this.editValue.setStates(this.states);
    this.advancedEdit.setStates(this.states);
  }
  handleDeleteClick(idx) {
    const newStates = [...this.states];
    newStates.splice(idx, 1);

    this.setStates(newStates);
  }
  handleAddClick(newState) {
    this.setStates([...this.states, newState]);
  }
  isIdAlreadyUsed(idToCheck) {
    const isUsed = this.states.some(({ id }) => {
      return id === idToCheck;
    });

    return isUsed;
  }
}

export default App;
