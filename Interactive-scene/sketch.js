// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let g = "down"
let x;
let y;
let d = 50;
let speed = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  gman()
}

function gman() {
  
//   creates the gman
  fill("yellow");
  circle(x, y, d);
  
//   changes gman's gravity
  if (g === "down" && y < height - d/2) {
    y += speed;
  }
  if (g === "up" && y > 0 + d/2) {
    y -= speed;
  }
  if (g === "right" && y < height - d/2) {
    y += speed;
  }
  if (g === "left" && y > 0 + d/2) {
    y -= speed;
  }
}

function keyPressed() {
  if (key === 's') {
    g = "down";
  }
  if (key === 'w') {
    g = "up";
  }
}

