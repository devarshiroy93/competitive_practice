class Practice {

  noofConnectedComponents(n, edges) {

    let adj = Array.from({ length: n }, () => []);
    let vis = new Set();
    let res = 0;
    //make adj list
    for (let i = 0; i < edges.length; i++) {
      let [v, u] = edges[i];
      adj[v].push(u);
      adj[u].push(v);
    }

    function dfs(i) {
      if (vis.has(i)) {
        return;
      }
      //loop over neighbours
      vis.add(i);
      for (let j = 0; j < adj[i].length; j++) {
        dfs(adj[i][j]);
      }
    }
    //loop

    for (let i = 0; i < adj.length; i++) {
      if (!vis.has(i)) {
        dfs(i);
        res++
      }
    }
    return res;
  }

  validGraphTree(n, edges) {

    //check if there is a cycle
    //check if are unconnected components

  }

  //here is the directed graph 
  //remember that cycle detection is different in directed graph from undirected graph
  canFinish(numCourses, prerequisites) {

    //construct the adj list for directed graph
    let vis = new Set();
    let adj = Array.from({ length: numCourses }, () => []);

    for (let i = 0; i < prerequisites.length; i++) {
      let [u, v] = prerequisites[i];
      //make sure to read the problem statement
      adj[v].push(u);
    }

    //detect the cycle using dfs

    function dfs(i, path) {

      if (vis.has(i)) {
        return false
      }

      //detects a cycle in directed graph
      if (path.has(i)) {
        return true
      }
      path.add(i);
      
      for (let j = 0; j < adj[i].length; j++) {
        //calling dfs on heighbours
        let cyclePresent = dfs(adj[i][j],path);
        if (cyclePresent) {
          return true
        }
      }

      path.delete(i);
      vis.add(i);
      return false
    }
    for (let i = 0; i < numCourses; i++) {
      if (!vis.has(i)) {
            if (dfs(i, new Set())) return false;
        }
    }
    return true;

  }

}

let vans = new Practice().canFinish(2, [[0, 1], [1, 0]])