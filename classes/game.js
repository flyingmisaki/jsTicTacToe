const Board = require("./board.js")
const {HumanPlayer} = require("./player.js")

// Represents the game
class Game {
    constructor() {
        this.player1 = null
        this.player2 = null
        this.board = null
    }

    // Sets up the players and initializes game
    setup() {
        console.log("Setting up")
        this.board = new Board(3, 3)
        this.player1 = new HumanPlayer('x')
        this.player2 = new HumanPlayer('o')
    }

    // Sets up and start the game
    start() {
        this.setup()
        console.log("Starting")
        while (!this.isOver()) {
            this.playRound()
        }
    }

    // Plays a full round as long as the game isn't over
    playRound() {
        this.board.print()
        this.player1.makeMove(this.board)
        if (!this.isOver()) {
            this.board.print()
            this.player2.makeMove(this.board)
        }   
    }

    // Returns true if the game is over
    isOver() {
        return this.board.getWinner() != null || this.board.isFull()
    }
}

module.exports = Game