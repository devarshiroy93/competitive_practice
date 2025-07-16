function sumNumbers(root) {

    function dfs(node, sum) {
        if (node == null) {
            return 0
        }
        sum = sum * 10 + node.val;
        if (node.left == null && node.right === null) {
            return sum;
        }

        return dfs(node.left, sum) + dfs(node.right, sum);
    }

    return dfs(root, 0)


}
//Each node can have digits from 0 - 990
function sumNumbersVariant1(root) {
    function dfs(node, sum) {
        if (node == null) {
            return 0
        }
        let places = 1;
        let val = node.val
        while (val > 0) {
            places = places * 10;
            val = Math.floor(val / 10);
        }
        sum = sum * places + node.val;
        if (node.left == null && node.right === null) {
            return sum;
        }

        return dfs(node.left, sum) + dfs(node.right, sum);
    }

    return dfs(root, 0)

}

function sumNumbers(root) {

    function dfs(node, sum) {
        if (node == null) {
            return 0
        }
        sum = sum * 10 + node.val;
        if (node.left == null && node.right === null) {
            return sum;
        }

        return dfs(node.left, sum) + dfs(node.right, sum);
    }

    return dfs(root, 0)


}
//Each node can have digits from 9 to -9.
// Each root to leaf path in the tree represents a negative number 
// if the path has an odd no of negative node values in it
function sumNumbersVariant2(root) {

    function dfs(node, sum, num_negatives) {
        if (node == null) {
            return 0
        }
        if (node.val < 0) {
            num_negatives = num_negatives + 1;
        }
        sum = sum * 10 + Math.abs(node.val);
        if (node.left == null && node.right === null) {
            let res = sum
            num_negatives % 2 === 1 ? res = -1 * res : res = res;
            return res;
        }

        return dfs(node.left, sum, num_negatives) + dfs(node.right, sum, num_negatives);
    }

    return dfs(root, 0, 0)


}

let snip = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

sumNumbers(snip);