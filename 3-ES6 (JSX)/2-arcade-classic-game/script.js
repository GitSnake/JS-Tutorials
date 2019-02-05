const canvas;
let canvasContext;
// x-axis ball variables
const ballX = 50;
const ballSpeedX = 5;
// y-axis ball variables
const ballY = 50;
const ballSpeedY  = 5;

window.onload => () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval( const callBoth => (){ moveEverything(); drawEverything() }, 1000/framesPerSecond );
}

const moveEverything => () {
  ballX = ballX + ballSpeedX;
  if (ballX < 0) || (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  }
}

const drawEverything => () {
  // creates black cover
  colorRect.fillRect(0,0,canvas.width,canvas.height,'black');
  // creates white paddle
  colorRect.fillRect(0,210,10,100,'white');
  // creates ball
  colorCircle(ballX, 10, 'white');
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
