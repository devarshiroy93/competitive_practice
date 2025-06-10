
//code passed
function isIslandsAndTreasure(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let vis = new Set();

    let q = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                vis.add(`${i}-${j}`);
                q.push([i, j]);
            }
        }
    }

    //bfs code here
    let dist = 0
    while (q.length > 0) {

        let levelSize = q.length;
        for (let k = 0; k < levelSize; k++) {
            let [r, c] = q.shift();
            grid[r][c] = dist;
            addRoom(r + 1, c);
            addRoom(r - 1, c);
            addRoom(r, c + 1);
            addRoom(r, c - 1);
        }
        dist = dist + 1;


    }

    function addRoom(r, c) {

        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == -1 || vis.has(`${r}-${c}`)) {
            return
        }
        vis.add(`${r}-${c}`);
        q.push([r, c]);
    }

}

let isit = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
]

isIslandsAndTreasure(isit);

// Output: [
//   [3,-1,0,1],
//   [2,2,1,-1],
//   [1,-1,2,-1],
//   [0,-1,3,4]
// ]
