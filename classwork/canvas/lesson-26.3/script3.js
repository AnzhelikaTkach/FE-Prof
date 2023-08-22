const cvs = document.querySelector("#myCanvas");
cvs.width = 400;
cvs.height = 400;

const ctx = cvs.getContext("2d");

const blockSize = 20;

let snakeDirection = "right";

let snakeX = 0;
let snakeY = 0;

function updateGame() {
  if (snakeDirection === "right") {
    snakeX += blockSize;
  } else if (snakeDirection === "left") {
    snakeX -= blockSize;
  } else if (snakeDirection === "up") {
    snakeY -= blockSize;
  } else if (snakeDirection === "down") {
    snakeY += blockSize;
  }

  if (snakeX < 0 || snakeX >= cvs.width || snakeY < 0 || snakeY >= cvs.height) {
    alert("Finish game!");
    snakeX = 0;
    snakeY = 0;
  }

  ctx.clearRect(0, 0, cvs.width, cvs.height);

  ctx.fillRect(snakeX, snakeY, blockSize, blockSize);

  setTimeout(updateGame, 200);
}

function handleKeyPress(e) {
  // console.log(e.key);
  if (e.key === "ArrowRight" && snakeDirection !== "left") {
    snakeDirection = "right";
  } else if (e.key === "ArrowLeft" && snakeDirection !== "right") {
    snakeDirection = "left";
  } else if (e.key === "ArrowUp" && snakeDirection !== "down") {
    snakeDirection = "up";
  } else if (e.key === "ArrowDown" && snakeDirection !== "up") {
    snakeDirection = "down";
  }
}

document.addEventListener("keydown", handleKeyPress);

updateGame();
