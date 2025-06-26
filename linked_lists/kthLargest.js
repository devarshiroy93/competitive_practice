class KthLargest{

    constructor(k,nums){
        this.k = k;
        this.minHeap = new MinHeap();
        for(let num of nums){
            this.add(num);
        }


    }

    add(val){
        
        this.minHeap.insert(val);
        if(this.minHeap.size() > k){
            this.minHeap.extractMin();
        }

        return this.minHeap.peek()

    }
}