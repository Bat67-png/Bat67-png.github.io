// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let g = "down";
let x;
let y;
let d = 50;
let speed = 7;
let obstacleTime = 1000;
let nextObstacle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  gman();
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
  if (key === 's' && y <= d) {
    g = "down";
  }
  if (key === 'w' && y >= height - d) {
    g = "up";
  }
}

function drawObstacles() {
  let y = 0;
  let speed = 10;
  for (let x = width; x >= 0; x += speed) {
    rect(x, y, w, h);
  }
}

