// Chess puzzle
// Bat-Erdene Lkhagvasuren
// Date
//
// Extra for Experts:
// 
const EMPTY = 0;
const PAWN = 1;
const WHITE_KING = 2;
const BLACK_KING = 3;
const BOARD_DIMENSION = 8;
let theGrid;
let cols;
let rows;
let cellSize;
let blackKingImg;
let theBlackKing = {
  x: 3,
  y: 0,
};
let theWhiteKing = {
  x: 3,
  y: 2
};

function preload() {
  blackKingImg = loadImage("black.king.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    cellSize = height/BOARD_DIMENSION;
  }
  else {
    cellSize = width/BOARD_DIMENSION;
  }
  theGrid = generateTHeBoard(BOARD_DIMENSION, BOARD_DIMENSION);

  theGrid[theBlackKing.y][theBlackKing.x] = BLACK_KING;
}

function draw() {
  background(220);
  displayPieces();
  // chessBoard();
}

function displayPieces() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (theGrid[y][x] === BLACK_KING) {
        // fill("black");
        image(blackKingImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  console.log(x, y);

  console.log(theGrid);
}


// Creates the array board which I will use to put my chess pieces in
function generateTHeBoard(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}


// Creates the visual board 
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