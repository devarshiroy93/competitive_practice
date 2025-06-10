function orangesRotting(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let maxTime = 0;

    //loop over the grid to find the freshocount and rotten oranges

    let freshCount = 0;
    let q = [];
    let vis = new Set();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                freshCount++
            }
            if (grid[i][j] === 2) {
                console.log('FOUND ROTTEN ,PUSHED INTO QUEUE')
                q.push([i, j]);
                vis.add(`${i}-${j}`);
            }
        }
    }

    while (q.length > 0) {
        let n = q.length;
        let isRotted = false;
        for (let i = 0; i < n; i++) {
            let [r, c] = q.shift();

            isRotted = addItem(r + 1, c) || isRotted;
            isRotted = addItem(r - 1, c) || isRotted;
            isRotted = addItem(r, c + 1) || isRotted;
            isRotted = addItem(r, c - 1) || isRotted;

        }
        if (isRotted) {
            maxTime = maxTime + 1;
        }


    }

    function addItem(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || vis.has(`${r}-${c}`) || grid[r][c] !== 1) {
            return false
        }
        grid[r][c] = 2;
        freshCount--;
        vis.add(`${r}-${c}`);
        q.push([r, c]);
        return true

    }

    if (freshCount === 0) {
        return maxTime
    }
    return -1

}


let orip = [[1, 1, 0], [0, 1, 1], [0, 1, 2]];

orangesRotting(orip);


