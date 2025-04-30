function wordSearch(board, word) {
    let rows = board.length;
    let columns = board[0].length;
    let path = new Set();
    //this is the recursive backtracking fn
    function dfs(r, c, i) {


        if (word.length === i) {
            return true
        }
        if (r < 0
            || c < 0
            || r >= rows
            || c >= columns
            || path.has(`${r},${c}`)
            || board[r][c] != word[i]) {

            return false
        }
        path.add(`${r},${c}`);

        let res = (
            dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1)
        );
        path.delete(`${r},${c}`);
        return res;
    }
    //loop through the 2d matrix
    //this is where you need to call recursion for each character
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            console.log('CHARACTER', board[i][j]);
            if (dfs(i, j, 0)) return true;
        }
    }
    return false


}


let boardIp = [
    ["A", "B", "C", "D"],
    ["S", "A", "A", "T"],
    ["A", "C", "A", "E"]
];
let wordIp = "CAT"

wordSearch(boardIp, wordIp);


