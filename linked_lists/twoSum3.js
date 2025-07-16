class TwoSum {
    constructor() {
        this.nums = [];
    }

    add(number) {
        this.nums.push(number);

    }

    find(number) {
        if (this.nums.length <= 1) {
            return false
        }
        this.nums.sort((a,b)=>a-b);
        let left = 0;
        let right = this.nums.length-1;
        while (left < right) {
            let sum = this.nums[left] + this.nums[right];
            if (sum == number) {
                return true
            }
            if (sum > number) {
                right--
            } else {
                left++
            }

        }
        return false;
    }
}

let ts = new TwoSum()
ts.add(1);    // [1]
ts.add(3);    // [1, 3]
ts.add(5);    // [1, 3, 5]
ts.find(4);   // returns true, because 1 + 3 = 4
ts.find(7);   // returns false, no two numbers sum to 7