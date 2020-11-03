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
    // using the counter property to cound the number of "live" neighbours for each element
    for (let i in this.neighbours){
      if (this.neighbours[i].alive){
        this.counter++;
      }
    }
  }
  decision(){
    // applying the rules of conway's game of life
    if (this.counter == 3){
      this.alive = true;
    }
    else if (this.counter < 2){
      this.alive = false;
    }
    else if (this.counter > 3){
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
    // for each row pushing an empty array to the elements array
    elements.push([]);
    for (let j = 0; j < 500 / size; j++) {
      // for each column in the row array adding an element object with random alive/dead property
      elements[i].push(new Element(Math.random()>.5, i * size, j * size, size, size));
    }
  }
  // looping through and adding neighbours
  for (let i = 1; i < elements.length - 1; i++) {
    for (let j = 1; j < elements[i].length - 1; j++) {
      // for each element i,j adding the 8 surrounding elements as neighbours
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

  // drawing all elements
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[i].length; j++) {
      elements[i][j].draw();
    }
  }
  // activating an animation (runs over and over)
   window.requestAnimationFrame(draw);
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
  window.requestAnimationFrame(draw);
}
