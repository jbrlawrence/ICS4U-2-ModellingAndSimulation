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
  setNeighbours(n) {
    this.neighbours.push(n);
  }
  draw() {
    if (this.counter > 0){
      this.alive = false;
    }
    ctx.beginPath();
    if (this.alive) {
      ctx.fillStyle = "grey";
    } else {
      ctx.fillStyle = "red";
    }
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();

  }
  checkNeighbours() {
    this.counter = 0;
    for (let i in this.neighbours) {
      if (!this.neighbours[i].alive) {
        this.counter++;
      }

    }

  }

}


let elements = [];
const size = 5;

//function triggered by loading page
function setup() {
  /// creating our elements
  for (let i = 0; i < 500; i = i + size) {
    elements.push(new Element(true, i, 250, size, size));
  }
  // add neighbours to elements
  elements[0].setNeighbours(elements[1]);
  elements[elements.length - 1].setNeighbours(elements[elements.length - 2]);
  for (let i = 1; i < elements.length - 1; i++) {
    elements[i].setNeighbours(elements[i - 1]);
    elements[i].setNeighbours(elements[i + 1]);
  }
  console.log(elements);
  elements[49].alive = false;
  for (let i in elements) {
    elements[i].draw();
  }
  console.log(elements[20]);
  // activating an animation (runs over and over)
  // window.requestAnimationFrame(draw);
}

let counter = 0;

function draw() {
  ctx.clearRect(0, 0, 500, 500);
  for (let i in elements){ // (let i = 0; i < elements.length; i = i+1)
    elements[i].checkNeighbours();
  }
  for (let i in elements){
    elements[i].draw();
  }
  console.log(elements)
  //window.requestAnimationFrame(draw);
}
