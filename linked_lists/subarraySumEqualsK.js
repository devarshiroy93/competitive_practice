function subarraySum(nums, k) {

    //solve uisng the prefix sum approach

    let prefixCountMap = new Map();
    prefixCountMap.set(0, 1);
    let currSum = 0;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum = nums[i] + currSum;

        let diff = currSum - k;
        res = res + (prefixCountMap.has(diff) ? prefixCountMap.get(diff) : 0);
        if (prefixCountMap.has(currSum)) {
            prefixCountMap.set(prefixCountMap.get(currSum) + 1)
        } else {
            prefixCountMap.set(currSum, 1)
        }
    }
    return res;
}