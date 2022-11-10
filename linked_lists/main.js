class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        let counter = 0;
        let startNode = this.head;
        if (this.length === 0) {
            return null
        }
        while (counter < this.length) {
            let nextVal = startNode.next;
            if (!nextVal.next) {
                startNode.next = null;
                this.tail = startNode;
                this.length--;
                return nextVal;

            }
            startNode = nextVal
            counter++
        }

    }

    shift() {
        const previousHead = this.head;
        const newHead = this.head.next;

        this.head.next = null;
        this.head = newHead;
        this.length--;
        return previousHead;

    }
    unshift(val) {
        const newHead = new Node(val);
        const previousHead = this.head;
        newHead.next = previousHead;
        this.head = newHead;
        return this;
    }

    get(index) {
        let counter = 0;
        if (index === 0) {
            return this.head;
        }
        if (index > this.length - 1) {
            return null
        }
        if (index === this.length - 1) {
            return this.tail;
        }
        let startNode = this.head;
        while (counter <= index) {
            startNode = startNode.next;
            if (counter === index - 1) {
                return startNode;
            }
            counter++
        }
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(val)
        }
        if (index === 0) {
            return !!this.unshift(val)
        }

        const previousToIndexLocationNode = this.get(index - 1);
        const presentAtIndexLocationNode = previousToIndexLocationNode.next;
        const newNode = new Node(val);
        previousToIndexLocationNode.next = newNode;
        newNode.next = presentAtIndexLocationNode;
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === this.length - 1) {
            return this.pop().val;
        }

        if (index === 0) {
            return this.shift().val;
        }

        const previousToIndexLocationNode = this.get(index - 1);
        const presentAtIndexLocationNode = previousToIndexLocationNode.next;
        previousToIndexLocationNode.next = presentAtIndexLocationNode.next;
        this.length--;
        return presentAtIndexLocationNode.val;
    }

    reverse() {
        //swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null
        //looping starts
        let i = 0 ; 
        while (i < this.length) {
            next = node.next;
            node.next = previous;
            previous= node;
            node = next;
            i++
        }
    }
}

let sll = new SinglyLinkedList();
sll.push(1);//0
sll.push(2);//1
sll.push(3);//2
//sll.push(4);//3
//sll.push(101);//4
//sll.shift();
//sll.unshift(201);
//console.log(sll.pop());
//console.log(sll.get(3));
//sll.set(3,444)
//console.log(sll.remove(3));
sll.reverse();
console.log(sll);
