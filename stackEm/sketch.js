// Moving text blocks
// Bat-Erdene Lkhagvasuren
// 2026-03-18
//
// Extra for Experts:
// Used createInput() to allow the user to type text that is displayed and centered on each block in real time.

let blockArray = [];
let w = 100;
let h = 50;
let state = "blockIsNotPresent";
let input;

function setup() {
  createCanvas(700, 700);
  noStroke();

  // Creates the input on the top left corner
  input = createInput('');
  input.position(10, 10);
}

function draw() {
  let msg = input.value();
  background(220);
  nextBlocks();
}

// The block making process
function nextBlocks() {
  if (state === "blockIsPresent") {

    let msg = input.value(); // gets the message from the input

    for (let b of blockArray) {

      // movements
      b.x += b.dx;
      b.dy += 0.5;
      b.y += b.dy;

      // Bouncing action
      if (b.x + w > width || b.x <= 0) {
        b.dx *= -1;
      }

      // Prevents the block from falling through the ground
      if (b.y + h > height) {
        b.y = height - h;
        b.dy = 0;
      }

      // Draw block
      fill(b.r, b.g, b.b);
      rect(b.x, b.y, w, h);

      // Draw text
      fill(0);
      textAlign(CENTER, CENTER);
      text(msg, b.x + w/2, b.y + h/2);
    }
  }
}

// Press "q" or "b" to create multiple blocks
function keyPressed() {
  if (key === "q" || key === "b") {
    spawnblock();
  }
}

// To start creating the blocks you got to click your mouse once
function mousePressed() {
  if (state === "blockIsNotPresent") {
    state = "blockIsPresent";
  }
}

// Pushes the array of the blocks
function spawnblock() {
  let someblock = {
    x: width/2,
    y: 0,
    dx: 5,
    dy: random(-5, 5),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
  };
  blockArray.push(someblock);
}