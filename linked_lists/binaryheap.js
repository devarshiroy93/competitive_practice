class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let currentIndex = this.values.length - 1;
        const bubble = (latestIndex) => {
            const parentIndex = this.getParentIndex(latestIndex);
            if (this.values[parentIndex] < this.values[latestIndex]) {
                this.values = this.swap(latestIndex, parentIndex, this.values);
                bubble(parentIndex)
            } else {
                return this.values;
            }
        }
        if (this.values.length > 1) bubble(currentIndex)

    }

    extractMax() {
        const returnVal = this.values.shift();
        this.values.unshift(this.values[this.values.length - 1]);
        this.values.pop();
        const bubbleDown = (index) => {
            let swapTargetIndex = -1;
            const leftChildIndex =  this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            const rightChildValue = this.values[rightChildIndex];
            const leftChildValue = this.values[leftChildIndex];
            const biggerVal = Math.max(rightChildValue,leftChildValue);
            if(biggerVal === rightChildValue){
                swapTargetIndex = rightChildIndex
            }
            if(biggerVal === leftChildValue){
                swapTargetIndex = leftChildIndex
            }
           
            if(this.values[index] < biggerVal){
                this.swap(index , swapTargetIndex , this.values);
                bubbleDown(swapTargetIndex);
            }

           
           
        }
        bubbleDown(0);
        return returnVal;
    }

    swap(index, targetIndex, container) {
        const temp = container[index];
        container[index] = container[targetIndex];
        container[targetIndex] = temp;
        return container
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    printAll() {
        console.log(this.values)
    }

    getLeftChildIndex(parentIndex) {
        return 2*parentIndex +1;
    }
    getRightChildIndex(parentIndex){
        return 2*parentIndex +2; 
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(1);
// maxBinaryHeap.insert(2);
// maxBinaryHeap.insert(3);
// maxBinaryHeap.insert(4);
//--------------------------->
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);

maxBinaryHeap.printAll();
maxBinaryHeap.insert(199);
maxBinaryHeap.printAll();
console.log('extractMax',maxBinaryHeap.extractMax());
maxBinaryHeap.printAll('afterextract', maxBinaryHeap.printAll());