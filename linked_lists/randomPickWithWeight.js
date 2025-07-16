class Solution {
    constructor(w) {
        this.w = w;
        this.prefix = [];
        this.totalSum = 0;
        //create prefix sum array

        for (let item of this.w) {
            this.totalSum = item + this.totalSum;
            this.prefix.push(this.totalSum)
        }
    }

    pickIndex() {
        let r = Math.random() * this.totalSum;

        let left = 0;
        let right = this.prefix.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (this.prefix[mid] <= r) {
                left = mid + 1;
            } else {
                right = mid
            }
        }
        return left
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */