function pacificAtlantic(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let pac = new Set();
    let atl = new Set();
    let res = [];

    //loop over first row

    for (let col = 0; col < cols; col++) {
        console.log(grid[0][col]);
        dfs(0, col, grid[0][col], pac);
    }

    //loop over last row

    for (let col = 0; col < cols; col++) {
        console.log(grid[rows - 1][col]);
        dfs(rows - 1, col, grid[rows - 1][col], atl);
    }

    //loop over first column

    for (let row = 0; row < rows; row++) {
        console.log(grid[row][0]);
        dfs(row, 0, grid[row][0], pac);
    }

    //loop over last colrmn

    for (let row = 0; row < rows; row++) {
        console.log(grid[row][cols - 1]);
        dfs(row, cols - 1, grid[row][cols - 1], atl)
    }

    function dfs(r, c, prev, vis) {

        if (r < 0 ||
            c < 0 ||
            r>=rows||
            c>=cols||
            prev > grid[r][c] ||
            vis.has(`${r}-${c}`)) {
            return
        }
        vis.add(`${r}-${c}`);
        dfs(r + 1, c, grid[r][c], vis);
        dfs(r - 1, c, grid[r][c], vis);
        dfs(r, c + 1, grid[r][c], vis);
        dfs(r, c - 1, grid[r][c], vis);

    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (atl.has(`${i}-${j}`) && pac.has(`${i}-${j}`)) {
                res.push([i, j]);
            }
        }
    }

    return res;
}



let paip = heights = [
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6]
]
pacificAtlantic(paip);

