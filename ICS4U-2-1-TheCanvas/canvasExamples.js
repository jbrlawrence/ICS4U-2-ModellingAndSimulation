/* ***** General Notes ****
do not try to draw to a canvas before the page loads. Use an onLoad or onClick function to set up your canvases.
*/

// ### FIRST CANVAS ###
function c1draw() {
    // find the canvas on the webpage with the id "first canvas"
    let canvas1 = document.getElementById("firstCanvas");
    // get the "context" of the canvas, as a 2d canvas
    let context1 = canvas1.getContext("2d");
    context1.strokeStyle = 'rgb(0,200,0)'; // sets the color to stroke with
    context1.strokeRect(10, 10, 55, 50); // creates a rectangle
    // set the fill to red
    context1.fillStyle = "#FF0000"
    // draw an arc in the middle of the canvas that has a diameter of 50 and runs from angle 0 to 2π
    context1.arc(250, 250, 50, 0, Math.PI * 2);
    // actually fill the drawn shape (a circle) with the fill colour
    context1.fill();
}


// ### SECOND CANVAS ###
// here the canvas and context are defined outside of any function so they can be used by any function. A setup function runs once the body is loaded so that the canvas elements will only be used after they are properly loaded.
let canvas2;
let context2;
// setup is called from the body onLoad
function setup() {
    canvas2 = document.getElementById("secondCanvas");
    context2 = canvas2.getContext("2d");
}
// drawing images to the canvas
let image = document.createElement("IMG");
image.src = "ML.jpg"

function c2draw() {
    context2.drawImage(image, 0, 0);
}
// adding drawing elements to the canvas
function c2grafitti() {
    // setting up variables for moustache
    let sX = 300;
    let sY = 310;
    let mW = 70;
    let mH = 70;
    // drawing complex (thick) curve for the moustache
    context2.lineWidth = 8;
    context2.moveTo(sX, sY);
    context2.bezierCurveTo(sX - mW / 2, sY - mH / 2, sX - mW / 2, sY + mH / 2, sX - mW, sY);
    context2.moveTo(sX, sY);
    context2.bezierCurveTo(sX + mW / 2, sY - mH / 2, sX + mW / 2, sY + mH / 2, sX + mW, sY);
    context2.stroke();
}

// ### THIRD CANVAS ###
function c3draw() {
    // an abreviated version of creating a canvas context in a single line
    let cx = document.getElementById("thirdCanvas").getContext("2d");
    // creating a function that recursively draws a tree using translate/transform functions
    function branch(length, angle, scale) {
        cx.fillRect(0, 0, 1, length);
        if (length < 9) {
            cx.translate(0, length);
            cx.fillStyle = "green";
            cx.beginPath();
            cx.arc(0, 0, 5, 0, Math.PI * 2);
            cx.fill();
            return;
        }
        cx.save();
        cx.translate(0, length);
        cx.rotate(-angle);
        branch(length * scale, angle, scale);
        cx.rotate(2 * angle);
        branch(length * scale, angle, scale);
        cx.restore();
    }
    cx.translate(250, 500);
    cx.rotate(Math.PI);
    branch(100, 0.5, 0.7);
}

// ### FOURTH CANVAS ###
// creating a context and variable to save an instance of  the dot object
let cx4;
let myDot;
let unclicked = true;

function c4draw() {
    // only starting the display once, if clicked again this function will do nothing
    if (unclicked) {
        unclicked = false;
        cx4 = document.getElementById("fourthCanvas").getContext("2d");
        myDot = new Dot(50, 50, 2, -1, 20, "red", cx4);
        requestAnimationFrame(display);
    }
}

// the drawing functions of our dot, starting by clearing the screen
function display() {
    cx4.clearRect(0, 0, 500, 500);
    myDot.move();
    myDot.draw();
    myDot.accelerate();
    myDot.bounce(500);
    // this last call re-runs the animation at a framerate of 60 times per second
    requestAnimationFrame(display)
}
let GRAVITY = 0.1;

// creating a dot object with position, velocity, size, colour and a context to draw to.
class Dot {
    constructor(x, y, vx, vy, s, c, context) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.m = 1;
        this.s = s;
        this.c = c;
        this.c2 = "lightGrey"
        this.damping = 0.98;
    }
    // moving our dot by adding the velocity to the position
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }
    // changing our velocity by adding force/mass. For gravity: force = mass*GRAVITY
    accelerate() {
        let fy = this.m * GRAVITY;
        let fx = 0;
        this.vx += fx / this.m;
        this.vy += fy / this.m;
    }
    // a simple function that bounces the ball off the bottom of the canvas
    bounce(edgeY) {
        if (this.y + this.s / 2 > edgeY) {
            this.vy = -this.damping * Math.abs(this.vy);
        }
        if (this.x - this.s / 2 < 0) {
            this.vx = this.damping * Math.abs(this.vx);
        }
        if (this.x + this.s / 2 > edgeY) {
            this.vx = -this.damping * Math.abs(this.vx);
        }
    }
    // drawing our dot
    draw() {
        this.context.fillStyle = this.c;
        this.context.strokeStyle = this.c2;
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.s, 0, Math.PI * 2);
        this.context.fill();
        this.context.stroke();
    }
}

// Your code below!
// ### FIFTH CANVAS ###
function c5draw() {


}




// ### SIXTH CANVAS ###
function c6draw() {

}
// ### SEVENTH CANVAS ###
function c7draw() {

}
// ### EIGHTH CANVAS ###
function c8draw() {

}
