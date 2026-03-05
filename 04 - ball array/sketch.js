// Ball Array Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let ball of ballArray) {
    //move
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x - ball.radius > width) {
      ball.x = -ball.radius;
    }
    else if (ball.x + ball.radius < 0) {
      ball.x = width;
    }
    if (ball.y - ball.radius > height) {
      ball.y = 0;
    }
    else if (ball.y + ball.radius < 0) {
      ball.x = height;

  //   if (ball.x >= width) {
  //     ball.x -= ball.dx;
  //   }
  //   else if (ball.x <= 0) {
  //     ball.x += ball.dx;
  //   }

  //   if (ball.y >= height) {
  //     ball.y -= ball.dx;
  //   }
  //   else if (ball.y <= 0) {
  //     ball.x = height;
  // }

  //display
  fill(ball.r, ball.g, ball.b);
  circle(ball.x, ball.y, ball.radius*2);
    // ballPhase();
}
}
}

function ballPhase() {
  
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function spawnBall(_x, _y) {
  let someBall = {
    x: _x,
    y: _y,
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 30),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
  };
  ballArray.push(someBall);
}
