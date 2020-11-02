console.log("my first finite element model");

const ctx = document.getElementById("myCanvas").getContext("2d");
console.log(ctx);



class Element {
  constructor(alive, x, y, w, h) {
    this.alive = alive;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.counter = 0;
    this.neighbours = [];
    // add properties and set them to inputs here
    // needed properties x, y, x_v, y_v,
  }
  draw() {
    ctx.beginPath();
    if (this.alive) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "grey";
    }
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();

  }

}


let elements = [];
const size = 5;

//function triggered by loading page
function setup() {

  // activating an animation (runs over and over)
  // window.requestAnimationFrame(draw);
}

let counter = 0;

function draw() {
  ctx.clearRect(0, 0, 500, 500);
  console.log(elements)
  //window.requestAnimationFrame(draw);
}
