class SolutionTS {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Step 1: Build frequency counter
        const counter = {};
        for (let c of tasks) {
            counter[c] = (counter[c] || 0) + 1;
        }

        // Step 2: Push negative counts into maxHeap (simulated via MinHeap)
        const maxHeap = [];
        const mhCl = new MinHeapTS();

        Object.values(counter).forEach(val => {
            maxHeap.push(-val); // use negative values to simulate max heap
        });

        mhCl.heapify(maxHeap); // ✅ Fix #1: heapify method now handles starting from index i

        // Step 3: Setup time and cooldown queue
        let time = 0;
        const queue = []; // holds [count, availableAtTime]

        while (mhCl.size() > 0 || queue.length > 0) {
            time++;

            // ✅ Extract task from heap if available
            if (mhCl.size() > 0) {
                const count = mhCl.extractMin(); // this is negative

                // ✅ Fix #3: Only add back if task is still remaining
                if (count + 1 < 0) {
                    queue.push([count + 1, time + n]);
                }
            }

            // ✅ Fix #2: Move this outside heap block
            if (queue.length > 0 && queue[0][1] === time) {
                const [count, _availableTime] = queue.shift();
                mhCl.insert(count);
            }
        }

        return time;
    }
}


class MinHeapTS {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyDown(index = 0) { // ✅ Fix #1: heapifyDown can now accept a starting index
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerIndex = this.getLeftChildIndex(index);
            let rightIndex = this.getRightChildIndex(index);

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] < this.heap[smallerIndex]
            ) {
                smallerIndex = rightIndex;
            }

            if (this.heap[index] <= this.heap[smallerIndex]) break;

            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this.getParentIndex(index)] > this.heap[index]
        ) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0); // ✅ Ensure we pass starting index
        return min;
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapify(array) {
        this.heap = array;
        let n = this.heap.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i); // ✅ Fix #1 applied here
        }
    }

    peek() {
        return this.heap[0] || null;
    }

    size() {
        return this.heap.length;
    }
}


let liip = ["A", "A", "A", "B", "C"];

let soln8 = new SolutionTS();
soln8.leastInterval(liip, 2);
