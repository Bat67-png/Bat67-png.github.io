// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// let blockArray = [];
// let x;
// let y;
// let w;
// let h;
// let speed = 1;
// let state = "right";


// function setup() {
//   createCanvas(700, 700);
//   w = 80;
//   h = 50;
//   x = width/2 - w/2;
//   y = height - 2*h;
// }

// function draw() {
//   background(220);
//   spawnBlock();
//   // block();
//   for (let block of blockArray) {
//     // movement
//     if (state === "right") {
//       block.x += speed;
//     }
//     else if (state === "left") {
//       block.x -= speed;
//     } 
//     else if (state === "stop") {
//       block.x += 0;
//       fill("green");
//       rect(block.x, block.y, block.w, block.h );
//       noLoop();
//     }
//     fill("black");
//     rect(block.x, block.y - block.h , block.w, block.h);
//   }
// }

// // function block() {
// //   noStroke();
// //   fill("black");
// //   rect(x, y, w, h);
// //   if (state === "right") {
// //     x += speed;
// //   }
// //   else if (state === "left") {
// //     x -= speed;
// //   }
// //   else if (state === "stop") {
// //     x += 0;
// //   }
// //   console.log(state);
// // }

// function keyPressed() {
//   if (key === 's') {
//     state = "stop";
//     fill("green");
//     rect(block.x, block.y - block.h, block.w, block.h);
//   }
// }

// function spawnBlock() {
//   let someBlock = {
//     x: width/2 - w/2,
//     y: height - 2*h,
//     w: random(50, 80),
//     h: random(40, 50)
//   };
//   blockArray.push(someBlock);
// }

let blockArray = [];
let w = 100;
let h = 50;
let state = "right";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  for (let block of blockArray) {
    //move
    block.x += block.dx;

    //teleport if needed
    if (block.x + w > width) {
      block.x -= block.dx;
    }
    if (block.x + w < 0) {
      block.x += block.dx;
    }

    //display
    fill(block.r, block.g, block.b);
    rect(block.x, block.y, w, h);
  }
}

function mousePressed() {
  spawnblock();
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