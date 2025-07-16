function copyBTWithRandomPointer(root) {
    let oldToNew = new Map();
    oldToNew.set(null, null);
    function dfs(node) {
        if (node == null) {
            return
        }
        let newNode = new Node(node.val);
        oldToNew.set(node, newNode);
        dfs(node.left);
        dfs(node.right);
    }

    function dfsWithPointerAssignment(node) {
        if (node == null) {
            return
        }
        let newNode = oldToNew.get(node);
        newNode.left = oldToNew.get(node.left);
        newNode.right = oldToNew.get(node.right);
        newNode.random = oldToNew.get(node.random);
        dfsWithPointerAssignment(node.left);
        dfsWithPointerAssignment(node.right);
    }

    dfs(root);
    dfsWithPointerAssignment(root);
    return oldToNew.get(root);
}

class Node {
    constructor(val = 0, left = null, right = null, random = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.random = random;
    }
}

function copyBTWithRandomPointerOnePass(root) {
    const map = new Map();

    function clone(node) {
        if (node === null) return null;

        if (map.has(node)) return map.get(node);

        // Create new node and store in map
        const newNode = new Node(node.val);
        map.set(node, newNode);

        // Recursively clone and assign pointers
        newNode.left = clone(node.left);
        newNode.right = clone(node.right);
        newNode.random = clone(node.random);

        return newNode;
    }

    return clone(root);
}
