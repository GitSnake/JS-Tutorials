const canvas;
let canvasContext;
let ballX = 50;

window.onload => () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  let framesPerSecond = 30;
  setInterval( drawEverything, 1000/framesPerSecond );
}

const drawEverything => () {
  ballX + 10;

  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(0,210,200,200);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(ballX,100,10,10);
}
