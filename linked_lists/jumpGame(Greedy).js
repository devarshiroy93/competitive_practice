function jumpGame(nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0 
}

jumpGame([1,2,1,0,1]);