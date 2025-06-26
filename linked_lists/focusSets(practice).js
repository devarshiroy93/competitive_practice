class FocusSet1 {

    wordSearch(board, word) {

        let vis = new Set();
        let rows = board.length;
        let cols = board[0].length;
        function backtrack(r, c, index) {



            if (index === word.length) {
                return true
            }
            if (r < 0 || c < 0 || r >= rows || c >= cols ||
                vis.has(`${r}-${c}`) ||
                word[index] !== board[r][c]) {
                return false;
            }

            vis.add(`${r}-${c}`);
            let valRet =
                backtrack(r + 1, c, index + 1) ||
                backtrack(r - 1, c, index + 1) ||
                backtrack(r, c + 1, index + 1) ||
                backtrack(r, c - 1, index + 1);
            vis.delete(`${r}-${c}`);
            return valRet;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let retVal = backtrack(i, j, 0)
                if (retVal) {
                    return true
                }
            }
        }
        return false;
    }

    noOfIslands(grid) {

        let rows = grid.length;
        let cols = grid[0].length;
        let vis = new Set();
        let islands = 0
        function dfs(r, c) {
            //base case false

            if (r < 0 || r >= rows
                || c < 0
                || c >= cols
                || grid[r][c] === '0'
                || vis.has(`${r}-${c}`)) {
                return
            }
            vis.add(`${r}-${c}`);
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);


        }

        //loop over all elements and call dfs only when grid[r][c] == 1

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                //call dfs only when grid[i][j] == "1"
                if (grid[i][j] === '1' && !(vis.has(`${i}-${j}`))) {
                    islands = islands + 1
                    dfs(i, j);
                }
            }
        }
        return islands;
    }

    isValidBst(root) {

        function dfs(node, min, max) {

            if (node === null) {
                return true
            }

            if (!((min < node.val) && (node.val < max))) {
                return false;
            }
            return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
        }

        let res = dfs(root, -Infinity, Infinity);
        return res;

    }

    allPathsSourceTarget = function (graph) {


        let res = [];

        function dfs(index, path) {

            if (index === graph.length - 1) {
                res.push([...path]);
                return
            }

            for (let nei of graph[index]) {
                path.push(nei);
                dfs(nei, path);
                path.pop();
            }


        }
        dfs(0, [0]);
        return res
    };

    numCourses(numCourses, prerequisites) {

        //create adj list 
        let adj = Array.from({ length: numCourses }, () => []);

        //create the directed graph
        for (let i = 0; i < prerequisites.length; i++) {
            let [u, v] = prerequisites[i];
            adj[v].push(u);
        }
        //cycle detection in directed graph

        let vis = new Set();
        let onRecStack = new Set();
        function hasCycle(node) {
            if (onRecStack.has(node)) return true;
            if (vis.has(node)) return false


            onRecStack.add(node);
            vis.add(node);
            for (let nei of adj[node]) {
                if (hasCycle(nei)) {
                    return true
                }
            }
            onRecStack.delete(node);
            return false;
        }

        //loop through each node in adjList

        for (let i = 0; i < adj.length; i++) {
            if (!vis.has(i)) {
                if (hasCycle(i) == true) {
                    return false
                }
            }
        }
        return true
    }

}


let wsBoard = [["A", "B", "C", "D"]];
let word = 'ABCE';
let fsbst = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
}

let test6_valid_larger = {
    val: 8,
    left: {
        val: 4,
        left: { val: 2, left: null, right: null },
        right: { val: 6, left: null, right: null }
    },
    right: {
        val: 12,
        left: { val: 10, left: null, right: null },
        right: { val: 14, left: null, right: null }
    }
};
// Expected: true
let noOfIIp = [["0"]]


let fs1 = new FocusSet1();
fs1.wordSearch(wsBoard, word);
fs1.noOfIslands(noOfIIp);
fs1.isValidBst(test6_valid_larger)
fs1.numCourses(2, [[1, 0], [0, 1]])