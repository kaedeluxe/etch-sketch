const createEl = (userEl) => document.createElement(userEl),
  query = (userQ) => document.querySelector(userQ),
  queryAll = (userQ) => document.querySelectorAll(userQ),
  container = query('#main-container'),
  createBtn = query('#create-btn'),
  inputNum = query('#input-num');

let squareNum, squareEl, squareAll;

function createSquares() {
  if (inputNum.value >= 2 && inputNum.value <= 100) {
    squareNum = inputNum.value;
  } else {
    alert('Invalid range: please enter a number between 2 and 100');
    return;
  }
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < squareNum * squareNum; i++) {
    let squarePct = 100 / squareNum;
    squareEl = createEl('div');
    squareEl.className = 'square';
    squareEl.style.flex = `0 0 ${squarePct}%`;
    squareEl.style.height = `${squarePct}%`;
    squareEl.style.width = `${squarePct}%`;
    container.appendChild(squareEl);
  }
}

function hoverIn(currSquare) {
  currSquare.classList.add('square-hover');
}

function hoverOut(currSquare) {
  currSquare.classList.remove('square-hover');
}

function addEvent() {
  squareAll.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      hoverIn(square);
    });
    square.addEventListener('mouseleave', () => {
      hoverOut(square);
    });
  });
}

createBtn.addEventListener('click', () => {
  createSquares();
  squareAll = queryAll('.square');
  addEvent();
});
