function inorderTraversal(root) {

    if (root === null) {
        return null
    }

    inorderTraversal(root.left);
    console.log(root.val);
    inorderTraversal(root.right);

}

function postOrderTraversal(root) {
    //left right root

    if (root == null) {
        return null
    }
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);

}

function preOrderTraversal(root){
    if(root == null){
        return null
    }

    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.left)
}


const bst = {
    val: 10,
    left: {
        val: 5,
        left: null,
        right: null
    },
    right: {
        val: 15,
        left: null,
        right: null
    }
};

function kthSmallest(root, k) {

    let traversal = []
    function inorderTraversal(root){
        if(!root){
            return null
        }

        inorderTraversal(root.left);
        traversal.push(root.val);
        inorderTraversal(root.right);
    }
    inorderTraversal(root);
    console.log(traversal);
    return traversal[k-1];

}

inorderTraversal(bst)   
postOrderTraversal(bst);
preOrderTraversal(bst);
kthSmallest(bst,1);