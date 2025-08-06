const container = document.querySelector(".container");
const gridSize = prompt("Select grid size");
function pixelGrid() {
  const height = 960 / gridSize;
  const width = 960 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const block = document.createElement("div");
    block.setAttribute("style", `height: ${height}px; width: ${width}px;`);
    container.appendChild(block);
  }
}

pixelGrid();
