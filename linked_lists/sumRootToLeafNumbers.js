function sumNumbers(root) {

    let sum = 0;
    function dfs(node, path) {

        path.push(node.val);
        if (node.left == null && node.right == null) {
            let pathNum = Number(path.join(''));
            sum = sum + pathNum
        }
        if (node.left) { dfs(node.left, path) };
        if (node.right) { dfs(node.right, path) };
        path.pop()
    }
    dfs(root, []);
    return sum;

}

let snip = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

sumNumbers(snip);