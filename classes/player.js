const prompt = require('prompt-sync')()

// Represents a player
class Player {
    constructor(counter) {
        this.counter = counter
    }

    // Makes a move on the board (to be implemented by subclasses)
    makeMove(board) {
    }
}

// Represents a human player
class HumanPlayer extends Player {

    // Asks the user where they want their counter placed and places it
    makeMove(board) {
        let placed = false
        while (!placed) {
            placed = true
            try {
                console.log('Enter an x:')
                const x = prompt('>')
                console.log('Enter an y:')
                const y = prompt('>')
                board.insertCounter(this.counter, x, y)
            } 
            catch (error) {
                console.clear()
                board.print()
                console.log(error.message)
                placed = false
            }
        }    
    }
}

// Represents an AI that plays randomly
class RandomPlayer extends Player {

    // Places counter at a random valid position
    makeMove(board) {
        // Create empty list to hold valid board positions (pairs of [x,y])
        const validPositions = []
        
        // Go through every x,y combo on the board
        for (let x = 0; x < board.width; x++) {
            for (let y = 0; y < board.height; y++) {
                
                // Add [x,y] to validPositions if its an empty board space
                if (board.getCounter(x, y) == '') {
                    validPositions.push([x, y])
                }
            }
        }

        // Choose a random position from the list
        const index = Math.floor(Math.random() * validPositions.length)
        const [x, y] = validPositions[index]

        // Insert counter at the random position
        board.insertCounter(this.counter, x, y)
    }
}

// Represents an AI that plays next to itself
class simpleBot extends Player {
    makeMove(board) {

    }
}

module.exports = {Player, HumanPlayer, RandomPlayer, simpleBot}