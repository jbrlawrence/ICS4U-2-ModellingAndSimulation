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
    ctx.fillStyle = "red"
    if (this.alive) {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "grey";
    }
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();

  }
  neighbourAdd(n) {
    this.neighbours.push(n);
  }
  neighbourCheck(){
    this.counter = 0;
    //console.log(this.neighbours)
    for (let i in this.neighbours){
      if (this.neighbours[i].alive){
        this.counter++;
      }
    }
  }
  decision(){
    if (this.counter < 8){
      this.alive = false;
    }
  }
}


let elements = [];
const size = 5;

//function triggered by loading page
function setup() {

  console.log(elements)
  // creating our 2D matrix that contains all elements
  for (let i = 0; i < 500 / size; i++) {
    elements.push([]);
    for (let j = 0; j < 500 / size; j++) {
      elements[i].push(new Element(true, i * size, j * size, size, size));
    }
  }
  // looping through and adding neighbours
  for (let i = 1; i < elements.length - 1; i++) {
    for (let j = 1; j < elements[i].length - 1; j++) {
      elements[i][j].neighbourAdd(elements[i - 1][j - 1]);
      elements[i][j].neighbourAdd(elements[i][j - 1]);
      elements[i][j].neighbourAdd(elements[i + 1][j - 1]);
      elements[i][j].neighbourAdd(elements[i - 1][j]);
      elements[i][j].neighbourAdd(elements[i + 1][j]);
      elements[i][j].neighbourAdd(elements[i - 1][j + 1]);
      elements[i][j].neighbourAdd(elements[i][j + 1]);
      elements[i][j].neighbourAdd(elements[i + 1][j + 1]);
    }
  }
  // setting one element to dead;
    elements[30][30].alive = false;

  // drawing all elements
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      elements[i][j].draw();
    }
  }

  console.log(elements[30][30])
  // activating an animation (runs over and over)
  // window.requestAnimationFrame(draw);
}


function draw() {
  ctx.clearRect(0, 0, 500, 500);
  // looping through to check neighbours
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      elements[i][j].neighbourCheck();
    }
  }
  // making decisions and drawing.
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      elements[i][j].decision();
      elements[i][j].draw();
    }
  }
console.log(elements)
  //window.requestAnimationFrame(draw);
}
