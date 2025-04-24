class PQNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const newNode = new PQNode(val, priority);
        this.values.push(newNode);
        let currentIndex = this.values.length - 1;
        const bubble = (latestIndex) => {
            const parentIndex = this.getParentIndex(latestIndex);
            if (this.values[parentIndex].priority > this.values[latestIndex].priority) {
                this.values = this.swap(latestIndex, parentIndex, this.values);
                bubble(parentIndex)
            } else {
                return this.values;
            }
        }
        if (this.values.length > 1) bubble(currentIndex)

    }

    dequeue() {
        const returnVal = this.values.shift();
        this.values.unshift(this.values[this.values.length - 1]);
        this.values.pop();
        const bubbleDown = (index) => {
            let swapTargetIndex = -1;
            const leftChildIndex =  this.getLeftChildIndex(index,this.values.length -1);
            const rightChildIndex = this.getRightChildIndex(index,this.values.length -1);
            const rightChildValue = this.values[rightChildIndex].priority;
            const leftChildValue = this.values[leftChildIndex].priority;
            const smallerVal = Math.min(rightChildValue,leftChildValue);
            if(smallerVal === rightChildValue){
                swapTargetIndex = rightChildIndex
            }
            if(smallerVal === leftChildValue){
                swapTargetIndex = leftChildIndex
            }
           
            if(this.values[index].priority > smallerVal){
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
        const index =  Math.floor((childIndex - 1) / 2) ;
        if(index < 0){
            return 0
        }
        return index
    }

    printAll() {
        console.log(this.values.map(i=>i.priority))
    }

    getLeftChildIndex(parentIndex, limit) {
        const returnVal = 2 * parentIndex + 1;
        if(returnVal > limit){
            return limit
        }
        return returnVal
    }
    getRightChildIndex(parentIndex ,limit) {
        const returnVal = 2 * parentIndex + 2;
        if(returnVal > limit){
            return limit
        }
        return returnVal
    }

 

}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(41,100);
priorityQueue.enqueue(39,90);
priorityQueue.enqueue(33,50);
priorityQueue.enqueue(18,40);
priorityQueue.enqueue(27,60);
priorityQueue.enqueue(12,70);
priorityQueue.enqueue(55,80);
console.log('pq dequeue',priorityQueue.dequeue());
priorityQueue.printAll();