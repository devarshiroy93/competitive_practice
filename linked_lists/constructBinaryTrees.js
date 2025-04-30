class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class Solution {

    //build Binary tree from preOrder and inorder traversal
    //Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]

    buildTree(preorder, inorder) {
        if (preorder.length == 0 || inorder.length === 0) {
            return null
        }
        let rootVal = preorder[0];
        let root = new TreeNode(rootVal);
        let mid = inorder.indexOf(rootVal);
        root.left = this.buildTree(
            preorder.slice(1, mid+1),
            inorder.slice(0, mid),
        );
        root.right = this.buildTree(
            preorder.slice(mid + 1),
            inorder.slice(mid + 1),
        );
        return root;

    }
}
const soln = new Solution();
let tree = soln.buildTree([3,9,20,15,7], [9,3,15,20,7]);
console.log(tree);