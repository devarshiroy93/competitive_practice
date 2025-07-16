function largestIsland(grid) {
    const n = grid.length;
    const size = {};
    let label = 2;

    // DFS to label islands and calculate size
    function area(r, c, label) {
        if (r < 0 || c < 0 || r >= n || c >= n || grid[r][c] !== 1) {
            return 0;
        }

        grid[r][c] = label;
        let count = 1;

        count += area(r + 1, c, label);
        count += area(r - 1, c, label);
        count += area(r, c + 1, label);
        count += area(r, c - 1, label);

        return count;
    }

    // 1. Label and compute areas
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                size[label] = area(i, j, label);
                label++;
            }
        }
    }

    // 2. Try flipping each 0 and checking new area
    let res = Object.keys(size).length > 0 ? Math.max(...Object.values(size)) : 0;

    function connect(r, c) {
        const vis = new Set();
        let total = 1;

        for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nc >= 0 && nr < n && nc < n) {
                const islandId = grid[nr][nc];
                if (islandId > 1 && !vis.has(islandId)) {
                    vis.add(islandId);
                    total += size[islandId];
                }
            }
        }

        return total;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                res = Math.max(res, connect(i, j));
            }
        }
    }

    return res;
}
