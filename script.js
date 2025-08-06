const container = document.querySelector(".container");
const newGrid = document.querySelector("#new-grid");
const reset = document.querySelector("#reset");

let gridSize = 16;

function pixelGrid(size) {
  const height = 600 / size;
  const width = 600 / size;
  for (let i = 0; i < size * size; i++) {
    const block = document.createElement("div");
    block.setAttribute(
      "style",
      `height: ${height}px; width: ${width}px; opacity: 0;`
    );
    container.appendChild(block);
  }

  let squares = container.querySelectorAll("div");

  squares.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      let randomHSL = Math.floor(Math.random() * 359);
      e.target.style.background = `hsla(${randomHSL}, 100%, 50%)`;

      let opacity = getComputedStyle(e.target).getPropertyValue("opacity");
      let maxOpacity = Math.min(Number(opacity) + 0.1, 1);
      e.target.style.opacity = maxOpacity;
    });
  });

  reset.addEventListener("click", () => {
    squares.forEach((div) => {
      div.style.background = "";
    });
  });
}

pixelGrid(gridSize);

newGrid.addEventListener("click", () => {
  container.replaceChildren();
  gridSize = prompt("Enter new grid size (less than 100)");
  while (gridSize > 100 || gridSize < 1) {
    gridSize = prompt("Invalid choice, enter a new grid size");
  }
  pixelGrid(gridSize);
});
