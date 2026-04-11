// Chess puzzle
// Bat-Erdene Lkhagvasuren
// Date
//
// Extra for Experts:
// 

const EMPTY = "0";
const BOARD_DIMENSION = 8;
let chessMoveGrid;
let theGrid;
let cols;
let rows;
let cellSize;
let puzzle;
let board;
let selected = null; // 

// White pieces
const WHITE_PAWN = "2";
const WHITE_KNIGHT = "4";
const WHITE_KING = "6";
const WHITE_BISHOP = "7";
const WHITE_ROOK = "8";
const WHITE_QUEEN = "9";

// Black pieces
const BLACK_PAWN = "1";
const BLACK_KING ="3";
const BLACK_ROOK = "5";
const BLACK_KNIGHT = "10";
const BLACK_BISHOP = "11";
const BLACK_QUEEN = "12";

// pieces declared
let blackKingImg;
let blackPawnImg;
let blackKnightImg;
let blackRookImg;
let blackBishopImg;
let blackQueenImg;

let whiteKingImg;
let whitePawnImg;
let whiteKnightImg;
let whiteRookImg;
let whiteBishopImg;
let whiteQueenImg;






function preload() {
  blackKingImg = loadImage("assets/black.king.svg");
  blackPawnImg = loadImage("assets/black.pawn.svg");
  blackBishopImg = loadImage("assets/blackBishop.svg");
  blackQueenImg = loadImage("assets/blackQueen.svg");
  blackRookImg = loadImage("assets/blackRook.svg");
  blackKnightImg = loadImage("assets/blackKnight.svg");

  whitePawnImg = loadImage("assets/white.pawn.svg");
  whiteKnightImg = loadImage("assets/white.knight.svg");
  whiteBishopImg = loadImage("assets/whiteBishop.svg");
  whiteKingImg = loadImage("assets/whiteKing.svg");
  whiteQueenImg = loadImage("assets/whiteQueen.svg");
  whiteRookImg = loadImage("assets/whiteRook.svg");

  puzzle = loadStrings("assets/1.puzzle");
  board = loadStrings("assets/2.board");
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
  theGrid = loadPuzzle(board);
}

function draw() {
  background(220);
  chessBoard();
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  
}

// Displays the chess pieces on the board
function displayPieces() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (theGrid[y][x] === BLACK_KING) {
        image(blackKingImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_PAWN) {
        image(blackPawnImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_BISHOP) {
        image(blackBishopImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_KNIGHT) {
        image(blackKnightImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_ROOK) {
        image(blackRookImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === BLACK_QUEEN) {
        image(blackQueenImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }

      if (theGrid[y][x] === WHITE_PAWN) {
        image(whitePawnImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_KNIGHT) {
        image(whiteKnightImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_BISHOP) {
        image(whiteBishopImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_ROOK) {
        image(whiteRookImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_QUEEN) {
        image(whiteQueenImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (theGrid[y][x] === WHITE_KING) {
        image(whiteKingImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

function keyPressed() {
  if (key === "p") {
    theGrid = loadPuzzle(puzzle);
  }
}

// uses the external assets to create the chess board
function loadPuzzle(thePuzzle) {
  let newGrid = [];

  for (let y = 0; y < thePuzzle.length; y++) {
    let row = thePuzzle[y].split(" ");
    newGrid[y] = [];

    for (let x = 0; x < row.length; x++) {
      newGrid[y][x] = row[x];
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