const cvs = document.querySelector("#myCanvas");

const ctx = cvs.getContext("2d");

const rec = 100;

function updateCanvas() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;

  draw();
}

window.addEventListener("resize", updateCanvas);
window.addEventListener("load", updateCanvas);

function draw() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  const numX = Math.floor(cvs.width / rec);
  const numy = Math.floor(cvs.height / rec);

  for(let y = 0; y < numy; y++){
    for(let x = 0; x < numX; x++){
        const recX = x * rec;
        const recY = y * rec;

        ctx.strokeStyle = "red";
        ctx.strokeRect(recX)
    }
  }
}
