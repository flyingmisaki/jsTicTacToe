// Represents a game board
class Board {
    constructor(state = [
                            ["", "", ""], 
                            ["", "", ""],
                            ["", "", ""]
                        ]) {
        this.state = state
    }

    // Prints the board as 3 rows and 2 dividers
    print() {
        this.state.forEach((row, index) => {
            this.printRow(row)
            if (index < 2) {
                this.printDivider()
            }
        })
    }

    // Prints a row
    printRow(row) {
        let rowString = ""
        // adds the contents of the row to rowString
        row.forEach((cell, rowIndex) => {
            rowString += " " + cell + " "

            if (cell == "") {
                rowString += " "
            }
            if (rowIndex < 2) {
                rowString += "|"
            } 
        })
        console.log(rowString)
    }
    
    // Prints a horizontal divider
    printDivider() {
        console.log('\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015')
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