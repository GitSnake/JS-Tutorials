const csv = document.getElementById('canvas');
const ctx = csv.getContext('2d');
let box = 32px;

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
