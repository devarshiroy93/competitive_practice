function isSameTree(p, q) {

    if (p === null && q == null) {
        return true
    }
    if (p == null && q !== null) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }
    

    let ans =  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return ans;
}   

let isSameTree1 = {
    val: 1,
    left: {
        val: 2,
        left : null,
        right : null
    },
    right: {
        val: 3,
        left : null,
        right : null
    }
}

let isSameTree2 = {
    val: 1,
    left: {
        val: 2,
        left : null,
        right : null
    },
    right: {
        val: 3,
        left : null,
        right : null
    }
}

isSameTree(isSameTree1,isSameTree2);
