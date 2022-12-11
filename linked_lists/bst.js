class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new BSTNode(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root
        while (current) {
            if (val > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (!current.left) {
                    current.left = newNode;
                    return this
                }
                current = current.left;
            }

        }
    }

    find(val) {
        let current = this.root;
        while (current) {
            if (current.value === val) {
                return current
            }
            if (val > current.value) {
                if (!current.right) {
                    return false;
                }
                current = current.right;
            } else {
                if (!current.left) {
                    return false
                }
                current = current.left;
            }

        }
    }

    bfs() {
        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            } if (node.right) {
                queue.push(node.right)
            }
            result.push(node.value);

        }
        return result;
    }

    dfsPreOrder() {
        const visited = [];
        let current = this.root;
        function traverse(node) {//recursive helper function
            visited.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        } 
        traverse(current);
        return visited;
    }

    dfsPostOrder(){
        const visited = [];
        let current = this.root;
        function traverse(node) {//recursive helper function
            
            if(node.left){
                traverse(node.left);
               
            }
            if(node.right){
                traverse(node.right);
               
            }
            visited.push(node.value)
        } 
        traverse(current);
        return visited;
    }


    dfsInOrder(){
        const visited = [];
        let current = this.root;
        function traverse(node) {//recursive helper function
            
            if(node.left){
                traverse(node.left);
               
            }
            visited.push(node.value)
            if(node.right){
                traverse(node.right);
               
            }
            
        } 
        traverse(current);
        return visited;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);


console.log('entire bst', bst);
console.log('bst find', bst.find(10));
console.log('bst find', bst.find(21));
console.log('bst find', bst.find(7));
console.log('bst find', bst.find(102));
console.log(bst.bfs());
console.log('dfsPreOrder',bst.dfsPreOrder());
console.log('dfsPostOrder',bst.dfsPostOrder());
console.log('dfsInOrder',bst.dfsInOrder());