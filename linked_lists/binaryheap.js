class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(val){
        this.values.push(val);
        let currentIndex = this.values.length - 1;
        const bubble = (latestIndex)=>{
            const parentIndex = this.getParentIndex(latestIndex);
            if ( this.values[parentIndex] < this.values[latestIndex]){
                this.values = this.swap(latestIndex , parentIndex , this.values);
                bubble(parentIndex)
            }else{
                return this.values;
            }
        }
        if(this.values.length >1 )bubble(currentIndex)
        
    }

    swap(index , targetIndex , container){
        const temp = container[index];
        container[index] =  container[targetIndex];
        container[targetIndex] = temp;
        return container 
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2);
    }

    printAll(){
        console.log(this.values)
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