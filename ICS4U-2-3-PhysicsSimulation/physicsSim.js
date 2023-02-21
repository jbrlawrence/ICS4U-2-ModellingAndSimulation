console.log("my first physics simulation");

const ctx = document.getElementById("myCanvas").getContext("2d");
console.log(ctx);
const GRAVITY = .1;

class Particle {
  constructor(x, y, x_v, y_v, x_a, y_a, size) {
    this.x = x;
    this.y = y;
    this.x_v = x_v;
    this.y_v = y_v;
    this.x_a = x_a;
    this.y_a = y_a;
    this.size = size;
    // add properties and set them to inputs here
    // needed properties x, y, x_v, y_v,
  }

  draw(){
  //  console.log(ctx)
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue"
    ctx.arc(this.x, this.y, this.size,0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  // add draw method here, use properties and an input that gives the rendering context
  move(){
    this.x = this.x + this.x_v;
    this.y = this.y + this.y_v;

    this.x_v = this.x_v + this.x_a;
    this.y_v = this.y_v + this.y_a;

  }
  bounce(){
    if (this.y > 500){
      this.y_v = -1*this.y_v;
    }
  }
  // use x, y, size to draw using canvas context methods
  /// add move method here, math is x = x+x_v, x_v = x_v + x_a (same for y)
}

let myPart = new Particle(200, 100, 2, -2, 0, GRAVITY, 5);

let parts = [];

//function triggered by loading page
function setup() {
  for (let i = 0; i < 100; i++){
    parts.push(new Particle(200,100,Math.random()*3-1,-3*Math.random()*2,0,GRAVITY,5));
  }
  console.log(myPart.x);
  myPart.draw();
  // activating an animation (runs over and over)
  window.requestAnimationFrame(draw);
}

let counter = 0;

function draw() {
  ctx.clearRect(0,0,500,500);
  counter++;
  myPart.move();
  myPart.draw();
  myPart.bounce();
  for (let i in parts){
    parts[i].move();
    parts[i].draw();
    parts[i].bounce();

  }

  console.log(counter);
  window.requestAnimationFrame(draw);
}
