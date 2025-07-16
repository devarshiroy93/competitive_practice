class BSTIterator {

    constructor(root) {
        this.stack = []
        this.root = root;
        let curr = this.root;

        while (curr) {
            this.stack.push(curr);
            curr = curr.left;
        }

    }

    hasNext() {
        return this.stack.length == 0;
    }

    next() {
        let res = this.stack.pop();
        let curr = res.right ;
        while (curr) {
            this.stack.push(curr);
            curr = curr.left
        }
        return res.val;
    }
}