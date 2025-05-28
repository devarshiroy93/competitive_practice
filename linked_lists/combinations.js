function combinations(n, k) {
    let res = [];

    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);

    function backtrack(index, path) {

        if (path.length == k) {
            res.push([...path]);
        }
        


        for (let i = index; i < arr.length; i++) {
            path.push(arr[i]);
            backtrack(i + 1, path);
            path.pop()
        }

    }
    backtrack(0, [])
    return res;

}



combinations(4, 2)