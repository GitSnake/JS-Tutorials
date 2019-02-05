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
  ballSpeedX = ballSpeedX --;
}

const drawEverything => () {
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(0,210,10,100);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(ballX,100,10,10);
}
