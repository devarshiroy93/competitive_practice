function depthSum(nestedList) {

    let sum = 0;

    function backtrack(list, depth) {
        for (let i = 0; i < list.length; i++) {
            if (Array.isArray(list[i]) && list[i].length > 0) {
                 backtrack(list[i], depth + 1);
            } else {
                sum = sum + (list[i] * depth)
            }

        }
    }
    backtrack(nestedList, 1)
    return sum;
}

depthSum([1, [4, [6]]]);