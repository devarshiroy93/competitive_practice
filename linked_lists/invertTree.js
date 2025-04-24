function invertTree(root) {

    if (!root) return null

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    console.log('ROOT==>',root)
    return root;
}

let invertTreeIp = {
    val: 1,
    left: {
        val: 2,
        left : null,
        right : null
    },
    right: {
        val: 3,
        left : null,
        right : null
    }
}

invertTree(invertTreeIp);