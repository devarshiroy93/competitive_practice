function kthSmallestinSorted2dArray(matrix, k) {

    let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

    let n = matrix.length;

    for (let i = 0; i < Math.min(n, k); i++) {
        //take the first element of each row and push into the minheap
        //[val,r,c]
        //Taking on the smaller of n and k for efficiency
        minHeap.enqueue(matrix[i][0], i, j);
    }

    let res  ;
    while (k > 0) {
        let [val, r, c] = minHeap.dequeue();
        res = val;
        //push the right element of each to the minHeap
        if (c + 1 < n) {
            minHeap.enqueue([matrix[r][c + 1], r, c + 1]);
        }
        k--;
    }

    return res
}

//TC (nlogk)
//SC( o(k));