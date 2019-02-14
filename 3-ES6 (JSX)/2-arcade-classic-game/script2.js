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
// score display variables
let player1Score = 0;
let player2Score = 0;


window.onload => () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval( const callBoth => (){ moveEverything(); drawEverything() }, 1000/framesPerSecond );



  const moveEverything => () {
    ballX += ballSpeedX;

    if (ballX < 0 ) {
      ballSpeedX = -ballSpeedX;
    }
    if (ballX > canvas.width) {
      ballSpeedX = -ballSpeedX;
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
    // score display
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score,canvas.width - 100, 100);
    // creates ball 2
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, 50, 50, 0, Math.PI*2, true);
    canvasContext.fill();
  }

  const colorCircle => (centerX, centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }
  const colorRect => (leftX, topY, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
  }
















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

const computerMovement => (){
  const paddle2YCenter = paddle2Y + (paddleHeight/2);

  if (paddle2YCenter < ballY-35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY+35) {
    paddle2Y -= 6;
  }
}

const moveEverything => () {

computerMovement();



  if (ballX < 0) || (ballX > canvas.width) {
    if (ballY > paddle1Y && ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;

      let deltaY = ballY-()
    } else {
        ballReset();
        player2Score++;
      }
      if (ballY > paddle2Y && ballY < paddle2Y+paddleHeight) {
        ballSpeedX = -ballSpeedX;
      } else {
          ballReset();
          player1Score++;
        }
  }
  if (ballY < 0) || (ballY > canvas.height) {
    if (ballY > paddle1Y && ballY < paddle1Y+paddleHeight) {
      ballSpeedX = -ballSpeedX;
    }
  }
}