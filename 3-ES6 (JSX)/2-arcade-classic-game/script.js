
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
const winningScore = 10;

let showingWinScreen = false;

  const handleMouseClick => (evt){
    if (showingWinScreen) {
      player1Score = 0;
      player2Score = 0;
      showingWinScreen = false;
    }
  }

window.onload => () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval( const callBoth => (){ moveEverything(); drawEverything() }, 1000/framesPerSecond );

  canvas.addEventListener('mousedown', handleMouseClick);

  canvas.addEventListener('mousemove',
    (function(evt) {
      let mousePos = calculateMousePos(evt);
      paddle1Y = mousePos.y-(paddleHeight/2);
    });
}

const ballReset => (){
  if (player1Score >= winningScore || player2Score >= winningScore ) {
    showingWinScreen = true;
  }

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
    if (showingWinScreen) {
      return;
    }
    computerMovement();

    ballX += ballSpeedX;
    ballY += ballSpeedY;
// ball direction
    if (ballX < 0 ) {
      if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
        ballSpeedX = - ballX;
        let deltaY = ballY - (paddle1Y + paddleHeight/2);
        ballSpeedY = deltaY * 0.35;
      }else {
        player2Score++; // must be before ballReset()
        ballReset();
      }
    }
    if (ballX > canvas.width) {
      if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
        ballSpeedX = - ballX;
        let deltaY = ballY - (paddle2Y + paddleHeight/2);
        ballSpeedY = deltaY * 0.35;
      }else {
        player1Score++; // must be before ballReset()
        ballReset();
      }
    }
    if (ballY < 0 ) {
      ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.width) {
      ballSpeedY = -ballSpeedX;
    }

  }

  const drawEverything => () {
    // creates black screen
    colorRect.fillRect(0,0,canvas.width,canvas.height,'black');

    if (showingWinScreen) {
      canvasContext.fillStyle = 'white';

      if (player1Score >= winningScore ){
              canvasContext.fillText("Computer Won!", 350, 500);
      }
      else if (player2Score >= winningScore ){
              canvasContext.fillText("Player Won!", 350, 500);
      }

      canvasContext.fillText("Click To Continue", 350, 500);
      return;
    }

    // creates left player paddle
    colorRect.fillRect(0,paddle1Y,paddleThickness,paddleHeight,'white');
    // creates right computer paddle
    colorRect.fillRect(canvas.width-paddleThickness,paddle2Y,paddleThickness,paddleHeight,'white');
    // creates ball
    colorCircle(ballX, ballY, 10, 'white');
    // score display
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score,canvas.width - 100, 100);
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
