// Import Board from "./classes/board.js"
const Board = require("./classes/board.js")

const board = new Board(4, 4)

board.state = [["x", "x", "o", "x"], 
               ["x", "o", "o", "o"],
               ["o", "o", "o", "o"],
               ["o", "x", "o", "o"]]

board.print()
console.log(board.getWinner())
//console.log(board.getWinnerFromRow(["x", "x", "x", "x"]))