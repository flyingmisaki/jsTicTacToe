const prompt = require('prompt-sync')()

// Represents a player
class Player {
    constructor(counter) {
        this.counter = counter

    }

    // Makes a move on the board (to be implemented by subclasses)
    makeMove(board) {}
}

// Represents a human player
class HumanPlayer extends Player {

    // Asks the user where they want their counter placed and places it
    makeMove(board) {
        let placed = false
        while (!placed) {
            placed = true
            try {
                const x = prompt('Enter an x: \n> ')
                const y = prompt('Enter a y: \n> ')
                board.insertCounter(this.counter, x, y)
            } 
            catch (error) {
                console.log(error.message)
                placed = false
            }
        }    
    }
}

module.exports = {Player, HumanPlayer}