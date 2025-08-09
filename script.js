const container = document.querySelector(".container");

function displayGrids(number) {
  for (let i = 0; i < number * number; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
    document.documentElement.style.setProperty("--cols", number);

    square.addEventListener("mouseenter", function () {
      document.documentElement.style.setProperty("--rgb", randomRGB());
      this.classList.toggle("hover");
    });
    square.addEventListener("mouseleave", function () {
      this.classList.toggle("hover");
    });
  }
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    let number = +prompt("Squares per side: ", 0);
    if (number > 100) number = 100;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.remove();
    });
    displayGrids(number);
  });
}


function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}


displayGrids(16);