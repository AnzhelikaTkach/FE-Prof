const cvs = document.querySelector("#myCanvas");
const range = document.querySelector("#plot_size");

cvs.width = 500;
cvs.height = 500;

const ctx = cvs.getContext("2d");

class Plot {
  static size = 50;
  static plots = [];

  static change_size(ctx, value) {
    Plot.size = value;
    ctx.clearRect(0, 0, 500, 500);
    this.plots.forEach((plot) => {
      plot.render(ctx);
    });
  }
  constructor(x_list, func, line_color = "orange") {
    this.x_list = x_list;
    this.func = func;
    this.line_color = line_color;
    Plot.plots.push(this);
  }

  render(ctx) {
    ctx.strokeStyle = this.line_color;
    ctx.beginPath();
    this.x_list.forEach((x) => {
      const y = this.func(x);
      ctx.lineTo(x * Plot.size + 250, y * Plot.size + 250);
    });
    ctx.stroke();
  }
}

range.addEventListener("input", (e) => {
  Plot.change_size(ctx, e.target.value);
});

// Array
// ...

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combyArr = [...arr1, "stop", ...arr2];
// console.log(combyArr)

const x = [...new Array(10000)].map((_, index) => index * 0.01 - 50);
// console.log(x)

const tan = new Plot(x, (x) => -(x ** 2), "green");
tan.render(ctx);

const sin = new Plot(x, Math.sin);
sin.render(ctx);
