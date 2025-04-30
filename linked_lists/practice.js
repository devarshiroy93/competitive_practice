
function removeNthFromEnd(head, n) {

    let dummyNode = { val: -1, next: null };

    dummyNode.next = head;
    let dummyPtr = dummyNode;

    let count = 0;
    let left = head;
    let right = head;

    while (count < n) {
        right = right.next
        count++
    }

    while (right !== null) {
        left = left.next;
        right = right.next;
        dummyPtr = dummyPtr.next;
    }

    dummyPtr.next = left.next;
    return dummyNode.next;




}

let practL3 = {
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

let practL3Res = removeNthFromEnd(practL3, 2);