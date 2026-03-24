// Image Demo

let luigiImg;
let x;
let y;
let speed = 5;

function preload() {
  luigiImg = loadImage("luigi.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  image(luigiImg, x, y, luigiImg.width*0.25, luigiImg.height*0.25);
}

function keyPressed() {
  if (key === "a") {
    x -= speed;
  }
  if (key === "d") {
    x += speed;
  }
}