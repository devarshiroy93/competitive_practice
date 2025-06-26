function printAllLeafNodes(root){

    let res = [];
    function dfs(node){
        if(node.left == null && node.right == null){
            res.push(node.val);
            return 
        }
        node.left ? dfs(node.left) :'';
        node.right ? dfs(node.right) :'';
    }
    dfs(root);
    return res
}

let lnip = root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
}
printAllLeafNodes(lnip);