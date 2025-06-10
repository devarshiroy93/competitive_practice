function goodNotes(root) {

    function dfs(node, maxVal) {
        if (node === null) {
            return 0
        }

        let res = node.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal,node.val);
        res += dfs(node.left,maxVal);
        res += dfs(node.right,maxVal);
        return res;

    }

    return dfs(root, root.val)
}

let gn1 = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}
let goodNotesRes = goodNotes(gn1);

console.log(goodNotesRes);