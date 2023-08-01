function title(){
  const h1 = document.querySelector('h1');
  h1.style.display = 'flex';
  h1.style.justifyContent = 'center';
  h1.style.color = 'white';
  h1.style.fontFamily = 'monospace';
  h1.style.fontSize = '50px';
}

function setupCanvas(canvas) {
  canvas.style.border = '2px solid lightblue';
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.position = 'absolute';
  canvas.style.left = '50%';
  canvas.style.top = '50%';
  canvas.style.transform = 'translate(-50%, -50%)';
}

const canvas = document.getElementById('canvas');
title()
setupCanvas(canvas);

const ctx = canvas.getContext('2d');

let player = {
  size: 50,
  positionX: 0,
  positionY: 0,
};

let energy = {
  size: 20,
  positionX: 100,
  positionY: 100,
};

let playerSpeed = 5;

let keysPressed = {
  up: false,
  down: false,
  left: false,
  right: false,
};

function movePlayer() {
  if (keysPressed.up && player.positionY != 0) {
    player.positionY -= playerSpeed;
  }
  if (keysPressed.down && player.positionY != canvas.height - player.size) {
    player.positionY += playerSpeed;
  }
  if (keysPressed.left && player.positionX != 0) {
    player.positionX -= playerSpeed;
  }
  if (keysPressed.right && player.positionX != canvas.width - player.size) {
    player.positionX += playerSpeed;
  }
}

function keyUpHandler(event) {
  if (event.key == 'ArrowUp') {
    keysPressed.up = false;
  }
  if (event.key == 'ArrowDown') {
    keysPressed.down = false;
  }
  if (event.key == 'ArrowLeft') {
    keysPressed.left = false;
  }
  if (event.key == 'ArrowRight') {
    keysPressed.right = false;
  }
}

function keyDownHandler(event) {
  if (event.key == 'ArrowUp') {
    keysPressed.up = true;
  }
  if (event.key == 'ArrowDown') {
    keysPressed.down = true;
  }
  if (event.key == 'ArrowLeft') {
    keysPressed.left = true;
  }
  if (event.key == 'ArrowRight') {
    keysPressed.right = true;
  }
}

function drawPlayer(player) {
  ctx.fillStyle = 'white';
  ctx.fillRect(player.positionX, player.positionY, player.size, player.size);
}

function drawEnergy() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(energy.positionX, energy.positionY, energy.size, energy.size);
}

addEventListener('keydown', keyDownHandler);
addEventListener('keyup', keyUpHandler);

function run() {
  movePlayer();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(player);
  requestAnimationFrame(run);
}

run();
