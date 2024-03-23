// JavaScript for 2048 game

let board = [];
const size = 4;

function initializeBoard() {
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = 0;
    }
  }
  addNumber();
  addNumber();
}

function addNumber() {
  let options = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 0) {
        options.push({ x: i, y: j });
      }
    }
  }
  if (options.length > 0) {
    let spot = random(options);
    let r = Math.random(1);
    board[spot.x][spot.y] = r > 0.5 ? 2 : 4;
  }
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function move(direction) {
  let moved = false;
  switch (direction) {
    case 'up':
      for (let j = 0; j < size; j++) {
        let col = [];
        for (let i = 0; i < size; i++) {
          if (board[i][j] !== 0) {
            col.push(board[i][j]);
          }
        }
        col = combineCol(col);
        for (let i = 0; i < size; i++) {
          if (i < col.length) {
            if (board[i][j] !== col[i]) {
              moved = true;
            }
            board[i][j] = col[i];
          } else {
            board[i][j] = 0;
          }
        }
      }
      break;
      case 'down':
        transposeBoard();
        for (let j = 0; j < size; j++) {
          let col = [];
          for (let i = size - 1; i >= 0; i--) {
            if (board[i][j] !== 0) {
              col.push(board[i][j]);
            }
          }
          col = combineCol(col);
          for (let i = size - 1, k = 0; i >= 0; i--, k++) {
            if (k < col.length) {
              if (board[i][j] !== col[k]) {
                moved = true;
              }
              board[i][j] = col[k];
            } else {
              board[i][j] = 0;
            }
          }
        }
        transposeBoard(); // Transpose the board back
        break;
      
    case 'left':
      for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
          if (board[i][j] !== 0) {
            row.push(board[i][j]);
          }
        }
        row = combineRow(row);
        for (let j = 0; j < size; j++) {
          if (j < row.length) {
            if (board[i][j] !== row[j]) {
              moved = true;
            }
            board[i][j] = row[j];
          } else {
            board[i][j] = 0;
          }
        }
      }
      break;
    case 'right':
      for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = size - 1; j >= 0; j--) {
          if (board[i][j] !== 0) {
            row.push(board[i][j]);
          }
        }
        row = combineRow(row);
        for (let j = size - 1, k = 0; j >= 0; j--, k++) {
          if (k < row.length) {
            if (board[i][j] !== row[k]) {
              moved = true;
            }
            board[i][j] = row[k];
          } else {
            board[i][j] = 0;
          }
        }
      }
      break;
  }
  if (moved) {
    addNumber();
    updateBoard();
    checkWin();
    checkLose();
  }
}

function combineRow(row) {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row.splice(i + 1, 1);
    }
  }
  return row;
}

function combineCol(col) {
    for (let i = col.length - 1; i > 0; i--) {
      if (col[i] === col[i - 1]) {
        col[i] *= 2;
        col.splice(i - 1, 1);
      }
    }
    return col;
  }
  


function updateBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = ''; // Clear previous content

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = board[i][j] === 0 ? '' : board[i][j];
      gameBoard.appendChild(cell);
    }
  }
}

function checkWin() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 2048) {
        alert('You win!');
        return;
      }
    }
  }
}

function checkLose() {
  let movesPossible = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 0) {
        movesPossible = true;
        break;
      }
      if (i > 0 && board[i][j] === board[i - 1][j]) {
        movesPossible = true;
        break;
      }
      if (i < size - 1 && board[i][j] === board[i + 1][j]) {
        movesPossible = true;
        break;
      }
      if (j > 0 && board[i][j] === board[i][j - 1]) {
        movesPossible = true;
        break;
      }
      if (j < size - 1 && board[i][j] === board[i][j + 1]) {
        movesPossible = true;
        break;
      }
    }
    if (movesPossible) {
      break;
    }
  }
  if (!movesPossible) {
    alert('Game over! No more moves possible.');
  }
}

initializeBoard();
updateBoard();

// Handle user input
document.addEventListener('keydown', function(event) {
  let direction;
  switch (event.key) {
    case 'ArrowUp':
        direction = 'up';
        break;
      case 'ArrowDown':
        direction = 'down';
        break;
      case 'ArrowLeft':
        direction = 'left';
        break;
      case 'ArrowRight':
        direction = 'right';
        break;
      default:
        return; // Do nothing if the key is not an arrow key
    }
    move(direction);
  });
  
