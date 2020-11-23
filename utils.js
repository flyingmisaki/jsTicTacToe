// Enables array item inserting at a given index
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item)
}