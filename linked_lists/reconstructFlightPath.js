function findItinerary(tickets) {
    let adj = {};
    tickets.sort(); // Sort before building for lex order

    for (const [src, dest] of tickets) {
        if (!(src in adj)) adj[src] = [];
        adj[src].push(dest);
    }

    const res = ["JFK"]

    function dfs(src) {
        //base case

        if (res.length == tickets.length + 1) {
            return true
        }

        if (!(src in adj)) return false;

        let temp = [...adj[src]]
        for (let i = 0; i < temp.length; i++) {
            const v = temp[i];
            adj[src].splice(i, 1); // Remove ith destination
            res.push(v);
            if (dfs(v)) return true;
            res.pop();
            adj[src].splice(i, 0, v); // Backtrack: restore 
        }
        return false
    }

    dfs("JFK")
    return res

}