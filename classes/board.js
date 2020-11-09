// Represents a game board
class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.clear()
    }
    // Returns winner if there is one
    getWinner() {
        return this.getWinnerFromRows()
    }

    // Checks each row for a winner. Returns the winner if there is one
    getWinnerFromRows() {
        for (let y = 0; y < this.height; y++) {
            const row = this.state[y]
            const winner = this.getWinnerFromRow(row)
            if (winner != null) {
                return winner
            }
        }
        return null
    }

    // Returns winner (x, o, null)
    getWinnerFromRow(row) {
        const counters = ["x", "o"]
        let winner = null
        counters.forEach(counter => {
            // Check if every cell in a row contains the current counter
            if (row.every(cell => cell === counter)) {
                winner = counter
            }
        }) 
        return winner
    }
    
    // Clears board
    clear() {
        this.state = new Array(this.width).fill(new Array(this.height).fill(''))
    }

    // Prints the board as rows and dividers
    print() {
        this.state.forEach((row, index) => {
            this.printRow(row)
            if (index < this.width - 1) {
                this.printDivider()
            }
        })
    }

    // Prints a row
    printRow(row) {
        let rowString = ""
        // Adds the contents of the row to rowString
        row.forEach((cell, rowIndex) => {
            rowString += " " + cell + " "

            if (cell == "") {
                rowString += " "
            }
            if (rowIndex < this.width - 1) {
                rowString += "|"
            } 
        })
        console.log(rowString)
    }
    
    // Prints a horizontal divider
    printDivider() {
        const divider = '\u2015\u2015\u2015 '
        console.log(`${divider.repeat(this.width)}`)
    }

    // Returns true if every cell of the board is empty
    isEmpty() {
        return this.state.every(cell => !cell)
    }
    
    // Returns true if every cell of the board is full
    isFull() {
        return this.state.every(cell => cell)
    }
}

module.exports = Board