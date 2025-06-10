function nextGreaterElements2(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * n; i++) {
        let realIndex = i % n;

        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[realIndex]) {
            let prevIndex = stack.pop();
            res[prevIndex] = nums[realIndex];
        }

        if (i < n) {
            stack.push(realIndex);
        }
    }

    return res;
}

nextGreaterElements2([2,10,12,1,11])

