const Board = require("./board.js")
const {HumanPlayer, RandomPlayer} = require("./player.js")

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
        this.player2 = new RandomPlayer('o')
    }

    // Sets up and start the game
    start() {
        this.setup()
        console.log("Starting")
        
        while (!this.isOver()) {
            console.log(this.isOver())
            this.playRound()
        }
        const winner = this.board.getWinner()

        if (winner !== null) {
            console.log(`Player ${winner} has won.`)
        }
        else {
            console.log("It's a draw!")
        }
    }

    // Plays a full round as long as the game isn't over
    playRound() {
        console.clear()
        this.board.print()
        console.log(`It's player 1's turn (${this.player1.counter}).`)
        this.player1.makeMove(this.board)
        if (!this.isOver()) {
            console.clear()
            this.board.print()
            console.log(`It's player 2's turn (${this.player2.counter}).`)
            this.player2.makeMove(this.board)
        }   
    }

    // Returns true if the game is over
    isOver() {
        return this.board.getWinner() != null || this.board.isFull()
    }
}

module.exports = Game