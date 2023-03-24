const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');

let currentPlayer = 'X';
let gameIsOver = false;
let boardState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(e) {
  const cell = e.target;
  const index = cell.id;
  
  if (boardState[index] !== '' || gameIsOver) {
    return;
  }
  
  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);
  
  checkWin();
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = currentPlayer + "'s turn";
}

function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    
    if (boardState[a] !== '' && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      status.textContent = boardState[a] + ' wins!';
      gameIsOver = true;
      return;
    }
  }
  
  if (boardState.indexOf('') === -1) {
    status.textContent = "It's a tie!";
    gameIsOver = true;
    return;
  }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
status.textContent = currentPlayer + "'s turn";
// This code creates a Tic Tac Toe game that can be played in a web browser. The HTML code defines the structure of the game board, the CSS code styles the game board and cells, and the JavaScript code handles the game logic and user interactions. When a player clicks on a cell, the script checks if the cell has already been played and if the game is over. If the cell is empty and the game is not over, the script updates the board state, displays the player's symbol on the cell, checks if the player has won, and switches to the other player's turn.