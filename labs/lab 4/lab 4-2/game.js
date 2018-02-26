//global variation
var score = 0;
var x = 0;
var y = 0;
var size = 80; //variable for target
var createTarget;
var userX, userY;

var time;

function init() {
  //init canvas
  canvas = document.getElementById("speedGame");
  ctx = canvas.getContext("2d");
  ctx.globalAlpha = 1.0 ;
  printScore();
  canvas.addEventListener("mousedown", userClicked);
}

function start() {
  //set score to 0
  score = 0;
  // first called when user start is clicked
  startGame();
  // target disapear and appear after 0.7s
  createTarget = setInterval(startGame, 700);
  //stop game
  setTimeout(function() {
    setTimeout( function(){stopGame()}, 100) // called after clearInterval(startGame)
    deleteOldTarget()
  }, 10000); // set for 10000 ms = 10s before game over
  time = 10;
  setInterval(function(){ countdown() }, 1000);
}

function startGame() {
  //delete old target and appear new.
  deleteOldTarget();
  x = getRandomNumber(canvas.width - 100) + 10;
  y = getRandomNumber(canvas.height - 100) + 10;
  target();
}

function userClicked() {
  // get point if user click on the target
  userX = event.offsetX;
  userY = event.offsetY;
  if ( (( userX >= x )&&( userX <= x + 80 )) && ((userY >= y)&&(userY <= y + 80)) ) {
    getPoint();
  }
}

function stopGame() {
  clearInterval(createTarget);
  //console.log("stop");
  ctx.font="bold 36px Arial";
  ctx.fillStyle = 'red';
  ctx.textAlign = 'center';
  ctx.fillText("GAME OVER", 400, 250);
  ctx.fillText("YOUR SCORE: " + score, 400, 300);
  document.getElementById('scoreField').style.display = "none";
}
