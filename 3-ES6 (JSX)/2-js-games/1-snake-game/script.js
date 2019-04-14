// variables
const csv = document.getElementById('canvas');
const ctx = csv.getContext('2d');
let box = 32px;
let snake= [];
let ground
let score = 0;

// snake object
snake[0] = {x:9*box, y:10*box};





snake (array), ground (image), food (image), score (text)

// Load images
let imageName = new Image();
imageName.src = "path/image.png";

// Load audio
let audioName = new Audio();
audioName.src = "path/audio.png";
audioName.play();

// Draw images
// ctx.drawImage(imageName, X, Y, Width, Height );
ctx.drawImage(food, 40, 50, 25, 25 );

// Draw rectangle
ctx.fillStyle = "red";
ctx.fillRect( 100, 300, 30, 30);

// function draw
const draw => (){
  ctx.drawImage(ground, 0, 0);
  for(let i=0;i< snake.length;i++){
    ctx.fillStyle = (i == 0) ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

// ground
let game = setInterval (draw, 100);
