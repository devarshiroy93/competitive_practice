class MaxHeap {

    heap = [];
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }

    }

    heapifyDown() {
        let index = 0;

        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            if (rightChildIndex < this.heap.length &&
                this.heap[largerChildIndex] < this.heap[this.getRightChildIndex(index)]) {
                largerChildIndex = this.getRightChildIndex(index)
            }
            if (this.heap[largerChildIndex] <= this.heap[index]) break;
            this.swap(largerChildIndex, index);
            index = largerChildIndex;

        }
    }

    extractMax() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    };

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

}