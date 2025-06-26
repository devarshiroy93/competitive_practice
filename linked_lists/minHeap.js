class MinHeap {

    heap = [];
    //helper
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2
    }

    // Swaps two elements in the heap array
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerIndex]) {
                smallerIndex = rightChildIndex;
            }
            if (this.heap[index] <= this.heap[smallerIndex]) break;

            // Else swap and continue
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }


    heapifyUp() {

        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    extractMin() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min
    }

    heapify(array){
        this.heap= array;
        let n  = array.length;
        for(let i = Math.floor((n/2))-1 ; i>=0; i--){
            this.heapifyDown(i);
        }
    }



    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    peek() {
        let min = this.heap[0];
        return min;

    }

    size() {
        return this.heap.length
    }

}