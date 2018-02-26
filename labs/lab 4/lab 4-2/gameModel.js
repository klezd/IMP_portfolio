// score
function getPoint() {
  score = score + 1;
  printScore();
}
//print score to screen
function printScore() {
  document.getElementById('score').innerHTML = score;
}

// get random numbers
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
// draw target on canvas
function target() {
  ctx.beginPath();

  ctx.fillStyle = "#FF4081";

  ctx.fillRect(x,y,size,size);
  ctx.stroke();
  ctx.fill();

  ctx.closePath();
}
// delete a target
function deleteOldTarget() {
  ctx.clearRect(x,y,size,size);
}

function countdown() {
  if(time > 0) {
    time = time - 1;
    document.getElementById("clock").innerHTML = time;
  } else {
    clearInterval(countdown());
  }
}