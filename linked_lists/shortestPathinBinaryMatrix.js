function shortestPathBinaryMatrix(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let visited = new Set();
    visited.add(`0-0`);
    let q = [[0, 0, 1]];//row,column,distance

    if (grid[0][0] !== 0 || grid[rows - 1][cols - 1] !== 0) return -1;

    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    while (q.length > 0) {
        let node = q.shift();
        let [row, col, dist] = node;
        if (row == rows - 1 && col === cols - 1) {
            return dist;
        }
        for (let [dr, dc] of directions) {
            let nr = row + dr;
            let nc = col + dc;
            const key = `${nr}-${nc}`;


            if (nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols && grid[nr][nc] == 0 &&
                !visited.has(key)
            ) {
                q.push([nr, nc, dist + 1]);
                visited.add(key);
            }
        }
    }

    return -1;

}