function missingRanges(nums, lower, upper) {

    if (nums.length === 0) {
        return [[lower, upper]];
    }
    let res = [];
    //loop from second element
    if (lower < nums[0] - 1) {
        res.push([lower, nums[0] - 1])
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] - 1 === 0) {
            continue;
        }
        res.push([nums[i - 1] + 1, nums[i] - 1])
    }
    if (nums[nums.length - 1] - 1 < upper) {
        res.push([nums[nums.length - 1] + 1, upper])
    }

    return res

}



// [5,8,9,15,16,18,20]
// lower = 2
// upper = 87

8 < 5 + 1
nums.push([nums[i] + 1, nums[i + 1] - 1])