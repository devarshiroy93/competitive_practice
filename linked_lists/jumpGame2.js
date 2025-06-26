function jump(nums) {
    let l = 0;
    let r = 0;
    let res = 0;

    while (r < nums.length -1) {
        let farthest = 0
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i])
        }
        l = r + 1;
        r = farthest;
        res++
    }

    return res

}


console.log('j', jump[2, 4, 1, 1, 1, 1])