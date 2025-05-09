function validTree(n, edges) {

    let adjList = {};
    for (let i = 0; i < n; i++) {
        adjList[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        let [n1, n2] = edges[i];
        adjList[n1].push(n2);
        adjList[n2].push(n1);
    }
    console.log(adjList);

    let visited = new Set();

    function dfs(i, prev) {

        if (visited.has(i)) {
            return false
        }
        visited.add(i);

        for (let j = 0; j < adj[i].length; j++) {
            let nei = adj[i][j];
            if (prev === nei) {
                continue
            }
            let val = dfs(nei, i)
            if (!val) {
                return false
            }
        }
        return true

    }
    return dfs(0, -1) && visited.size === n;
}


let n = 5
let edges = [[0, 1], [0, 2], [0, 3], [1, 4]];

validTree(n, edges)


