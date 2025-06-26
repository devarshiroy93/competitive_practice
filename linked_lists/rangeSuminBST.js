function rangeSuminBst(root, low, high) {

    let res = 0;

    function dfs(node) {
        if(node == null){
            return ;
        }
        if (low > node.val) {
            dfs(node.right);
        }
        if(high < node.val){
            dfs(node.left)
        }
        if(low <= node.val && node.val <= high){
            res = res + node.val;
            dfs(node.left);
            dfs(node.right);
        }
    }
    dfs(root);
    return res;
}
let rsBst = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      left: null,
      right: null
    }
  }
}
rangeSuminBst(rsBst,7,15)