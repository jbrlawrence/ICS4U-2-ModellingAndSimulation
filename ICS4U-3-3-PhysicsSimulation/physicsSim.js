console.log("my first physics simulation");

const ctx = document.getElementById("myCanvas").getContext("2d");
console.log(ctx);
const GRAVITY = 9.81;

class Particle {
  constructor(add, inputs, here) {
    // add properties and set them to inputs here
    // needed properties x, y, x_v, y_v, x_a, y_a, size
  }
  // add draw method here, use properties and an input that gives the rendering context
  // use x, y, size to draw using canvas context methods

  /// add move method here, math is x = x+x_v, x_v = x_v + x_a (same for y)
}

//function triggered by loading page
function setup() {

  // activating an animation (runs over and over)
  window.requestAnimationFrame(draw);
}

let counter = 0;

function draw() {
  counter++;
  console.log(counter);
  window.requestAnimationFrame(draw);
}
