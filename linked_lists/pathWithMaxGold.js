function getMaximumGold(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let max = 0;
    let vis = new Set();

    function backtrack(r,c,sum){

        if(r<0 ||
            c<0 ||
            r>=rows||
            c>=cols||
            vis.has(`${r}-${c}`)||
            grid[r][c] == 0
        ){
            return 
        }
        sum = sum + grid[r][c];
        max = Math.max(sum,max);
        vis.add(`${r}-${c}`);
        backtrack(r+1,c,sum);
        backtrack(r-1,c,sum);
        backtrack(r,c+1,sum);
        backtrack(r,c-1,sum);
        vis.delete(`${r}-${c}`)
    }

    //loop over all the elements
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                backtrack(i,j,0);
            }
        }
    }

    return max;
}

maxGoldip = [[0,6,0],[5,8,7],[0,9,0]]
getMaximumGold(maxGoldip);