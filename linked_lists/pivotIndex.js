function findPivotIndex(nums) {

    let n = nums.length;
    //find out the total sum
    let arraySum = 0;
    let preSum = 0;
    for (let i = 0; i < n; i++) {
        arraySum = arraySum + nums[i];
    }

    for (let i = 0; i < n; i++) {
        let leftSum = preSum;

        let rightSum = arraySum - preSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        preSum = preSum + nums[i];

    }
    return -1

}

findPivotIndex([1, 7, 3, 6, 5, 6])