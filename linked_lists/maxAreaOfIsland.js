function maxAreaOfIsland(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let vis = new Set();
    let maxArea = -Infinity

    function backtrack(r, c, area) {

        //base case
        if (r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 0 ||
            vis.has(`${r}-${c}`)
        ) {
            return 
        }
        maxArea = Math.max(area + 1, maxArea)
        vis.add(`${r}-${c}`);
        backtrack(r + 1, c, area + 1);
        backtrack(r - 1, c, area + 1);
        backtrack(r, c + 1, area + 1);
        backtrack(r, c - 1, area + 1);
        vis.delete(`${r}-${c}`);

    }

    //loop over every element in grid

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1 && vis[i]) {
                console.log('FOUND 1 calling backtrack');
                backtrack(i,j,0)
            }
        }
    }

    return maxArea;
}

const igrid = [
  [1, 1, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1]
];
maxAreaOfIsland(igrid)


