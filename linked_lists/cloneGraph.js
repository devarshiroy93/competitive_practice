
// Definition for a Node.
class GNode {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {

    if (!node) {
        return null
    }
    let oldToNew = new Map();
    function dfs(node) {

        if (oldToNew.get(node)) {
            return oldToNew.get(node);
        }
        let newNode = new GNode(node.val);
        oldToNew.set(node, newNode);
        //loop through the neighbours and call dfs actually a clone
        for (let nei of node.neighbors) {
            newNode.neighbors.push(dfs(nei));
        }
        return newNode;
    }
    return dfs(node);

}

class GNodenew {

    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
//clone an undirected unconnected graph
function cloneGraphVariant(nodeList) {

    let oldToNew = new Map();

    function dfs(node) {
        if (node == null) {
            return null
        }

        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        let copy = new GNodenew(node.val);

        oldToNew.set(node, copy);
        for (let nei of node.neighbors) {
            copy.neighbors.push(dfs(nei));
        }
        return copy;
    }
    //loop over each node of the  graph

    for (let node of nodeList) {
        if (!oldToNew.has(node)) {
            dfs(node)
        }
    }
}