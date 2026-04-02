// Rectangular Grid 2d Array Demo

const CELL_SIZE = 100;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = 8;
  cols = 8;
  grid = generateEmptyGrid(rows, cols);

  grid[6][4] =  2;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y <  rows; y ++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      if (grid[y][x] === 2) {
        fill("green");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x, y);

  // neighbors
}

function toggleCell(x, y) {
  //make sure the cell actually exists!
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === 2 && grid[y] === 6) {
    grid[y - 1][x] = 1;
    grid[y - 2][x] = 1;
  }
  else {
    grid[y - 1][x] = 1;
  }
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === 1) {
    grid[y][x] = 2;
    grid[y + 1][x] = 0;
    grid[y + 2][x] = 0;
    grid[y - 1][x] = 0;
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid();
  }
  if (key === "e") {
    grid = generateEmptyGrid();
  }
}

function generateRandomGrid(cols, rows) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        grid[y].push(1);
      }
      else {
        grid[y].push(0);
      }
    }
  }
  return grid;
}

function generateEmptyGrid() {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}