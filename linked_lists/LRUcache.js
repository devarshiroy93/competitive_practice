class LRUNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null
    }
}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.usedCapacity = 0;
        this.map = new Map();
        this.mru = new LRUNode(-1); // head
        this.lru = new LRUNode(-1); // tail
        //making the head and tail point to each other in this DLL
        this.mru.next = this.lru;
        this.lru.prev = this.mru
    }

    insert(node) {

        let temp = this.mru.next;
        node.next = temp;
        node.prev = this.mru;
        temp.prev = node;
        this.mru.next = node;

    }

    remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.next = null;
        node.prev = null;
    }
    put(key, val) {
        //check if key already exists
        const existingNode = this.map.get(key);
        if (existingNode) {
            this.map.delete(existingNode.key);
            this.remove(existingNode);
            this.usedCapacity--;
        }
        //create a new node 
        const node = new LRUNode(key, val);

        //insert it in to the cache
        if (this.usedCapacity == this.capacity) {
            const nodeToRemove = this.lru.prev;
            this.remove(nodeToRemove);
            this.map.delete(nodeToRemove.key);
            this.usedCapacity--;
        }
        this.insert(node);
        //add the ref of that node for that particular key to the map;
        this.map.set(key, node);
        //update the capacity
        this.usedCapacity++
    }

    get(key) {
        let node = this.map.get(key);
        if (!node) {
            return null
        }
        this.remove(node);
        this.insert(node);
        return node.val;
    }
}

//test this

const lru = new LRUCache(3);
lru.put(1, 10);
lru.put(2, 20);
lru.put(3, 30);
lru.put(4, 40);

console.log('LRU', lru);