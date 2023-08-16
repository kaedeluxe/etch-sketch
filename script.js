const createEl = (userEl) => document.createElement(userEl),
  query = (userQ) => document.querySelector(userQ),
  queryAll = (userQ) => document.querySelectorAll(userQ),
  container = query("#main-container"),
  createBtn = query("#create-btn"),
  inputNum = query("#slider-num"),
  inputDisplay = query(".range-display");
  // shakeBtn = query("#shake-btn");

let squareNum = 16,
  squareEl,
  squareAll;

document.addEventListener("DOMContentLoaded", function () {
  createSquares();
  squareAll = queryAll(".square");
  addEvent();
});

inputNum.oninput = function () {
  inputDisplay.textContent = this.value;
  createSquares();
  squareAll = queryAll(".square");
  addEvent();
};

function createSquares() {
  squareNum = inputNum.value;
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < squareNum * squareNum; i++) {
    let squarePct = 100 / squareNum;
    squareEl = createEl("div");
    squareEl.className = "square";
    squareEl.style.flex = `0 0 ${squarePct}%`;
    squareEl.style.height = `${squarePct}%`;
    squareEl.style.width = `${squarePct}%`;
    container.appendChild(squareEl);
  }
}

function hoverIn(currSquare) {
  currSquare.style.transition = `5ms`;
  currSquare.classList.add("square-hover");
}

function shakeScreen() {
  container.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-20px)" },
      { transform: "translateX(20px)" },
      { transform: "translateX(0)" },
    ],
    {
      duration: 350,
      iterations: 3,
    },
  );
  squareAll.forEach((square) => {
    square.style.transition = `${Math.random() * 15000}ms`;
    square.classList.remove("square-hover");
  });
}

function addEvent() {
  squareAll.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      hoverIn(square);
    });
  });
}

// shakeBtn.addEventListener("click", shakeScreen);
