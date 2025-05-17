function countComponents(n, edges) {
    const adjList = Array.from({ length: n }, () => []);
    const vis = new Set();
    let count = 0;

    for (let [n1, n2] of edges) {
        adjList[n1].push(n2);
        adjList[n2].push(n1);
    }

    function dfs(node) {
        if (vis.has(node)) return;
        vis.add(node);
        for (let nei of adjList[node]) {
            dfs(nei);
        }
    }

    for (let i = 0; i < n; i++) {
        if (!vis.has(i)) {
            dfs(i);
            count++;
        }
    }

    return count;
}


let ccIp = [[0, 1], [1, 2], [2, 3], [4, 5]]

//adjList = {
//0: [1],
//1:[2],
//2:[3],
//4:[5], 
//}


let cn = 6

console.log('countcomponent ans--->', countComponents(cn, ccIp));

