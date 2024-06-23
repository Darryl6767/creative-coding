let debug = false;

let x = 0;
let y = 0;
let d = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let score = 0;
let img; // Store the baseball sprite

function preload() {
  img = loadImage('https://darryl6767.github.io/creative-coding/week3/3.2.follower/baseball.png');
}

function setup() {
  createCanvas(800, 800);
  x = random(0, width);
  y = random(0, height);
}

function draw() {
  background(220);

  // This is the distance formula
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  // Collision
  if (d < 25) {
    score -= 1;
    x = random(0, width);
    y = random(0, height);
  }

  // Movement
  x += speedx;
  y += speedy;

  // To make sure the image loads in
  if (img) {
    // Baseball sprite image
    image(img, x - 25, y - 25, 50, 50); // Centering the image(x, y)
  }

  if (mouseX > x) {
    // Right
    speedx = speedfactor;
  } else {
    // Left
    speedx = -speedfactor;
  }

  if (mouseY > y) {
    // Down
    speedy = speedfactor;
  } else {
    // Up
    speedy = -speedfactor;
  }

  // Display the score
  textSize(20);
  fill(0);
  text("Score: " + score, 10, 30);

  if (debug) {
    textSize(20);
    text("mouse in X direction:" + mouseX, 50, 50);
    text("mouse in Y direction:" + mouseY, 50, 70);
    text("x:" + x, 50, 120);
    text("y:" + y, 50, 140);
    text("d:" + d, 50, 160);
    text("score:" + score, 50, 180);
  }
}
