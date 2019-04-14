const csv = document.getElementById('canvas');
const ctx = csv.getContext('2d');

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
