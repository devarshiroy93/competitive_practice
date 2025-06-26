function swimInWater(grid) {

    let heap = new MinHeapSwim();
    let rows = grid.length;
    let cols = grid[0].length;

    heap.insert([grid[0][0], 0, 0])//time,row,column
    let vis = new Set();
    vis.add(`0-0`);
    while (heap.size() > 0) {
        let min = heap.extractMin();
        if (min == null) break;
        let [time, r, c] = min;
        if (r === rows - 1 && c === cols - 1) {
            return time
        }
        //go down
        if (r > -1 && r + 1 < rows && !vis.has(`${r + 1}-${c}`)) {
            vis.add(`${r + 1}-${c}`)
            heap.insert([Math.max(time, grid[r + 1][c]), r + 1, c])
        }

        //go up
        if (r > -1 && r - 1 < rows && !vis.has(`${r - 1}-${c}`)) {
            vis.add(`${r - 1}-${c}`)
            heap.insert([Math.max(time, grid[r - 1][c]), r - 1, c])
        }
        //go right
        if (c > -1 && c + 1 < cols && !vis.has(`${r}-${c + 1}`)) {
            vis.add(`${r}-${c + 1}`)
            heap.insert([Math.max(time, grid[r][c + 1]), r, c + 1])
        }
        //go left
        if (c > -1 && c - 1 < cols && !vis.has(`${r}-${c - 1}`)) {
            vis.add(`${r}-${c - 1}`)
            heap.insert([Math.max(time, grid[r][c - 1]), r, c - 1])
        }
    }

    return -1

}

class MinHeapSwim {

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

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallerIndex][0]) {
                smallerIndex = rightChildIndex;
            }
            if (this.heap[index][0] <= this.heap[smallerIndex][0]) break;

            // Else swap and continue
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }


    heapifyUp() {

        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)][0] > this.heap[index][0]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    extractMin() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        if (this.heap.length > 0) {
            this.heapifyDown();
        }
        return min
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