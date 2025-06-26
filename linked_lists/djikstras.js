/**
 * Represents a Min-Heap (Priority Queue) used to store [value, key] pairs,
 * ordered by the 'value' in ascending order.
 * This is crucial for Dijkstra's to always extract the node with the smallest distance.
 */
class MinHeap {
    constructor() {
        // The array to store heap elements.
        this.heap = [];
    }

    /**
     * Gets the number of elements currently in the heap.
     * @returns {number} The size of the heap.
     */
    size() {
        return this.heap.length;
    }

    /**
     * Gets the parent index for a given child index.
     * @param {number} i - The child index.
     * @returns {number} The parent index.
     */
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    /**
     * Gets the left child index for a given parent index.
     * @param {number} i - The parent index.
     * @returns {number} The left child index.
     */
    leftChild(i) {
        return 2 * i + 1;
    }

    /**
     * Gets the right child index for a given parent index.
     * @param {number} i - The parent index.
     * @returns {number} The right child index.
     */
    rightChild(i) {
        return 2 * i + 2;
    }

    /**
     * Swaps two elements in the heap array.
     * @param {number} i - Index of the first element.
     * @param {number} j - Index of the second element.
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Moves an element up the heap to maintain the min-heap property
     * after insertion.
     * @param {number} i - The index of the element to bubble up.
     */
    bubbleUp(i) {
        while (i > 0 && this.heap[this.parent(i)][0] > this.heap[i][0]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    /**
     * Moves an element down the heap to maintain the min-heap property
     * after extraction or removal.
     * @param {number} i - The index of the element to bubble down.
     */
    bubbleDown(i) {
        let minIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        if (left < this.size() && this.heap[left][0] < this.heap[minIndex][0]) {
            minIndex = left;
        }

        if (right < this.size() && this.heap[right][0] < this.heap[minIndex][0]) {
            minIndex = right;
        }

        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.bubbleDown(minIndex);
        }
    }

    /**
     * Inserts a new element [value, key] into the heap.
     * @param {Array<number>} item - The item to insert, e.g., [distance, node].
     */
    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.size() - 1);
    }

    /**
     * Extracts and returns the element with the smallest value from the heap.
     * @returns {Array<number>|null} The minimum element, or null if the heap is empty.
     */
    pop() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.bubbleDown(0); // Restore heap property
        return min;
    }

    /**
     * Peeks at the element with the smallest value without removing it.
     * @returns {Array<number>|null} The minimum element, or null if the heap is empty.
     */
    peek() {
        return this.size() > 0 ? this.heap[0] : null;
    }
}

/**
 * Implements Dijkstra's algorithm to find the shortest paths from a source node
 * to all other nodes in a graph.
 */
class Dijkstra {
    /**
     * @param {number} numVertices - The total number of vertices in the graph.
     * @param {Array<Array<Array<number>>>} adjList - The adjacency list representation of the graph.
     * Each element `adjList[u]` is an array of `[v, weight]` pairs,
     * where `v` is a neighbor of `u` and `weight` is the weight of the edge (u,v).
     * Example: `adjList = [[[1, 4], [2, 1]], [[0, 4], [3, 2]], [[0, 1], [3, 5]], [[1, 2], [2, 5]]]`
     */
    constructor(numVertices, adjList) {
        this.numVertices = numVertices;
        this.adjList = adjList;
        // Initialize distances array. Fill with Infinity, source will be 0.
        this.distances = new Array(numVertices).fill(Infinity);
        // Optional: Array to store the path (predecessor of each node).
        this.previous = new Array(numVertices).fill(null);
    }

    /**
     * Finds the shortest path from a source node to all other nodes.
     * @param {number} source - The starting node (vertex index).
     * @returns {Object} An object containing the distances and previous nodes.
     * { distances: Array<number>, previous: Array<number|null> }
     */
    findShortestPaths(source) {
        // Reset distances and previous array for a new run
        this.distances.fill(Infinity);
        this.previous.fill(null);

        // Min-Heap to store [distance, node] pairs, always extracting the smallest distance.
        const minHeap = new MinHeap();

        // Distance to the source node is 0.
        this.distances[source] = 0;
        // Push the source node with its distance into the heap.
        minHeap.push([0, source]);

        // Loop as long as there are elements in the priority queue.
        while (minHeap.size() > 0) {
            // Extract the node with the smallest distance.
            const [currentDistance, currentNode] = minHeap.pop();

            // Optimization: If we've already found a shorter path to this node,
            // skip processing this stale entry.
            if (currentDistance > this.distances[currentNode]) {
                continue;
            }

            // Iterate over all neighbors of the current node.
            for (const [neighbor, weight] of this.adjList[currentNode]) {
                // Calculate the new distance to the neighbor through the current node.
                const newDistance = currentDistance + weight;

                // If this new path is shorter than the previously known shortest path to the neighbor.
                if (newDistance < this.distances[neighbor]) {
                    // Update the distance.
                    this.distances[neighbor] = newDistance;
                    // Set the current node as the predecessor of the neighbor for path reconstruction.
                    this.previous[neighbor] = currentNode;
                    // Push the updated neighbor with its new distance into the heap.
                    minHeap.push([newDistance, neighbor]);
                }
            }
        }

        // Return the calculated shortest distances and the path predecessors.
        return {
            distances: this.distances,
            previous: this.previous
        };
    }

    /**
     * Reconstructs the shortest path from the source to a target node.
     * This method should be called after `findShortestPaths`.
     * @param {number} target - The target node (vertex index).
     * @returns {Array<number>|null} An array representing the path from source to target,
     * or null if no path exists.
     */
    reconstructPath(target) {
        const path = [];
        let currentNode = target;

        // Traverse backwards from the target using the `previous` array.
        while (currentNode !== null) {
            path.unshift(currentNode); // Add to the beginning of the array
            currentNode = this.previous[currentNode];
        }

        // If the path starts with a non-null but doesn't include the source (meaning target was unreachable),
        // or if target was unreachable (distances[target] is Infinity), return null.
        if (path[0] === undefined || this.distances[target] === Infinity) {
            return null; // No path found
        }
        return path;
    }
}

// --- Example Usage ---
// Define a graph using an adjacency list.
// Format: adjList[node] = [[neighbor1, weight1], [neighbor2, weight2], ...]

// Example Graph:
// 0 --(1)--> 1 --(2)--> 3
// | \         |
// (4) (1)     (2)
// |     \     |
// 2 --(5)----->
//
// Adjacency List:
// Node 0: (to 1 with weight 1), (to 2 with weight 4)
// Node 1: (to 0 with weight 1), (to 3 with weight 2)
// Node 2: (to 0 with weight 4), (to 3 with weight 5)
// Node 3: (to 1 with weight 2), (to 2 with weight 5) - assuming bidirectional for simplicity in example
// If unidirectional, then the edges would only go one way.
// Let's create a directed graph for the example.

const numVertices = 4;
const adjList = new Array(numVertices).fill(null).map(() => []);

// Adding edges to the directed graph:
// 0 -> 1 (weight 1)
adjList[0].push([1, 1]);
// 0 -> 2 (weight 4)
adjList[0].push([2, 4]);
// 1 -> 3 (weight 2)
adjList[1].push([3, 2]);
// 2 -> 3 (weight 5)
adjList[2].push([3, 5]);
// (For demonstration, assume a few more reverse/alternative paths to see effects)
// 1 -> 0 (weight 1)
adjList[1].push([0, 1]);
// 3 -> 2 (weight 5)
adjList[3].push([2, 5]);


console.log("Graph Adjacency List:", adjList);

const dijkstra = new Dijkstra(numVertices, adjList);

const sourceNode = 0;
const { distances, previous } = dijkstra.findShortestPaths(sourceNode);

console.log(`Shortest Distances from Node ${sourceNode}:`, distances);
// Expected distances from source 0:
// 0: 0
// 1: 1 (0 -> 1)
// 2: 4 (0 -> 2)
// 3: 3 (0 -> 1 -> 3)

console.log(`Previous Nodes for Path Reconstruction:`, previous);

// Example path reconstruction
const targetNode = 3;
const path = dijkstra.reconstructPath(targetNode);
console.log(`Shortest Path from ${sourceNode} to ${targetNode}:`, path);
console.log(`Distance from ${sourceNode} to ${targetNode}:`, distances[targetNode]);

const unreachableTarget = 5; // A node that doesn't exist
const pathUnreachable = dijkstra.reconstructPath(unreachableTarget);
// console.log(`Shortest Path from ${sourceNode} to ${unreachableTarget}:`, pathUnreachable); // This would output null

const nonExistentNode = 4; // Assuming 4 vertices (0,1,2,3), node 4 does not exist.
// This would throw an error if not handled by checking numVertices for target.
// The current reconstructPath handles `null` from `previous` array correctly,
// but accessing `distances[nonExistentNode]` would be `undefined`.
