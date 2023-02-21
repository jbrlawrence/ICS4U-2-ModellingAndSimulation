console.log(`%cCode working and loaded at ${new Date()}`,"color:grey;font-size:16pt;")

// creating a canvas element to draw on
const myCanvas = document.createElement("canvas");
// adding it to the body and styling it (500x500)px with a border so we can see it
document.body.appendChild(myCanvas);
myCanvas.style.border = "solid";
myCanvas.height = 500;
myCanvas.width = 500;

// getting the drawing context for our canvas (the object that has the drawing methods/properties)
const ctx = myCanvas.getContext("2d");

// drawing a rectangle
ctx.beginPath();
ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.fillRect(20,50,100,200);
ctx.closePath();

// drawing a line
ctx.beginPath();
ctx.strokeStyle = "rgb(0,0,255)";
ctx.lineWidth = 5;
ctx.moveTo(250,250);
ctx.lineTo(100,400);
ctx.stroke();
ctx.closePath();

// drawing a more complex shape
ctx.beginPath();
ctx.strokeStyle = "#ff00ff";
ctx.fillStyle = "#ff88ff";
ctx.lineWidth = 5;
ctx.moveTo(300,200);
ctx.lineTo(300,300);
ctx.bezierCurveTo(350,350,350,250,400,300);
ctx.lineTo(400,200);
ctx.stroke();
ctx.fill();
ctx.closePath();

// using a loop and function to draw even more complexity
ctx.translate(400,100);
let petalNumber = 100;
let startPetalSize = 100;
let rotation = 1.618033988/7;
let petalSize = startPetalSize;
for (let i = 0; i < 100; i++){
    petal(petalSize);
    petalSize = petalSize*.991;
    ctx.rotate(rotation);
}

// petal function to draw a single petal
function petal(size){
    ctx.beginPath()
    ctx.strokeStyle = "#999900";
    ctx.fillStyle = "#ffff99";
    ctx.lineWidth = 1;
    ctx.moveTo(0,0);
    let cp1 = {x: size/4, y: -size/2};
    let cp2 = {x: size/2, y: -size/4};
    ctx.bezierCurveTo(cp1.x,cp1.y,cp2.x,cp2.y,size,0);
    ctx.bezierCurveTo(cp2.x,-1*cp2.y,cp1.x,-1*cp1.y,0,0);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}