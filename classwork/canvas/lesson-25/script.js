const canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});

// getContext - 2d rendering

// function draw(){
//     const ctx = canvas.getContext("2d");

//   // strokeRect(x, y, width, height)

//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 2
//     ctx.strokeRect(10,10,200,100);
//     ctx.strokeStyle = "green";
//     ctx.strokeRect(canvas.width - 10 - 200, 10, 200, 100)

//     // fillRect(x, y, width, height)

//     ctx.fillStyle = "purple";
//     ctx.globalAlpha = 0.5;
//     ctx.shadowColor = "black";
//     ctx.shadowBlur = 2;
//     ctx.shadowOffsetX = 5;
//     ctx.shadowOffsetY = 5;
//     ctx.fillRect(30, 150, 200, 100);

// }

// draw();

// Задание: отрисовать прямоугольник в каждом углу канваса,  с отступами по 10 единиц от каждой стороны. Используйте так же стили для этих прямоугольников.

// function draw(){
//     const ctx = canvas.getContext("2d");

//   // strokeRect(x, y, width, height)

//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 2
//     ctx.strokeRect(10,10,200,100);
//     ctx.strokeStyle = "blue";
//     ctx.strokeRect(canvas.width - 10 - 200, 10, 200, 100)

//     // fillRect(x, y, width, height)

//     ctx.fillStyle = "orange";
//     ctx.globalAlpha = 0.5;
//     ctx.shadowColor = "black";
//     ctx.shadowBlur = 2;
//     ctx.shadowOffsetX = 5;
//     ctx.shadowOffsetY = 8;
//     ctx.fillRect(10, canvas.height- 10 - 100, 200, 100);

//     ctx.fillStyle = "tomato";
//     ctx.globalAlpha = 0.5;
//     ctx.shadowColor = "black";
//     ctx.shadowBlur = 6;
//     ctx.shadowOffsetX = 10;
//     ctx.shadowOffsetY = 5;
//     ctx.fillRect(canvas.width - 10 - 200, canvas.height- 10 - 100, 200, 100);
// }

// draw();

//////////////////////////////////////////////////////

// function draw(){
//     const ctx = canvas.getContext("2d");

//     const num = 10;
//     const rectH = canvas.height / num;
//     const rectW = canvas.width / num;
//     for (let i = 0 ; i < num; i++){
//         const singleRectH = rectH * (i + 1);
//         const singleRectX = rectW * i;
//         const singleRectY = canvas.height - singleRectH;

//         ctx.fillStyle = "lightblue";
//         ctx.fillRect(singleRectX, singleRectY, rectW, singleRectH);
//     }
// }

// draw();

//////////////////////////////////////////////////////

// function draw(){
//     const ctx = canvas.getContext("2d");

//     const num = 10;
//     const squareGap = canvas.width / num / 2;
//     let squareSize = canvas.width / num;

//     for(let i = 0; i < num; i++) {
//         const squareX = canvas.width / 2 - squareSize / 2;
//         const squareY = canvas.height / 2 - squareSize / 2;

//         ctx.strokeRect(squareX, squareY, squareSize, squareSize);
//         squareSize += squareGap;
//     }
// }

// draw();

//////////////////////////////////////////////////////

// function draw(){
//     const ctx = canvas.getContext("2d");

//     ctx.beginPath();
//     ctx.moveTo(100, 100);
//     ctx.lineTo(200, 200);
//     ctx.lineTo(100, 200);
//     ctx.lineTo(100, 100);
    
//     ctx.strokeStyle = "orange";
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(500, 100);
//     ctx.lineTo(600, 200);
//     ctx.lineTo(450, 170);
    
//     ctx.closePath();
//     // ctx.stroke();
//     ctx.fill();

// }

// draw();

//////////////////////////////////////////////////////
// Задание. Отрисовать прямоугольник, который занимает весь размер экрана с отступами по 10 единиц от каждой стороны используя только линии.

function draw(){
    const ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(10, canvas.height - 10);
        ctx.lineTo(canvas.width - 10, canvas.height - 10);
        ctx.lineTo(canvas.width - 10, 10);
        ctx.closePath();

        ctx.strokeStyle = "orange";
        ctx.stroke();
}

draw();

//////////////////////////////////////////////////////

// arc(x, y, radius, startAngle, endEngle(false po chasovoy ctrelke, true))
// 0, 360

// function draw(){
//     const ctx = canvas.getContext("2d");

//     // Math.PI = 100;
//     // 2 * Math.PI
//     // ctx.beginPath();
//     // ctx.arc(200, 200, 170, 0, 2 * Math.PI);
//     // ctx.arc(200, 200, 170, 0, Math.PI);
//     // ctx.closePath();
//     // ctx.stroke();

//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     let radius = 10;
//     for(let i = 0; i < 10; i++){
//         ctx.beginPath();
//         ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//         ctx.stroke();
//         radius += 10;
//         ctx.closePath();
//     }

// }

// draw();

// Нарисовать окружности по краям канваса. Без отступов.

// function draw(){
//     const ctx = canvas.getContext("2d");

//         ctx.beginPath();
//         ctx.strokeStyle = "lightgreen";
//         ctx.arc(80, 80, 80, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.closePath();

//         ctx.beginPath();
//         ctx.strokeStyle = "red";
//         ctx.arc(canvas.width-80, 80, 80, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.closePath();

//         ctx.beginPath();
//         ctx.strokeStyle = "green";
//         ctx.arc(canvas.width-80, canvas.height - 80, 80, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.closePath();

//         ctx.beginPath();
//         ctx.fillStyle = "lightgreen";
//         ctx.arc(80, canvas.height - 80, 80, 0, 2 * Math.PI);
//         ctx.stroke();
//         ctx.closePath();

// }

// draw();

function draw(){
    const ctx = canvas.getContext("2d");

    const radius = 50;
    const startX = radius;
    const startY = radius;
    const endX = canvas.width - radius;
    const endY = canvas.height - radius;

    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill()
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(endX, startY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(endX, endY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(startX, endY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

}

draw();
