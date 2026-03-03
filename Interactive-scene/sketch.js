// Gravity Man
// 2026
// March 3rd 2026
//
// Extra for Experts:
// - Used Html to make scoreboard and used mousewheel input to change the characters color

let state = "game";  // "game", "gameover"
let g = "down";
let x, y;
let d = 50;
let speed = 7;

let obsx, obsy;
let rectWidth = 8;
let rectHeight;
let obsSpeed = 3;

let botx, botRectHeight;

let score = 0;
let scoreDisplay;

let color = "yellow"

let bx;
let by;
let bw;
let bh;

function setup() {
  createCanvas(500, 500);

  x = width / 2;
  y = height / 2;

  obsx = width - rectWidth;
  obsy = 0;
  rectHeight = random(50, 150);

  botx = width - rectWidth;
  botRectHeight = random(50, 150);

  // HTML score element
  scoreDisplay = createP("Score: 0");
  scoreDisplay.style("font-size", "20px");
  scoreDisplay.style("color", "black");
  scoreDisplay.position(10, 10);

  // Button position
  bw = 150;
  bh = 60;
  bx = width / 2 - bw / 2;
  by = height / 2 - bh / 2;
}

function draw() {
  background(220);

  if (state === "game") {
    runGame();
  } 
  if (state === "gameover") {
    gameOverScreen();
  }
}


// game runner so there is less space in draw loop

function runGame() {
  gman();
  topObsMaker();
  topObsMover();
  obstaclePush();
  botObsMover();
  bottomObstacle();

  // Increment score every second because 60frames per second
  if (frameCount % 60 === 0) {
    score++;
    scoreDisplay.html("Score: " + score);
  }

  // Game over condition
  if (x <= 5) {
    state = "gameover";
  }
}

function mouseWheel(event) {
  if (color === "yellow") {
    color = "orange"
  }
  else if (color === "orange") {
    color = "red"
  }
  else if (color === "red") {
    color = "purple"
  }
  else if (color === "purple") {
    color = "blue"
  }
  else if (color === "blue") {
    color = "green"
  }
  else if (color === "green") {
    color = "yellow"
  }
}

function gman() {
  fill(color);
  circle(x, y, d);

  if (g === "down" && y < height - d / 2) {
    y += speed;
  }
  if (g === "up" && y > 0 + d / 2) {
    y -= speed;
  }
}

function keyPressed() {
  if (state === "game") {
    if (key === 's' && y <= d) g = "down";
    if (key === 'w' && y >= height - d) g = "up";
  }
}

// obstacles

function topObsMaker() {
  if (state === "game") {
    fill("darkgreen");
    rect(obsx, obsy, rectWidth, rectHeight);
  }
}

function topObsMover() {
  if (state === "game") {
    obsx -= obsSpeed;
    if (obsx <= -rectWidth) {
      obsx = width - rectWidth;
      rectHeight = random(50, 150);
    }
  }
}

function bottomObstacle() {
  if (state === "game") {
    let boty = height - botRectHeight;
    fill("darkgreen");
    rect(botx, boty, rectWidth, botRectHeight);
  }
}

function botObsMover() {
  if (state === "game") {
    botx -= obsSpeed;
    if (botx <= -rectWidth) {
      botx = width - rectWidth;
      botRectHeight = random(50, 150);
    }
  }
}

function obstaclePush() {
  let circleRight = x + d / 2;
  let circleLeft = x - d / 2;
  let circleTop = y - d / 2;
  let circleBottom = y + d / 2;

  let topRectLeft = obsx;
  let topRectRight = obsx + rectWidth;
  let topRectTop = 0;
  let topRectBottom = rectHeight;

  let botRectLeft = botx;
  let botRectRight = botx + rectWidth;
  let botRectTop = height - botRectHeight;
  let botRectBottom = height;

  let hitTop =
    circleRight > topRectLeft &&
    circleLeft < topRectRight &&
    circleBottom > topRectTop &&
    circleTop < topRectBottom;

  let hitBottom =
    circleRight > botRectLeft &&
    circleLeft < botRectRight &&
    circleBottom > botRectTop &&
    circleTop < botRectBottom;

  if (hitTop || hitBottom) {
    x -= obsSpeed;
  }
}

// game over

function gameOverScreen() {
  textAlign(CENTER, CENTER);
  textSize(40);
  fill("red");
  text("GAME OVER", width / 2, height / 3);

  // Plain restart button (no hover, no shadow)
  fill(200, 0, 0);
  rect(bx, by, bw, bh);

  fill(255);
  textSize(20);
  text("RESTART", bx + bw / 2, by + bh / 2);
}

// Button property

function mousePressed() {
  if (
    state === "gameover" &&
    mouseX > bx &&
    mouseX < bx + bw &&
    mouseY > by &&
    mouseY < by + bh
  ) {
    restartGame();
  }
}

// restert

function restartGame() {
  state = "game";

  x = width / 2;
  y = height / 2;

  obsx = width;
  botx = width;

  rectHeight = random(50, 150);
  botRectHeight = random(50, 150);

  // Reset score
  score = 0;
}