// Import Board from "./classes/board.js"
const Board = require("./classes/board.js")
const Player = require("./classes/player.js")
const Game = require("./classes/game.js")

// const board = new Board(4, 4)

// board.state = [["", "", "", ""], 
//                ["", "", "", ""],
//                ["", "", "", ""],
//                ["", "", "", ""]]

// board.insertCounter('x', 3, 3)

// board.print()

const game = new Game()

game.start()
