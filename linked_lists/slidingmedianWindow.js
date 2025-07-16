function slidingMedianWindow(nums, k) {

    let res = [];
    //max heap
    let left = new PriorityQueue((a, b) => b - a);
    //min heap
    let right = new PriorityQueue((a, b) => a - b);

    //invalid map
    let invalid = new Map();


    function rebalance() {

        if (left.size() > right.size() + 1) {
            right.enqueue(left.dequeue());
            prune(left)
        } else {
            left.enqueue(right.dequeue());
            prune(right);
        }
    }
    function prune(heap) {

        while (heap.size() > 0) {
            let top = heap.front();
            if (invalid.has(top)) {
                heap.dequeue();
                invalid.set(top, invalid.get(top) - 1);
                if (invalid.get(top) === 0) { invalid.delete(top) };
            } else {
                break;
            }
        }
    }
    function remove(num) {
        invalid.set(num, ((invalid.get(num) || 0) + 1));

        //check which heap the num resides
        if (num <= left.front()) {
            if (num == left.front()) { prune(left) };
        } else {
            if (num == right.front()) { prune(right) };
        }
        rebalance();

    }
    function addNum(num) {
        if (left.size() === 0 || left.front() > num) {
            left.enqueue(num)
        } else {
            right.enqueue()
        }

        rebalance();
    }
    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i]);
        if (i >= k - 1) {
            if (k % 2 === 1) {
                res.push(left.front());
            }
            if (k % 2 === 0) {
                let medianValue = (left.front() + right.front()) / 2;
                res.push(medianValue);
            }
        }

        remove(i - k + 1);

    }

    return res
}

//[2,1,5,7] k = 3