let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

function placeMarker(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      reset();
    } else if (checkDraw()) {
      alert("It's a draw!");
      reset();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function reset() {
  currentPlayer = 'X';
  for (let i = 0; i < 9; i++) {
    board[i] = '';
    document.getElementsByClassName('cell')[i].innerText = '';
  }
}

function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i * 3] !== '' && board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return true;
    }
  }

  // Check diagonals
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    return true;
  }
  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    return true;
  }

  // If no win condition is met, return false
  return false;
}

function checkDraw() {
  for (let i = 0; i < 9; i++) {
    if (board[i] === '') {
      return false;
    }
  }
  return true;
}
