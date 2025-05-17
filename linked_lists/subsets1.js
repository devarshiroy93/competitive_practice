//recursion backtracking problem


// for subset
function subsetSums(nums) {

    let res = [];
    let subsets = [];

    function backtrack(index, path, totalSum) {

        if (index == nums.length) {
            subsets.push([...path]);
            res.push(totalSum);
            return;
        }

        //pick
        path.push(nums[index]);
        backtrack(index + 1, path, totalSum + nums[index]);

        //unpick
        path.pop()
        backtrack(index + 1, path, totalSum);
    }

    backtrack(0, [], 0);
    return res;
}

subsetSums([5, 2, 1]);