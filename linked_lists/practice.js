function levelOrderTraversal(root) {
  if (!root) {
    return []
  }

  let q = [root];
  let res = [];

  while (q.length > 0) {

    let levelSize = q.length;
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();
      level.push(node.val);
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right);
      }

    }
    res.push(level)
  }
  console.log('res', res);
  return res;
}

let lotip = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};


function rightSideView(root) {


  if (!root) { return null }

  let q = [root];
  let res = [];

  while (q.length > 0) {

    let levelSize = q.length;
    let rightMost = null;
    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();
      rightMost = node;
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    res.push(rightMost.val);

  }

  return res;

}

let rsvip = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
};


levelOrderTraversal(lotip);
rightSideView(rsvip);




class MinHeapPractice {

  constructor() {
    this.heap = []
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return index * 2 + 1
  }
  getRightChildIndex(index) {
    return index * 2 + 2
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  extractMin() {
    if (this.heap.length == 0) return null;
    if (this.heap.length === 1) return this.heap[0];
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp()
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerIndex]) {
        smallerIndex = rightChildIndex
      }
      if (this.heap[index] <= this.heap[smallerIndex]) break;
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
}