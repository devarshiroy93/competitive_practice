function removeNthNodeFromEndOfList(head, n) {

    //initialise and attach dummy pointer to head

    let dummyNode = { val: -1, next: null };
    dummyNode.next = head;

    let left = dummyNode;
    let right = head;
    let count = 0;
    //move R pointer n places
    while (count < n) {
        right = right.next;
        count++
    }
    while (right) {
        left = left.next;
        right = right.next;
    }

    //delete 
    left.next = left.next.next;
    return dummyNode.next
}

var linKedL3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
var ll34 = {
    val: 100,
    next: null
}
removeNthNodeFromEndOfList(linKedL3, 2)


function removeIthNodefromFrontofList(head, i) {

    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let slow = head;
    let dummyPointer = dummyNode;

    for (k = 0; k < i; k++) {
        if (slow == null) {
            return head;
        }
        slow = slow.next;
        dummyPointer = dummyPointer.next;
    }

    if(!slow){
        return head;
    }

    dummyPointer.next = slow.next;
    return dummyNode.next;
}