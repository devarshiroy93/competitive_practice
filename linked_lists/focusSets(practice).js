class FocusSet1 {

    wordSearch(board, word) {

        let vis = new Set();
        let rows = board.length;
        let cols = board[0].length;
        function backtrack(r, c, index) {



            if (index === word.length) {
                return true
            }
            if (r < 0 || c < 0 || r >= rows || c >= cols ||
                vis.has(`${r}-${c}`) ||
                word[index] !== board[r][c]) {
                return false;
            }

            vis.add(`${r}-${c}`);
            let valRet =
                backtrack(r + 1, c, index + 1) ||
                backtrack(r - 1, c, index + 1) ||
                backtrack(r, c + 1, index + 1) ||
                backtrack(r, c - 1, index + 1);
            vis.delete(`${r}-${c}`);
            return valRet;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let retVal = backtrack(i, j, 0)
                if (retVal) {
                    return true
                }
            }
        }
        return false;
    }
}


let wsBoard = [["A", "B", "C", "D"]];
let word = 'ABCE';

let fs1 = new FocusSet1();
fs1.wordSearch(wsBoard, word);