// Impor Board class from seperate file
// import Board from "./classes/board.js"
const Board = require("./classes/board.js")

const board = new Board([["o", "o", "x"], ["", "", ""], ["x", "", "o"]])

board.print()