// Perlin Noise Demo
// Your Name
// Date


let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill("black");

  let x = noise(time) * width;
  let y = noise(time + 2000) * height;
  circle(x, y, 50);

  time += 0.01;
}
