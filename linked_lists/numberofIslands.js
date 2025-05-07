function numIslands(grid) {
    if (grid.length === 0) {
        return 0
    }
    let rows = grid.length;
    let cols = grid[0].length;
    let noOfIslands = 0;

    let visited = new Set();

    function dfs(r, c) {


        //this can travel in four directions
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return
        }
        if (grid[r][c] === "0") {
            return
        }
        if (visited.has(`${r},${c}`)) {
            return
        }
        console.log(`dfs for-->${r},${c}-->item val-->${grid[r][c]}`);
        //adding to visited
        console.log("ADDING TO VISITED r c value", r, c, grid[r][c]);
        visited.add(`${r},${c}`);
        //distribute in 4 directions;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);

    }
    //loop over all the grid items

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == "1" && !(visited.has(`${i},${j}`))) {
                console.log('DFS CALLED FOR', grid[i][j]);
                dfs(i, j);
                noOfIslands++;

            } else {
                console.log('DFS NOT CALLED for', grid[i][j])
            }

        }
    }
    console.log('ANSWEEEEERRRR', noOfIslands);
    return noOfIslands;
}

let nip = [
    ["1", "0", "1"],
    ["0", "1", "1"],
    ["0", "1", "0"]
];


numIslands(nip);