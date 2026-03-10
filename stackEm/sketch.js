// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let state = "right";
// let speed = 5;
// let blockArray = [];
// let w;
// let h;

// function setup() {
//   createCanvas(700, 700);
//   noStroke();
// }

// function draw() {
//   background(220);
//   for (let block of blockArray) {
//   //  move
//     if (state === "right") {
//       block.x += speed;
//     }
//     else if (state === "left") {
//       block.x -= speed;
//     }
//     else if (state === "stop") {
//       block.x += 0;
//     }

//     fill("black");
//     rect(block.x, block.y, w, h);
//   }
//   spawnBlock();
// }


// function spawnBlock(_w, _h) {
//   // move
//   let someBlock = {
//     x: width - w/2,
//     y: height - y,
//     w: _w,
//     h: _h,
//   };
//   blockArray.push(someBlock);
// }


let blockArray = [];
let x;
let y;
let w;
let h;
let speed = 1;
let state = "right";


function setup() {
  createCanvas(700, 700);
  w = 80;
  h = 50;
  x = width/2 - w/2;
  y = height - 2*h;
}

function draw() {
  background(220);
  spawnBlock();
  // block();
  for (let block of blockArray) {
    // movement
    if (state === "right") {
      block.x += speed;
    }
    else if (state === "left") {
      block.x -= speed;
    } 
    else if (state === "stop") {
      block.x += 0;
      fill("green");
      rect(block.x, block.y, block.w, block.h );
      noLoop();
    }
    fill("black");
    rect(block.x, block.y - block.h , block.w, block.h);
  }
}

// function block() {
//   noStroke();
//   fill("black");
//   rect(x, y, w, h);
//   if (state === "right") {
//     x += speed;
//   }
//   else if (state === "left") {
//     x -= speed;
//   }
//   else if (state === "stop") {
//     x += 0;
//   }
//   console.log(state);
// }

function keyPressed() {
  if (key === 's') {
    state = "stop";
    fill("green");
    rect(block.x, block.y - block.h, block.w, block.h);
  }
}

function spawnBlock() {
  let someBlock = {
    x: width/2 - w/2,
    y: height - 2*h,
    w: random(50, 80),
    h: random(40, 50)
  };
  blockArray.push(someBlock);
}