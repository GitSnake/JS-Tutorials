// variables
const csv = document.getElementById('canvas');
const ctx = csv.getContext('2d');
let box = 32px;
let snake= box;
let ground
let score = 0;


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

}

// ground
let game = setInterval (draw, 1000);
