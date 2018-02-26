function init() {
  draw();

  canvas.addEventListener("mousedown", mouseD);
  canvas.addEventListener("mouseup", mouseU);
  canvas.addEventListener("mousemove", mouseM);
  canvas.addEventListener("mouseover", mouseOver);
  canvas.addEventListener("mouseout", mouseOut);

  canvas.addEventListener("touchstart", touchD);
  canvas.addEventListener("touchend", touchU);
  document.addEventListener("touchcancel", touchU);
  canvas.addEventListener("touchmove", touchM);
}

class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var canvas, ctx;
var origins = [];
var ends = [];
var new_end = null;
var new_origin = null;
var newLine = false;
var mouseOnField = false;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function mouseOut() {
  mouseOnField = false;
  draw();
}

function mouseOver() {
  mouseOnField = true;
  draw();
}

function mouseD() {
  if (mouseOnField) {
    new_origin = new point(event.offsetX, event.offsetY);
    newLine = true;

    draw();
    console.log(new_origin);
  }
}

function mouseM() {
  if (newLine) {
    new_end = new point(event.offsetX, event.offsetY);
    draw();
  }
}

function mouseU() {
  if (newLine) {
    origins.push(new_origin);
    ends.push( new point(event.offsetX, event.offsetY) );

    newLine = false;
    new_end = null;
    new_origin = null;

    draw();
  }
}

function touchD() {
  if (mouseOnField) {
    new_origin = new point(event.offsetX, event.offsetY);
    newLine = true;

    draw();
  }
}

function touchM() {
  if (newLine) {
    new_end = new point(event.offsetX, event.offsetY);
    draw();
  }
}

function touchU() {
  if (newLine) {
    origins.push(new_origin);
    ends.push( new point(event.offsetX, event.offsetY) );

    newLine = false;
    new_end = null;
    new_origin = null;
    draw();
  }
}


function drawLine(context, origin, end, color) {
  var originX = origin.x;
  var originY = origin.y;
  var endX = end.x;
  var endY = end.y;

  context.save();

  context.beginPath();

  context.lineWidth = 2;
  context.strokeStyle = color;

  context.moveTo(originX, originY);
  context.lineTo(endX, endY);

  context.stroke();

  context.closePath();

  context.restore();
}

function draw() {
  canvas = document.getElementById("drawCanvas");
  ctx = canvas.getContext("2d");
  ctx.globalAlpha = 1.0 ;
  
  //delete all and draw again
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var numOfLine = 0; numOfLine < origins.length; numOfLine ++ ) {
    drawLine(ctx, origins[numOfLine], ends[numOfLine], "black");
  }

  //draw guidance line
  if (new_end != null) {
    drawLine(ctx, new_origin, new_end, "grey");
  }
}

function clearcanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("clear");
  origins = [];
  ends = [];
  new_end = null;
  new_origin = null;
  newLine = false;
}
