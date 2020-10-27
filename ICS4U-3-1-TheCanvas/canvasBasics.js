console.log("hello");

function setup(){
  let can = document.getElementById("myCanvas");
  let ctx = can.getContext("2d");
  console.log(ctx);

  // pumpkin body
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 25;
  for (let i = 0; i <5; i++){
    ctx.beginPath();
    ctx.ellipse(250,250,250-i*40,200,0,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  //stem
  ctx.beginPath();
  ctx.moveTo(250,50);
  ctx.lineTo(300,0);
  ctx.stroke();
//mouth
ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.ellipse(250,300,150,50,0,0,1*Math.PI);
  ctx.fill();
}
