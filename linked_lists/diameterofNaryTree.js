function diameterOfNaryTree(root) {

    let diameter = 0;
    function dfs(node) {
        if (node == null) {
            return 0
        }
        let max1 = 0;
        let max2 = 0;
        for (let child of node.children) {
            let depth = dfs(child);
            if (depth > max1) {
                let temp = max1;
                max1 = depth;
                max2 = temp
            }
            else if (depth > max2) {
                max2 = depth
            }
        }
        diameter = Math.max(max1 + max2, diameter);
        return 1 + max1;
    }

    dfs(root);
    return diameter;

}


node = {
    val, children: []
}