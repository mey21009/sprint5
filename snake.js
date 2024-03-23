// JavaScript for Snake game

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let direction = 'right';
let food = generateFood();

function generateFood() {
  // Implement food generation logic
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
}

function drawSnake() {
  // Draw snake on the canvas
}

function drawFood() {
  // Draw food on the canvas
}

function moveSnake() {
  // Move snake based on current direction
}

function checkCollision() {
  // Check for collision with walls and itself
}

function eatFood() {
  // Check if snake eats the food and update its length
}

function changeDirection(newDirection) {
  // Change direction of the snake
}

function gameOver() {
  // Handle game over condition
}

function gameLoop() {
  moveSnake();
  if (checkCollision()) {
    gameOver();
    return;
  }
  eatFood();
  draw();
  setTimeout(gameLoop, 100);
}

gameLoop();
