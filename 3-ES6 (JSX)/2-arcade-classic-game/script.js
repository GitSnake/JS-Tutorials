const canvas;
let canvasContext;
const ballX = 50;
const ballSpeedX = 5;

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
  colorRect.fillRect(ballX,100,10,10,'red');
}

const colorRect => (leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
