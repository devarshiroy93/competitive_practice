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
}

let sll = new SinglyLinkedList();
sll.push(102);
sll.push(1);
sll.push(2);
sll.push(30);
sll.push(101);
sll.shift();
console.log(sll.pop());
console.log(sll);
