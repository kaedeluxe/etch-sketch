const createEl = (userEl) => document.createElement(userEl),
  query = (userQ) => document.querySelector(userQ),
  container = query('#main-container'),
  createBtn = query('#create-btn');

let squaresNum = 16;

function createSquares() {
  for (let i = 0; i < (squaresNum * squaresNum); i++) {
    let square = createEl('div'),
      squarePct = 100 / squaresNum;
      // containPct = squarePct * squaresNum;
    square.className = 'square';
    square.style.flex = `0 0 ${squarePct}%`;
    square.style.height = `${squarePct}%`;
    square.style.width = `${squarePct}%`;
    // container.style.width = `${containPct}%`;
    container.appendChild(square);
  }
};

createSquares();