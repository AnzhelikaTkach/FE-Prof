const canvas = document.getElementById("myCanvas");
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = "#00ffff";

function degToRadian(degree) {
  const oneDeg = Math.PI / 180;
  return degree * oneDeg;
}

function render() {
  const now = new Date();
  const today = now.toDateString();
  const time = now.toLocaleTimeString("en-US", {
    hour12: false,
  });

  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const mil = now.getMilliseconds();

  const smoothSec = sec + mil / 1000;
  const smoothMin = min + smoothSec / 60;

  const gradient = ctx.createRadialGradient(250, 250, 6, 250, 250, 290);
  gradient.addColorStop(0, "rgba(75, 75, 139, 0.5)");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Hours start
  ctx.beginPath();
  ctx.arc(250, 250, 230, degToRadian(270), degToRadian(hours * 30 - 90));
  ctx.stroke();

  // Min start
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRadian(270), degToRadian(smoothMin * 6 - 90));
  ctx.stroke();

  // Sec start
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRadian(270), degToRadian(smoothSec * 6 - 90));
  ctx.stroke();

  ctx.font = "25px Verdana";
  ctx.fillStyle = "#00ffff";
  ctx.fillText(today, 150, 240);

  ctx.font = "25px Verdana";
  ctx.fillStyle = "#00ffff";
  ctx.fillText(`${time}:${mil}`, 160, 280);
}
setInterval(render, 10);
