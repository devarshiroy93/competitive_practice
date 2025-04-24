function reorderLinkedList(head) {

    //step1
    //find the middle of the linked list

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow.next;
    slow.next = null;


    middle = reverseLinkedList(middle);
    console.log('MIDDLE', middle);
    //step2
    //reverse from the middle
    let first = head;
    let second = middle;


    //Step3
    //rearrange the list

    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }

    console.log('Head',head)

}



var llnew = {
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

reorderLinkedList(llnew);