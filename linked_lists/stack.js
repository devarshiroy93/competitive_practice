class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new StackNode(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;

        }else {
            const temp = this.first;
            newNode.next = temp;
            this.first = newNode
        }
        this.length++;
        return this.length
    }

    pop(){
        if(this.length === 0 ){
            return null
        }else{
            if(this.length===1){
                this.last = null
            }
            const firstNode = this.first;
            const newFirst = this.first.next;
            this.first.next = null;
            this.first = newFirst;
            this.length--
            return firstNode
        }
    }
}

const stack  = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log('entire stack', stack);