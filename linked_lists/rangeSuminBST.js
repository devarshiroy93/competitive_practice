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


//Hard variant

class RangeAverageBST {
    constructor(root) {
        this.inOrder = [];
        this.prefixSum = [];

        const inorder = (node) => {
            if (!node) return;
            inorder(node.left);
            this.inOrder.push(node.val);
            inorder(node.right);
        };
        inorder(root);

        // Build prefixSum
        this.prefixSum = new Array(this.inOrder.length);
        this.prefixSum[0] = this.inOrder[0];
        for (let i = 1; i < this.inOrder.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.inOrder[i];
        }
    }

    average(low, high) {
        const { inOrder, prefixSum } = this;

        // Binary search for first index >= low
        let left = this.lowerBound(inOrder, low);
        // Binary search for last index <= high
        let right = this.upperBound(inOrder, high);

        if (left > right) return 0; // no valid nodes

        let sum = prefixSum[right] - (left > 0 ? prefixSum[left - 1] : 0);
        let count = right - left + 1;
        return sum / count;
    }

    lowerBound(arr, target) {
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] < target) l = m + 1;
            else r = m - 1;
        }
        return l;
    }

    upperBound(arr, target) {
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] > target) r = m - 1;
            else l = m + 1;
        }
        return r;
    }
}
