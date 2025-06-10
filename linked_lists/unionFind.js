//join to disjointed sets
//can be used to find a cycle in a graph as well


class UnionFind {

    constructor(n) {
        //array to store the parent of nodes
        // indexes point to node-->                 0,1,2,3,4,5
        //values point to parent nodes when n=5    [0,1,2,3,4,5]
        //initially every node is a parent of itself
        //once we call union method then the parent child relation between two nodes
        //  can change/Changes
        this.parent = Array.from({ length: n }, (_, i) => i)
    }

    //method to find the parent of particular node by number
    find(x) {

        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);
        if (p1 == p2) {
            return false
        }
        this.parent[p2] = p1;
        return true;
    }
}

let uf = new UnionFind(5);
uf.union(1,2);
uf.union(2,3);
console.log(uf.parent);