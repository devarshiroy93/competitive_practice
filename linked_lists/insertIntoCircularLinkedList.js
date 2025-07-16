class CLLNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertintoCLL(head, insertVal) {

    //head is null
    if (head == null) {
        const newNode = new CLLNode(insertVal);
        newNode.next = newNode;
        return newNode;
    }
    let prev = head;
    let curr = head.next;
    while (true) {

        //happy path insert in middle
        if (prev.val <= insertVal && insertVal <= curr.val) {
            break
        }

        //insert at the wrapping point
        //check if insertval is greater than the greatest(prev.val)
        //or if insertval is lower than the lowest(curr.val)
        if (prev.val > curr.val && (insertVal >= prev.val || insertVal<= curr.val)) {
            break
        }
        prev = curr;
        curr = curr.next;

        //duplicate values
        if (prev == head) {
            break
        }

    }
    const newNode = new CLLNode(insertVal);
    let nextPointer = prev.next
    prev.next = newNode;
    newNode.next = nextPointer;
    return head;



}