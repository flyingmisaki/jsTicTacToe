// Represents a game board
class Board {
    constructor(width, height) {
        // Remember that the board is indexed as this.state[y][x]
        this.width = width // The number of cells in a row (the inner array)
        this.height = height // The number of rows in the state (the outer array)
        this.clear()
    }

    getRow(y) {
        return this.state[y]
    }
    
    // Gets a single column and fills it into an array
    getColumn(x) {
        return this.state.map(row => row[x])
    }

    getCounter(x, y) {
        return this.state[y][x]
    }

    // Returns winner if there is one
    getWinner() {
        console.log("Horizontal win: " + this.getWinnerFromRows())
        console.log("Vertical win: " + this.getWinnerFromColumns())
        console.log("Diag win: " + this.getWinnerFromDiagonal())
        console.log("Antidiag win: " + this.getWinnerFromAntiDiagonal())
    }

    // Returns true if every cell of the board is empty
    isEmpty() {
        return this.state.every(cell => !cell)
    }
    
    // Returns true if every cell of the board is full
    isFull() {
        return this.state.every(cell => cell)
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

// ============================================ HELPER METHODS ============================================ //

    // Checks each column for a winner. Returns winner if there is one
    getWinnerFromColumns() {
        for (let x = 0; x < this.width; x++) {
            const column = this.getColumn(x)
            const winner = this.getWinnerFromArray(column)
            if (winner != null) {
                return winner
            }
        }
        return null
    }

    // Checks each row for a winner. Returns the winner if there is one
    getWinnerFromRows() {
        for (let y = 0; y < this.height; y++) {
            const row = this.getRow(y)
            const winner = this.getWinnerFromArray(row)
            if (winner != null) {
                return winner
            }
        }
        return null
    }

    // Checks diagonal for a winner. Returns winner if there is one
    getWinnerFromDiagonal() {
        const diagonal = this.getDiagonal()
        const winner = this.getWinnerFromArray(diagonal)
        return winner

    }

    // Checks antidiagonal for a winner. Returns winner if there is one
    getWinnerFromAntiDiagonal() {
        const antiDiagonal = this.getAntiDiagonal()
        const winner = this.getWinnerFromArray(antiDiagonal)
        return winner
    }
    
    // Gets diagonal and fills it into an array
    getDiagonal() {
        let diagonal = []
        for (let x = 0, y = 0; x < this.width, y < this.width; x++, y++) {
            diagonal.push(this.getCounter(x, y))
        }
        return diagonal
    }

    // Gets antidiagonal and fills it into an array
    getAntiDiagonal() {
        let antiDiagonal = []
        for (let x = 0, y = this.height - 1; x > this.width; x++, y--) {
            antiDiagonal.push(this.getCounter(x, y))
        }
        return antiDiagonal
    }

    // Returns winner from an array (x, o, null)
    getWinnerFromArray(row) {
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
}

module.exports = Board