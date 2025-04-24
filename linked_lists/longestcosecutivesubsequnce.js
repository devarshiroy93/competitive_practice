function longestConsecutive(nums) {

    let n = nums.length;
    let res = [];
    if (nums.length === 1 || nums.length === 0) {
        return nums
    }
    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            if (nums[i] - nums[i - 1] === 1) {
                if (res.length === 0) {
                    res.push(nums[i - 1]);
                }
                res.push(nums[i]);
            }
        }
    }
    return res;
}

let ip = [2,20,4,10,3,4,5]

longestConsecutive(ip);
