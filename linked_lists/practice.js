function sol(nums) {
    let n = nums.length;
    let set = new Set(nums);
    let maxConsecutive = 1
    for (let i = 0; i < n; i++) {
        if (!set.has(nums[i] - 1)) {
            let right = 1
            while (set.has(nums[i] + right)) {
                right = right + 1;
                maxConsecutive = Math.max(maxConsecutive, right);
            }
        }
    }
    return maxConsecutive
}

sol([2, 20, 4, 10, 3, 4, 5]);