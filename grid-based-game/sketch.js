// Chess puzzle
// Bat-Erdene Lkhagvasuren
// 2026-04-12
//
// Extra for Experts:
// Created a click based movement system 
// Built a string splitter that takes in data from an external file

const EMPTY = "0";
const BOARD_DIMENSION = 8;
let state = "board";
let theGrid;
let cols;
let rows;
let cellSize;
let puzzle;
let board;
let movecheck;
let selected = null;
let validMove = true;

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

// Preloads all the pictures and the puzzle
function preload() {
  // Chess pieces
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

  // Puzzle and the main chess board
  puzzle = loadStrings("assets/1.puzzle");
  board = loadStrings("assets/2.board");
  movecheck = loadStrings("assets/3.pieces");
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
  winOrLose();
}

// Function that shows whether you got the puzzle right or wrong
function winOrLose() {
  if (state === "win") {
    fill("Darkblue");
    textAlign(CENTER, CENTER);
    textSize(100);
    text('You won!', width/2, height/2);
  }
  if (state === "lose") {
    fill("Darkblue");
    textAlign(CENTER, CENTER);
    textSize(100);
    text('Try again!', width/2, height/2);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  if (selected === null) {
    // Selects the piece that you want to move
    if (theGrid[y][x] !== EMPTY) {
      selected = {x: x, y: y};
    }
  }
  else if (selected !== null && validMove) {
    // The movement of the selected piece
    let piece = theGrid[selected.y][selected.x];

    // prevents the pieces from disappearing after being clicked multiple times
    if (theGrid[selected.y][selected.x] !== theGrid[y][x]) { 
      theGrid[selected.y][selected.x] = EMPTY;        
    }

    // if (theGrid[selected.y][selected.x] === WHITE_KING && 
    //   theGrid[y][x] === theGrid[selected.y + 1][selected.x + 1] && 
    //   theGrid[y][x] === theGrid[selected.y - 1][selected.x + 1] &&
    //   theGrid[y][x] === theGrid[selected.y][selected.x + 1] &&
    //   theGrid[y][x] === theGrid[selected.y + 1][selected.x] &&
    //   theGrid[y][x] === theGrid[selected.y - 1][selected.x] &&
    //   theGrid[y][x] === theGrid[selected.y - 1][selected.x - 1] &&
    //   theGrid[y][x] === theGrid[selected.y][selected.x - 1] &&
    //   theGrid[y][x] === theGrid[selected.y - 1][selected.x - 1]) {
    //   theGrid[y][x] = piece;
    // }
    theGrid[y][x] = piece;
    
    selected = null;
    puzzleOver();
  }
}

// Displays the chess pieces on the board
function displayPieces() {
  if (state === "puzzle" || state === "board") {

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Black pieces
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
        // White pieces
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
}

// Switches into the puzzle when the key P is pressed
function keyPressed() {
  if (key === "p") {
    theGrid = loadPuzzle(puzzle);
    state = "puzzle";
  }
  if (key === "b") {
    theGrid = loadPuzzle(board);
    state = "board";
  }
  if (key === "w") {
    state = "win";
  }
  if (key === "t") {
    theGrid = loadPuzzle(movecheck);
  }
}

// Function that uses the external assets to create the chess board
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
  if (state === "board" || state === "puzzle") {
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
}

// Function that ends the puzzle after making a move in the puzzle
function puzzleOver() {
  if (state === "puzzle") {
    if (theGrid[4][2] === WHITE_KNIGHT) {
      state = "win";
    }
    else {
      state = "lose";
    }
  }
}