// Import Board from "./classes/board.js"
const Board = require("./classes/board.js")
const Player = require("./classes/player.js")

const board = new Board(4, 4)

board.state = [["x", "x", "x", "o"], 
               ["x", "o", "o", "o"],
               ["o", "o", "x", "o"],
               ["o", "x", "x", "x"]]

board.print()
board.getWinner()