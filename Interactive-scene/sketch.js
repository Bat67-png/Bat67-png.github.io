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

function setup() {
  createCanvas(500, 500);
  let x = width;
  let y = height;
}

function draw() {
  background(220);
  gman();
  obstacles1();
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

// Creates new obstacles every 1.5 second
function obstacles1() {
  let x = 0;
  let y = 0;
  let obstacleWidth = 50;
  let obstacleHeight = 100;
  if (millis() >= obstacleChangeTime + lastObstacle) {
    lastObstacle = millis() + obstacleChangeTime;
    obstacleWidth = 50;
    obstacleHeight = random(100, 200);
    x = width - obstacleWidth;
  }
  fill("red");
  rect(x, y, obstacleWidth, obstacleHeight);

}

