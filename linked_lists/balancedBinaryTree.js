function isBalanced(root) {

    let balanced = true;
    function dfs(node) {

        if (node == null) {
            return 0
        }

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        let tbalance = Math.abs(leftHeight - rightHeight)
        if (tbalance > 1) {

            balanced = false
        }
        balanced = true
        return 1 + Math.max(leftHeight, rightHeight)


    }

    dfs(root);
    return balanced;
}