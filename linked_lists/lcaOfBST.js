function LCAOfBST(root, p, q) {
    if (!root) return null;
    if (root.val > p.val && root.val > q.val) {
        return LCAOfBST(root.left, p, q);
    }
    else if (root.val < p.val && root.val < q.val) {
        return LCAOfBST(root.right, p, q);
    }
    else {
        return root
    }

}


let LCAOfBST1 = {
    val: 15,
    left: {
        val: 10,
        left: {
            val: 7,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        },
        right: {
            val: 12,
            left: null,
            right: null
        }
    },
    right: {
        val: 20,
        left: {
            val: 17,
            left: {
                val: 16,
                left: null,
                right: null
            },
            right: {
                val: 18,
                left: null,
                right: null
            }
        },
        right: {
            val: 25,
            left: null,
            right: null
        }
    }
};

let p = {
    val: 17, left: {
        val: 16,
        left: null,
        right: null
    },
    right: {
        val: 18,
        left: null,
        right: null
    }
};
let q = {
    val: 16,
    left: null,
    right: null
};

let res = LCAOfBST(LCAOfBST1, p, q);
console.log('res', res);