function findRedundantConnection(edges) {

    let n = edges.length;
    let uf = new UnionFind(n);
    //loop over the edges in the graph
    //extract node (u,v) from each edge
    //call unionFind on each node if return false immediately return that pair of edge

    for (let i = 0; i < n; i++) {
        let [u, v] = edges[i];
        if (uf.union(u, v) === false) {
             return edges[i]
        }
    }
    return [];
}

class UnionFind {

    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX == rootY) {
            return false
        }

        this.parent[rootX] = rootY;
    }
}