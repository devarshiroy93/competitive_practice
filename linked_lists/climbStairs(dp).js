function climbStairs(n) {

    let one = 1;
    let two = 1;
    //loop n-1 times

    for (i = 0; i <= n - 1; i++) {
        let temp = one
        one = one + two;
        two = temp;
    }
    return one;

}