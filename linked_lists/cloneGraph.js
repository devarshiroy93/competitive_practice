
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