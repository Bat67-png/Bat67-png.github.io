// Chess puzzle
// Bat-Erdene Lkhagvasuren
// Date
//
// Extra for Experts:
// 
const EMPTY = 0;
const BLACK_PAWN = 1;
const WHITE_PAWN = 2;
const BLACK_KING = 3;
const BOARD_DIMENSION = 8;
let theGrid;
let cols;
let rows;
let cellSize;

// pieces declared
let blackKingImg;
let blackPawnImg;
let whitePawnImg;
let puzzle;

// pieces coordinates
// let theBlackKing = {
//   x: 7,
//   y: 0,
// };
// let theWhiteKing = {
//   x: 3,
//   y: 2
// };
// let blackPawn1 = {
//   x: 7,
//   y: 1
// };

// let blackPawn2 = {
//   x: 6,
//   y: 1
// };

// let blackPawn3 = {
//   x: 2,
//   y: 1
// };

// let blackPawn4 = {
//   x: 1,
//   y: 1
// };

// let blackPawn5 = {
//   x: 0,
//   y: 2
// };

// let whitePawn1 = {
//   x: 6,
//   y: 6
// };

// let whitePawn2 = {
//   x: 5,
//   y: 6
// };

// let whitePawn3 = {
//   x: 2,
//   y: 6
// };

// let whitePawn4 = {
//   x: 0,
//   y: 6
// };

// let whitePawn5 = {
//   x: 2,
//   y: 5
// };


function preload() {
  blackKingImg = loadImage("black.king.svg");
  blackPawnImg = loadImage("black.pawn.svg");
  whitePawnImg = loadImage("white.pawn.svg");
  puzzle = loadStrings("assets/1.puzzle");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    cellSize = height/BOARD_DIMENSION;
  }
  else {
    cellSize = width/BOARD_DIMENSION;
  }
  rows = 8;
  cols = 8;
  theGrid = generateTHeBoard(BOARD_DIMENSION, BOARD_DIMENSION);

  // theGrid[theBlackKing.y][theBlackKing.x] = BLACK_KING;
  // theGrid[blackPawn1.y][blackPawn1.x] = BLACK_PAWN;
  // theGrid[blackPawn2.y][blackPawn2.x] = BLACK_PAWN;
  // theGrid[blackPawn3.y][blackPawn3.x] = BLACK_PAWN;
  // theGrid[blackPawn4.y][blackPawn4.x] = BLACK_PAWN;
  // theGrid[blackPawn5.y][blackPawn5.x] = BLACK_PAWN;

  // theGrid[whitePawn1.y][whitePawn1.x] = WHITE_PAWN;
  // theGrid[whitePawn2.y][whitePawn2.x] = WHITE_PAWN;
  // theGrid[whitePawn3.y][whitePawn3.x] = WHITE_PAWN;
  // theGrid[whitePawn4.y][whitePawn4.x] = WHITE_PAWN;
  // theGrid[whitePawn5.y][whitePawn5.x] = WHITE_PAWN;


}

function draw() {
  background(220);
  chessBoard();
}

// Display the chess pieces on the board
function displayPieces() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (theGrid[y][x] === BLACK_KING) {
        image(blackKingImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_PAWN) {
        image(blackPawnImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_PAWN) {
        image(whitePawnImg, x*cellSize, y*cellSize, cellSize, cellSize);
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

function keyPressed() {
  if (key === "p") {
    theGrid = puzzle;
    displayPieces();
  }
}

// Creates the visual board 
function chessBoard() {
  let isWhite = true;
  for (let x = 0; x < BOARD_DIMENSION; x++) {
    for (let y = 0; y < BOARD_DIMENSION; y++) {
      if (isWhite) {
        fill("white");
      }
      if (!isWhite) {
        fill("darkgray");
      }
      noStroke();
      square(x*cellSize, y*cellSize, cellSize);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
  displayPieces();
} 