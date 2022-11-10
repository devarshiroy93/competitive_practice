class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null ;
        this.tail = null;
        this.length = 0 ;
    }

    push(val){

        const newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        let returnVal = null
        if(this.length === 0 ){
            this.length--
            return null
        }else if(this.length === 1){
            returnVal = this.head;
            this.head =null;
            this.tail = null;
            this.length--
            return returnVal;
        }else{
            const oldTail = this.tail;
            this.tail =  oldTail.prev;
            oldTail.prev= null;
            this.tail.next = null;
            this.length--
            returnVal = oldTail;
           
        }
       
        return returnVal
    }

    shift(){
        let returnVal = null
        if(this.length === 0 ){
            return null
        }else if(this.length === 1){
            returnVal = this.head;
            this.head =null;
            this.tail = null;
            this.length--
            return returnVal;
        }else{
           const oldHead = this.head;
           this.head = oldHead.next;
           this.head.prev= null;
           oldHead.next = null
           this.length --;
           returnVal = oldHead
        }
       
        return returnVal
    }

}

const dll =  new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
// dll.pop();
// dll.pop();
dll.shift();

console.log(dll)
