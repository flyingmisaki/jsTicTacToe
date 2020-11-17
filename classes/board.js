// Represents a game board
class Board {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.clear()
    }

    // Returns winner if there is one
    getWinner() {
        console.log("Horizontal win: " + this.getWinnerFromRows())
        console.log("Vertical win: " + this.getWinnerFromColumns())
        console.log("Diag win: " + this.getWinnerFromDiagonal())
        console.log("Antidiag win: " + this.getWinnerFromAntiDiagonal())
    }
    
    // Gets antidiagonal and fills it into an array
    getAntiDiagonal() {
        let antiDiagonal = []
        for (let x = this.state.length, y = this.state.length; x > 0, y < 0; x--, y--) {
            antiDiagonal.push(this.state[x][y])
        }
        return antiDiagonal
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
        for (let x = 0, y = 0; x < this.state.length, y < this.state.length; x++, y++) {
            diagonal.push(this.state[x][y])
        }
        return diagonal
    }

    // Checks diagonal for a winner. Returns winner if there is one
    getWinnerFromDiagonal() {
        const diagonal = this.getDiagonal()
        const winner = this.getWinnerFromArray(diagonal)
        return winner

    }
    
    // Gets a single column and fills it into an array
    getColumn(x) {
        return this.state.map(row => row[x])
    }
    
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
            const row = this.state[y]
            const winner = this.getWinnerFromArray(row)
            if (winner != null) {
                return winner
            }
        }
        return null
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