function serialiseBT(root) {
    let res = [];

    function preorderDfs(root) {

        if (root == null) {
            res.push("N");
            return
        }
        res.push(root.val.toString());
        preorderDfs(root.left);
        preorderDfs(root.right);
    }

    preorderDfs(root);
    return res.join(',');
}


function deserialiseBT(input) {
    let arr = input.split(',');  // Fix here (split by comma)

    function dfs() {
        if (arr.length === 0) return null;
        let val = arr.shift(); // Take the first element
        if (val === 'N') {
            return null;
        }
        let node = { val: parseInt(val), left: null, right: null };
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}

const serialisetree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    }
};

console.log('SERIALISED BT====', serialiseBT(serialisetree));

deserialiseBT("1,2,N,N,3,4,N,N,N");
