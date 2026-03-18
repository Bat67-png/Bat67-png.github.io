// Grid demo
// learning 2d arrays

let theGrid = [[0, 0, 1, 0], 
               [0, 0, 1, 0], 
               [0, 0, 1, 0],
               [0, 1, 0, 1]];

const SQUARE_DIMENSION = theGrid.length;

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSION;
  }
  else {
    cellSize = height / SQUARE_DIMENSION;
  }
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSION; y++) {
    for (let x = 0; x < SQUARE_DIMENSION; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mouseClicked() {
  theGrid[0][0] = 1;
}