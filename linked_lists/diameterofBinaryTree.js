function diameterOfBinaryTree(root) {

    let diameter = 0
    function dfs(node) {
        if (node == null) {
            return 0
        }

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        diameter = Math.max(diameter, leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight)
    }

    dfs(root);
    return diameter
}