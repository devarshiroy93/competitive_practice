function hasPathSum(root, target) {
    if (root == null) return false
    function dfs(node, remSum) {
        if (node.left == null && node.right == null && remSum - node.val == 0) {
            return true
        }
        
        let leftVal = node.left ? dfs(node.left, remSum - node.val) : false;
        let rightVal = node.right ? dfs(node.right, remSum - node.val) : false;

        return leftVal || rightVal;

    }

    let ans = dfs(root, target);
    return ans;

}

let hps = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: { val: 4, left: null, right: { val: 1, left: null, right: null } }
    }
}


hasPathSum(hps, 22);