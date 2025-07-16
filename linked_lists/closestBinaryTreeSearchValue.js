function closestValue(root, target) {
    let closestValue = root.val;

    function dfs(node) {
        if (node == null) return;

        let diff = Math.abs(node.val - target);
        if (diff < Math.abs(closestValue - target)) {
            closestValue = node.val;
        } else if (diff === Math.abs(closestValue - target)) {
            closestValue = Math.min(closestValue, node.val);
        }

        if (target < node.val) {
            dfs(node.left);
        } else {
            dfs(node.right);
        }
    }

    dfs(root); // ✅ Fix: removed extra argument
    return closestValue;
}
