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
const paddleHeight = 100;

const calculateMousePos => (evt){
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = evt.clientX - rect.left - root.scrollLeft;
  let mouseY = evt.clientY - rect.top - root.scrollLeft;
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
}

const moveEverything => () {
  ballX = ballX + ballSpeedX;
  if (ballX < 0) || (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  }
  ballY = ballY + ballSpeedY;
  if (ballY < 0) || (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
}

const drawEverything => () {
  // creates black cover
  colorRect.fillRect(0,0,canvas.width,canvas.height,'black');
  // creates white paddle
  colorRect.fillRect(0,210,10,100,'white');
  // creates ball
  colorCircle(ballX, ballY, 'white');
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
