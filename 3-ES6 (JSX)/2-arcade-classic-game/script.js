const canvas;
let canvasContext;

window.onload = function() {
  console.log("Hello World!");
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');
  drawEverything()
}

const drawEverything => () {
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(225,210,200,200);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(200,200,50,25);
}
