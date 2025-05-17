function subsets2(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    function backtrack(index, path) {

        if (index === nums.length) {
            res.push([...path]);
            return
        }

        path.push(nums[index]);


        backtrack(index + 1, path);
        path.pop();
        if (nums[index] == nums[index + 1]) {
            backtrack(index + 2, path)
        } else {
            backtrack(index + 1, path)
        }

    }
    backtrack(0, []);
    return res;


}

let ip34 = [2, 2, 2]

console.log('SUBSETS2', subsets2(ip34))