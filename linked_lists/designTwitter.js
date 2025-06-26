class Twitter {
    constructor() {
        this.timeStamp = 0;
        this.tweetMap = new Map();     // userId -> array of tweets
        this.followMap = new Map();    // userId -> Set of followees (including self)
    }

    postTweet(userId, tweetId) {
        let tweet = {
            id: tweetId,
            time: this.timeStamp++
        };

        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push(tweet);

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }

        // Ensure the user always follows themselves
        this.followMap.get(userId).add(userId);
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return;
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }

    getNewsFeed(userId) {
        const heap = new MaxHeap();

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId);

        for (let followee of this.followMap.get(userId)) {
            let tweets = this.tweetMap.get(followee);
            if (!tweets) continue;

            for (let i = tweets.length - 1; i >= Math.max(0, tweets.length - 10); i--) {
                heap.insert(tweets[i]);
            }
        }

        let results = [];
        while (results.length < 10 && heap.size() > 0) {
            let tweet = heap.extractMax();
            results.push(tweet.id);
        }
        return results;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)].time < this.heap[index].time) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].time > this.heap[largerChildIndex].time
            ) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[largerChildIndex].time <= this.heap[index].time) break;

            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
