const cvs = document.querySelector("#myCanvas");
cvs.width = 500;
cvs.height = 500;

const ctx = cvs.getContext("2d");


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function handleclick() {
  const x = getRandomNum(0, cvs.width);
  const y = getRandomNum(0, cvs.height);

  ctx.clearRect(0, 0, cvs.width, cvs.height);

  ctx.beginPath();
  ctx.arc(x,y, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

cvs.addEventListener("click", handleclick);