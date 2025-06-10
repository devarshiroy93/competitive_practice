function carFleet(position, speed, target) {
    //Neetcode soln

    //first create an array which will have postion and speed
    //eg.pair = [[1,4],[...]]
    console.log
    let pair = position.map((p, i) => [p, speed[i]]);

    //then sort the array by position 

    pair = pair.sort((a, b) => b[0] - a[0]);

    let stack = [];

    for (let i = pair.length - 1; i >= 0; i--) {
        let timeTakentoReachDestination = ((target - (pair[i][0])) / pair[i][1]);
        stack.push(timeTakentoReachDestination);
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    return stack.length;

}