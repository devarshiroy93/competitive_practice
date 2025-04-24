function mergeTwoSortedLinkedLists(list1, list2) {

    let dummyNode = {val :-1 , next : null};
    let dp = dummyNode;
    let p1 = list1;
    let p2 = list2;

    while (p1 && p2) {
        if (p1.val === p2.val) {
            dp.next = p1;
            dp = dp.next;
            p1 = p1.next;
            
            dp.next = p2;
            dp = dp.next;
            p2 = p2.next;
           
        }
        else if (p1.val < p2.val) {
            dp.next = p1;
            dp = dp.next;
            p1 = p1.next;
        }
        else if (p2.val < p1.val) {
            dp.next = p2;
            dp = dp.next;
            p2 = p2.next;
        }
    }

    if (p1) {
        dp.next = p1;
    }
    if (p2) {
        dp.next = p2;
    }

    console.log('DN-->', dummyNode);
    return dummyNode.next;


}


let ll11 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

let ll21 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 5,
            next: null
        }
    }
}

mergeTwoSortedLinkedLists(ll11, ll21);