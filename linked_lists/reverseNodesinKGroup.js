function reverseKGroup(head, k) {

    let dummyNode = { val: -1, next: null };
    dummyNode.next = head;

    function getKthNode(startNode, count) {
        let curr = startNode;
        while (curr != null && count > 0) {
            curr = curr.next;
            count--
        }
        return curr;
    }

    function reverse(head) {

        if (head == null || head.next == null) {
            return head;
        }

        let newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead
    }

    let groupPrev = dummyNode;
    //first kTh node
    //need to assign these again at the end of the loop


    while (true) {
        let kthNode = getKthNode(groupPrev.next, k);
        if (kthNode == null) {
            break;
        }
        let groupStart = groupPrev.next;
        let nextGroupStart = kthNode.next;
        //break the connect
        kthNode.next = null;
        //reverse group
        let reversedGroupStart = reverse(groupStart);

        groupPrev.next = reversedGroupStart;
        groupStart.next = nextGroupStart;

        groupPrev = groupStart;

    }

    return dummyNode.next;



}



let revK = {
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

reverseKGroup(revK, 2);
