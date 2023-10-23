// 1. 그래프
class Graph {
  $container = document.createElement("section");
  $graphDiv = document.createElement("div");

  states = [];
  constructor({ $target = new HTMLElement() }) {
    this.$graphDiv.classList.add("graph-container");
    this.$container.append(this.$graphDiv);

    $target.append(this.$container);
  }
  setStates(nextStates) {
    this.states = nextStates;

    this.renderGraph();
  }
  renderGraph() {
    this.$graphDiv.innerHTML = `
    <div class="graph-0">0</div>
    <div class="graph-100">100</div>
    ${this.states
      .map(
        ({ id, value }) =>
          `<div class="graph-bar" style="height: ${
            value * 2
          }px"><div class="graph-id">${id}</div></div>`
      )
      .join("")}
    `;
  }
}

export default Graph;
