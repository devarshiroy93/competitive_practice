class Solutionlsw {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        maxHeap = new MaxHeap();

        for (let stone of stones) {
            maxHeap.insert(stone);
        }

        while (maxHeap.size() > 1) {
            //extract first largest
            let x = maxHeap.extractMax();
            //extract second largest
            let y = maxHeap.extractMax();

            if (x - y !== 0) {
                maxHeap.insert(x-y);
            }
        }

        if(maxHeap.size() == 0){
            return 0
        }else{
            return maxHeap.peek()
        }

    }
}
