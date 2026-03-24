// Chess puzzle
// Bat-Erdene Lkhagvasuren
// Date
//
// Extra for Experts:
// 

let theGrid;
const Pawn = 1;
const WHITE_KING = 2;
const BLACK_KING = 3;
const BOARD_DIMENSION = 8;
const LIVE_CELL = 1;
const DEAD_CELL = 0;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    cellSize = height/BOARD_DIMENSION;
  }
  else {
    cellSize = width/BOARD_DIMENSION;
  }
  theGrid = generateTHeBoard(BOARD_DIMENSION, BOARD_DIMENSION);
}

function draw() {
  background(220);
  chessBoard();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  console.log(x, y);

  console.log(theGrid);
}

// function toggleCell(x, y) {

// }


function generateTHeBoard(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (y === 1 || 6) {
        newGrid[y].push(Pawn);
      }
      else {
        newGrid[y].push(0);
      }
      
    }
  }
  return newGrid;
}


function chessBoard() {
  let isWhite = true;
  for (let x = 0; x < BOARD_DIMENSION; x++) {
    for (let y = 0; y < BOARD_DIMENSION; y++) {
      if (isWhite) {
        fill("white");
      }
      else {
        fill("black");
      }
      square(x*cellSize, y*cellSize, cellSize);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
}