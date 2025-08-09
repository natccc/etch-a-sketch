const container = document.querySelector(".container");
const numberBtn = document.querySelector("#number-btn");
const clearBtn = document.querySelector("#clear-btn");

function displayGrids(number) {
  document.documentElement.style.setProperty("--cols", number);
  // container.innerHTML = "";
  for (let i = 0; i < number * number; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");

    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = randomRGB();
    });
    square.addEventListener("clear", function (e) {
      e.currentTarget.style.backgroundColor = "white";
    });
  }
}

numberBtn.addEventListener("click", function () {
  let number = +prompt("Squares per side: ", 16);
    if (number > 100) number = 100;
    container.innerHTML=""
  displayGrids(number);
});

clearBtn.addEventListener("click", () => {
  document
    .querySelectorAll(".square")
    .forEach((sq) => sq.dispatchEvent(new Event("clear")));
});

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

displayGrids(16);
