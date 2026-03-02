// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let g = "down";
let x = 200;
let y = 200;
let d = 50;
let speed = 7;
let lastObstacle = 0;
let obstacleChangeTime = 1500;
let obsx;
let obsy;
let rectWidth = 50;
let rectHeight;
let obsSpeed = 3;

function setup() {
  createCanvas(500, 500);
  let x = width;
  let y = height;
  obsx = width - rectWidth
  obsy = 0
}

function draw() {
  background(220);
  gman();
  topObsMaker();
  topObsMover();
}

// Creates the G-Man and some code that changes his gravity
function gman() {
  fill("yellow");
  circle(x, y, d);
  if (g === "down" && y < height - d/2) {
    y += speed;
  }
  if (g === "up" && y > 0 + d/2) {
    y -= speed;
  }
}

// The Keys
function keyPressed() {
  if (key === 's' && y <= d) {
    g = "down";
  }
  if (key === 'w' && y >= height - d) {
    g = "up";
  }
}

// Creates the obstacle
function topObsMaker() {
  fill("darkgreen")
  rect(obsx, obsy, rectWidth, rectHeight)
}
// Moves the obstacle and creates a new one after passing
function topObsMover() {
  obsx -= obsSpeed
  if (obsx <= 0) {
    obsx = width - rectWidth
    rectHeight = random(50, 150)
  }
}
// Some code that makes the obstacle Push the G-Man to the edge
function obstaclePush() {
  if (x + d/2 === obsx && y <= rectHeight) {
      x -= obsSpeed
      }
}

