class UnionFind {

    constructor(size) {
        this.parent = Array(size).fill(0).map((_, i) => i);
        this.rank = Array(size).fill(0)
    }

    find(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x]
    }

    union(X, Y) {
        let rootX = this.find(X);
        let rootY = this.find(Y);

        let rankX = this.rank[rootX];
        let rankY = this.rank[rootY];

        if (rootX == rootY) return false;

        if (rankX < rankY) {
            this.parent[rootX] = rootY;
        } else if (rankY > rankX) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;

        }

        return true

    }
}