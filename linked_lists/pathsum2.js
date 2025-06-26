function pathSum(root, target) {
  if (root == null) { return null }
  let res = [];
  function dfs(node, sum, path) {
    sum = sum + node.val;

    path.push(node.val);

    if (node.left == null && node.right == null) {
      if (sum == target) {
        res.push([...path]);
      }
    }
    if (node.left) {
      dfs(node.left, sum, path);
    }
    if (node.right) {
      dfs(node.right, sum, path);
    }
    path.pop();
  }

  dfs(root, 0, []);
  return res;
}
const pasip = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4, left: {val:5 , left : null , right : null},
      right: { val: 1, left: null, right: null }
    }
  }
};
pathSum(pasip, 22)
