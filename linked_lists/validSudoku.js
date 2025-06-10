function isValidSudoku(board) {
    let rows = new Array(9).fill(0).map(() => new Set);
    let cols = new Array(9).fill(0).map(() => new Set);
    let squares = new Array(9).fill(0).map(() => new Set);

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (board[r][c] === '.') continue;
            if (rows[r].has(board[r][c])) {
                return false
            }
            if (cols[c].has(board[r][c])) {
                return false
            }
            if (squares[squareIndex].has(board[r][c])) {
                return false
            }

            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            squares[squareIndex].add(board[r][c]);
        }
    }

    return true;
}

isValidSudoku([]);