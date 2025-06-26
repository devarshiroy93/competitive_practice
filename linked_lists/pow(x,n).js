function myPow(x, n) {

    if (x === 0) return 0;

    function helper(x, n) {
        if (n === 0) {
            return 1
        }

        let halfPowRes = helper(x, Math.floor(Math.abs(n) / 2));
        if (Math.abs(n) % 2 === 1) {
            return x * halfPowRes * halfPowRes
        } else {
            return halfPowRes * halfPowRes
        }

    }
    const ans = helper(x, n);
    if(n < 0){
        return 1/ans
    }
    return ans;
}

myPow(2, -3);