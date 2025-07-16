function maxConsecutiveOnes(nums,k) {

    let l = 0;
    let max = 0
    for (let r = 0; r < nums.length; r++) {
        //first flip the zero/True as necessary
        //then run the while loop
        if (nums[r] == 0) {
            k--
        }
        while (k < 0) {
            if (nums[l] == 0) { k++ };
            l++
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
}

//Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
//Output: 6

maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);