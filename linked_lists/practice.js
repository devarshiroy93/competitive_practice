class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Practice {



  btmaxPathsum(root) {
    let max = -Infinity;
    function helper(root) {
      if (root === null) {
        return 0;
      }
      //contrust the path with root as curvature 

      const leftPath = root.val + helper(root.left);
      const rightPath = root.val + helper(root.right);


      return Math.max(leftPath, rightPath);
    }
    const res = helper(root);
    console.log('RES', res);
    return res;
  }


  generateAllSubsequence(s) {

    const res = [];
    function backtrack(index, cstr) {

      if (cstr.length > 0 && res.indexOf(cstr) == -1) {
        res.push(cstr);
      }

      //base case

      if (index === s.length) {
        return
      }
      //choose branch
      let newCstr = s[index] + cstr
      backtrack(index + 1, newCstr);

      //dont choose branch
      backtrack(index + 1, cstr);

    }
    backtrack(0, "");
    return res;
  }

  generateAllSubinArray(arr) {

    let res = [];
    function rec(index, arr, path) {

      if (index === arr.length) {
        res.push([...path]);
        return
      }
      path.push(arr[index]);
      rec(index + 1, arr, path);

      path.pop();
      rec(index + 1, arr, path);
    }
    rec(0, arr, [])
    return res;
  }

  combinationSum(arr) {
    let res = [];
    let count = 0 ;
    function backtrack(index, path, arr, remSum) {
      count++;
      if (remSum === 0) {
        res.push([...path])
        return
      }
      if (remSum < 0) {
        return
      }
      if (index == arr.length) {
        return
      }
      //pick
      path.push(arr[index]);
      let sumRem = remSum - arr[index];
      backtrack(index , path, arr, sumRem);
      //unpick
      path.pop();
      backtrack(index+1, path, arr, remSum);

    }

    backtrack(0, [], arr, 16);
    return res;

  }

}


// List 1: 1 -> 3 -> 5
const treemax = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};




const co = 4

let answerrrr = new Practice().btmaxPathsum(treemax);
console.log('Answer', answerrrr);

console.log(new Practice().generateAllSubsequence("121"));
console.log(new Practice().generateAllSubinArray([3, 4, 5]));
console.log(new Practice().combinationSum([2,5,6,9], 9))