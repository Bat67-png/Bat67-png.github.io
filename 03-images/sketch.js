// Image Demo

let luigiImg;

function preload() {
  luigiImg = loadImage("luigi.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(luigiImg, mouseX, mouseY, luigiImg.width*0.25, luigiImg.height*0.25);
}
