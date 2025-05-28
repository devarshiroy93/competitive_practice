function combinationSum3(k, n) {

    let res = [];
    //construct the array first

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function backtrack(index, path, remSum) {
        if(remSum < 0 ){
            return;
        }
        if (path.length === k && remSum === 0) {
            res.push([...path]);
            return;
        }
        


        for (let i = index; i < arr.length; i++) {
            
            if (arr[i] > remSum) continue;
            path.push(arr[i]);
            let sumRem = remSum - arr[i];
            backtrack(i + 1, path, sumRem);
            path.pop()
        }
    }

    backtrack(0, [], n);
    return res;

}

combinationSum3(3, 15)