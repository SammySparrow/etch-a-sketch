const container = document.querySelector(".container");
const gridSize = prompt("Select grid size");

function pixelGrid() {
  const height = 600 / gridSize;
  const width = 600 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const block = document.createElement("div");
    block.setAttribute("style", `height: ${height}px; width: ${width}px;`);
    container.appendChild(block);
  }
}

pixelGrid();

let squares = container.querySelectorAll("div");

squares.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
  });
});
