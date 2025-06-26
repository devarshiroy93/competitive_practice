class SolutionND {

    networkDelayTime(times, n, k) {

        //create empty adj list from n (no of nodes)
        let adj = Array.from({ length: n + 1 }, () => []);

        //populate the adj list from times

        for (let time of times) {
            let [u,v,w] = time;

            adj[u].push([w, v]);
        }

        //init min heap and push the source with distance of zero
        let minHeap = new MinHeap();
        minHeap.push([0, k]);
        let vis = new Set();
        let t = 0;
        while (minHeap.size() > 0) {
            let [w, n1] = minHeap.pop();

            if (vis.has(n1)) continue;
            vis.add(n1);
            t = Math.max(t, w);
            for (let [w2, n2] of adj[n1]) {
                if (!vis.has(n2)) {
                    minHeap.push([w2 + w, n2]);
                }
            }

        }
        return vis.size === n ? t : -1;


    }
}

class MinHeap {
    constructor() {
        // The array to store heap elements.
        this.heap = [];
    }

    /**
     * Gets the number of elements currently in the heap.
     * @returns {number} The size of the heap.
     */
    size() {
        return this.heap.length;
    }

    /**
     * Gets the parent index for a given child index.
     * @param {number} i - The child index.
     * @returns {number} The parent index.
     */
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    /**
     * Gets the left child index for a given parent index.
     * @param {number} i - The parent index.
     * @returns {number} The left child index.
     */
    leftChild(i) {
        return 2 * i + 1;
    }

    /**
     * Gets the right child index for a given parent index.
     * @param {number} i - The parent index.
     * @returns {number} The right child index.
     */
    rightChild(i) {
        return 2 * i + 2;
    }

    /**
     * Swaps two elements in the heap array.
     * @param {number} i - Index of the first element.
     * @param {number} j - Index of the second element.
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Moves an element up the heap to maintain the min-heap property
     * after insertion.
     * @param {number} i - The index of the element to bubble up.
     */
    bubbleUp(i) {
        while (i > 0 && this.heap[this.parent(i)][0] > this.heap[i][0]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    /**
     * Moves an element down the heap to maintain the min-heap property
     * after extraction or removal.
     * @param {number} i - The index of the element to bubble down.
     */
    bubbleDown(i) {
        let minIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        if (left < this.size() && this.heap[left][0] < this.heap[minIndex][0]) {
            minIndex = left;
        }

        if (right < this.size() && this.heap[right][0] < this.heap[minIndex][0]) {
            minIndex = right;
        }

        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.bubbleDown(minIndex);
        }
    }

    /**
     * Inserts a new element [value, key] into the heap.
     * @param {Array<number>} item - The item to insert, e.g., [distance, node].
     */
    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.size() - 1);
    }

    /**
     * Extracts and returns the element with the smallest value from the heap.
     * @returns {Array<number>|null} The minimum element, or null if the heap is empty.
     */
    pop() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.bubbleDown(0); // Restore heap property
        return min;
    }

    /**
     * Peeks at the element with the smallest value without removing it.
     * @returns {Array<number>|null} The minimum element, or null if the heap is empty.
     */
    peek() {
        return this.size() > 0 ? this.heap[0] : null;
    }
}