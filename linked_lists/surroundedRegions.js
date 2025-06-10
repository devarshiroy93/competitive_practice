function solve(grid) {

    let rows = grid.length;
    let cols = grid[0].length;


    //similar to dfs but no visited array
    function capture(r, c) {

        //base case false

        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 'O') {
            return
        }

        grid[r][c] = 'T';
        capture(r + 1, c);
        capture(r - 1, c);
        capture(r, c + 1);
        capture(r, c - 1);

    }

    //transform boundary Os to Ts (O-T);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if ((i == 0 || i == rows - 1 || j==0 || j== cols-1) && grid[i][j] == 'O') {
                console.log('found in 1 boundary call capture');
                capture(i, j);
            }
        }
    }

    


    //transform inner 0s to Xs (O-X);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 'O') {
                //found inner O
                console.log('found inner O')
                grid[i][j] = 'X'
            }
        }
    }


    //transform Ts back to Os (T - O)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 'T') {
                //found inner O
                console.log('found T')
                grid[i][j] = 'O'
            }
        }
    }

    console.log('grid', grid);
}


let sip = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "X", "O"]
]

solve(sip);
