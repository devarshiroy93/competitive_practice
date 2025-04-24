function reverseLinkedList(head) {

    if (!head.next) {
        console.log('BASECASEHEAD', head);
        return head;
    }
    let newHead = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;

}

var ll2 = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

var ll1 = {
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

reverseLinkedList(ll2);