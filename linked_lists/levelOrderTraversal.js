function levelOrderTraversal(root) {

    if(!root) return [];
    let queue = [];
    let res = [];

    queue.push(root);
    while (queue.length > 0) {
        let levelEls = [];
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            const fel = queue.shift();
            levelEls.push(fel.val);
            console.log('LEVL LIST', levelEls);
            
            if (fel.left) {
                queue.push(fel.left);

            }
            if (fel.right) {
                queue.push(fel.right);
            }
        }
        res.push(levelEls);

    }

    console.log(res);
    return res
}
let UnevenBST = {
    val: 40,
    left: {
        val: 20,
        left: {
            val: 10,
            right: {
                val: 15,
                left: null,
                right: null
            },
            left: null
        },
        right: null
    },
    right: {
        val: 60,
        left: {
            val: 50,
            left: null,
            right: null
        },
        right: {
            val: 80,
            left: {
                val: 70,
                right: {
                    val: 75,
                    left: null,
                    right: null
                },
                left: null
            },
            right: null
        }
    }
};


levelOrderTraversal(UnevenBST);