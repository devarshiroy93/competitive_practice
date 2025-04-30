// this is inefficient

function wordSearch2(board, words) {
    const pt = new PrefixTree();
    const res = [];
    const rows = board.length;
    const cols = board[0].length;

    for (let word of words) {
        pt.insert(word);
    }

    const visited = new Set();

    function dfs(r, c, builtWord) {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            visited.has(`${r},${c}`)
        ) return;

        builtWord += board[r][c];
        if (!pt.startsWith(builtWord)) return;

        if (pt.search(builtWord) && !res.includes(builtWord)) {
            res.push(builtWord);
        }

        visited.add(`${r},${c}`);

        dfs(r + 1, c, builtWord);
        dfs(r - 1, c, builtWord);
        dfs(r, c + 1, builtWord);
        dfs(r, c - 1, builtWord);

        visited.delete(`${r},${c}`); // backtrack
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, '');
        }
    }

    return res;
}

let pt = new PrefixTree();
let ws2 = [["a", "c"], ["p", "e"]];
let words = ['ace', 'ape', 'app'];
console.log(wordSearch2(ws2, words));
