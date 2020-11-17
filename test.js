let state = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let diag = []

for (x = 0, y = 0; x < state.length, y < state.length; x++, y++) {
    diag.push(state[x][y])
    console.log(diag)
}
    