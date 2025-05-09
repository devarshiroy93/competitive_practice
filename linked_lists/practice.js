class Practice {
    isValidBST(root) {
        function isValid(node, min, max) {

            if (node === null) {
                return true
            }

            if (!((node.val > min) && (node.val < max))) {
                return false
            }

            //recursive call here

            return isValid(node.left, -Infinity, node.val) && isValid(node.right, node.val, Infinity);
        }

        return isValid(root, -Infinity, Infinity);
    }
}
const prac1 = {
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 6,
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
    }
  }
  



new Practice().isValidBST(prac1);

