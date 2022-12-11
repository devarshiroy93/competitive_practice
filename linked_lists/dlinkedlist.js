class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let returnVal = null
        if (this.length === 0) {
            this.length--
            return null
        } else if (this.length === 1) {
            returnVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--
            return returnVal;
        } else {
            const oldTail = this.tail;
            this.tail = oldTail.prev;
            oldTail.prev = null;
            this.tail.next = null;
            this.length--
            returnVal = oldTail;

        }

        return returnVal
    }

    shift() {
        let returnVal = null
        if (this.length === 0) {
            return null
        } else if (this.length === 1) {
            returnVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--
            return returnVal;
        } else {
            const oldHead = this.head;
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
            this.length--;
            returnVal = oldHead
        }

        return returnVal
    }

    unshift(val) {

        if (this.length === 0) {
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode
        } else {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        return this
    }

    get(index) {

        if (index < 0) {
            return null
        } else if (index > this.length - 1) {
            return null;
        } else {
            let current = null
            if (index >= this.length / 2) {
                let count = this.length - 1;
                current = this.tail;
                while (index !== count) {
                    current = current.prev;
                    count--
                }
            } else {
                let count = 0;
                current = this.head;
                while (index !== count) {
                    current = current.next;
                    count++
                }
            }

            return current
        }
    }

    set(index, val){
        const node = this.get(index);
        if(!node){
            node.val = val;
            return true
        }else{
            return false
        }
    }
    insert(index, val){
        if(index === 0){
           return  this.unshift(val)
        }else if(index === this.length){
            return this.push(val)
        }else {
            let node = this.get(index-1);
            let newNode = new Node(val);
            newNode.next = node.next;
            newNode.prev = node;
            node.next = newNode;
            this.length++
        }
    }

    reverse(){
        let count = 0;

        const temp = this.head;
        this.head = this.tail;
        this.tail = temp
        let node = this.head;

        while(count < this.length){
            const oldPrev = node.prev;
            const oldNext = node.next;
            node.next = oldPrev;
            node.prev = oldNext;
            node = oldPrev;
            count++
        }

        console.log(this);
        return this;
    }

}

const dll = new DoublyLinkedList();
dll.push(1);//0
dll.push(2);//1
dll.push(3);//2
dll.push(4);//3
dll.push(500);//4
dll.push(501);//5
dll.push(502);//6;
dll.reverse();
// dll.insert(5,5001);
// dll.pop();
// dll.pop();
// dll.shift();
// dll.unshift('first');
console.log('get', dll.get(5));


console.log(dll)
