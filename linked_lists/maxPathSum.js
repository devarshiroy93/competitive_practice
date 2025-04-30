function maxPathSum(root) {

    let max = -Infinity;
    function helper(node) {

        if (!node) {
            return 0
        }

        //left sum 
        let leftSum = Math.max(helper(node.left), 0);
        //right sum
        let rightSum = Math.max(helper(node.right), 0);

        //this sum is considering the node in this context as curving node
        //this sum you do not return upwards 
        //this sum only updates the max variable.
        let currentSum = node.val + leftSum + rightSum;


        max = Math.max(currentSum, max);

        //this is considering the parent as a curving point
        return node.val + Math.max(leftSum, rightSum)
    }

    helper(root);
    return max
}

const testtree = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

const op = maxPathSum(testtree);
console.log('op', op);

