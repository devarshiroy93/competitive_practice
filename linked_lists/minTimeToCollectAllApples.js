// Input: n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], hasApple = [false, false, false, false, false, false, false]
// Output: 0

//Input: n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], hasApple = [false, false, true, false, true, true, false]

function minTime(n, edges, hasApple) {

    //create the adjacency list

    let adj = Array.from({ length: n }, () => []);

    for (let edge of edges) {
        let [u, v] = edge
        adj[u].push(v);
        adj[v].push(u);
    }

    //actual dfs function to get the time recursively
    function dfs(curr, prev) {

        let time = 0;
        for (let nei of adj[curr]) {
            if (nei == prev) continue;
            let childTime = dfs(nei, curr);
            if (childTime || hasApple[nei]) {
                time = time + 2 + childTime
            }
        }
        return time;

    }

    let ans  = dfs(0,-1);
    return ans;
}

minTime(7,[[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],[false, false, true, false, true, true, false])