// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let blockArray = [];
let w = 100;
let h = 50;
let state = "blockIsNotPresent";

function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  background(220);
  blockMaker();
  nextblocks();
}

function nextblocks() {
  if (state === "blockIsPresent") {
    let blockClone = structuredClone(blockArray);
    for (let b of blockClone) {
    //move
      b.x += b.dx;

      //teleport if needed
      if (b.x + w > width) {
        b.dx = -1*b.dx;
      }
      if (b.x <= 0) {
        b.dx = -1*b.dx;
      }

      //display
      fill(b.r, b.g, b.b);
      rect(b.x, b.y - h, w, h);
    }
  }
}

function blockMaker() {
  if (state === "blockIsNotPresent") {
    for (let block of blockArray) {
    //move
      block.x += block.dx;

      //teleport if needed
      if (block.x + w > width) {
        block.dx = -1*block.dx;
      }
      if (block.x <= 0) {
        block.dx = -1*block.dx;
      }

      //display
      fill(block.r, block.g, block.b);
      rect(block.x, block.y, w, h);
    }
  }
  else if (state === "blockIsPresent") {
    for (let block of blockArray) {
      fill(block.r, block.g, block.b);
      rect(block.x, block.y + h, w, h);
    }
  }
}

function keyPressed() {
  if (key === "q") {
    spawnblock();
  }
}

function mousePressed() {
  if (state === "blockIsNotPresent") {
    state = "blockIsPresent";
  }
}

function spawnblock() {
  let someblock = {
    x: width/2,
    y: height - w,
    dx: 5,
    dy: random(-5, 5),
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255),
  };
  blockArray.push(someblock);
}