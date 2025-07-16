function nextPermutation(nums) {

    let valley = null;
    let valleyIndex = -1

    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            valley = nums[i - 1];
            valleyIndex = i - 1;
            break;
        }
    }

    if (!valley) {
        return nums.reverse();
    }

    let nextHigherIndex = nums.length - 1;

    while (nums[nextHigherIndex] <= nums[valleyIndex]) {
        nextHigherIndex--;
    }
    //swap
    [nums[valleyIndex], nums[nextHigherIndex]] = [nums[nextHigherIndex], nums[valleyIndex]];
    
    let left = valleyIndex + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}


nextPermutation([1, 2, 3, 6, 5, 4]);

//variant previous permutation