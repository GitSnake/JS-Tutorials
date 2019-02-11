// canvas variables
const canvas;
let canvasContext;
// x-axis ball variables
const ballX = 50;
const ballSpeedX = 5;
// y-axis ball variables
const ballY = 50;
const ballSpeedY  = 4;
// paddle variables
const paddle1Y = 250;
const paddle2Y = paddle1Y;
const paddleThickness = 10;
const paddleHeight = 100;

const calculateMousePos => (evt){
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left - root.scrollLeft;
  let mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x:mouse,
    y:mouseY
  };
}


window.onload => () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval( const callBoth => (){ moveEverything(); drawEverything() }, 1000/framesPerSecond );

  canvas.addEventListener('mousemove',
    (function(evt) {
      let mousePos = calculateMousePos(evt);
      paddle1Y = mousePos.y-(paddleHeight/2);
    });
}

const ballReset => (){
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width/2;
  ballX = canvas.height/2;
}


const moveEverything => () {
  ballX = ballX + ballSpeedX;

  if (ballX < 0) || (ballX > canvas.width) {
    if (ballY > paddle1Y && ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
        ballReset();
      }
  }
  if (ballY < 0) || (ballY > canvas.height) {
    if (ballY > paddle1Y && ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;
    }
  }
}

const drawEverything => () {
  // creates black cover
  colorRect.fillRect(0,0,canvas.width,canvas.height,'black');
  // creates left paddle
  colorRect.fillRect(0,paddle1Y,paddleThickness,paddleHeight,'white');
  // creates right paddle
  colorRect.fillRect(canvas.width - paddleThickness, paddle2Y, paddleThickness, paddleHeight,'white');
  // creates ball
  colorCircle(ballX, ballY, 10, 'white');
}

const colorCircle => (centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.Pi*2, true);
  canvasContext.fill();
}
const colorRect => (leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
