// Enables array item inserting at a given index with insert()
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item)
}

// Returns a random integer between two given values (included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}