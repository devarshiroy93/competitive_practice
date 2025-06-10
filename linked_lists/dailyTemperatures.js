function dailyTemperatures(temperatures) {

    //dont follow neetcode explanantion.
    //check chatgpt existing conversation for code and dry run

    let ans = new Array(temperatures.length).fill(0);

    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > stack[stack.length-1].val) {
            let prevItem = stack.pop();
            ans[prevItem.index] = i-prevItem.index;
        }
        stack.push({index : i , val : temperatures[i] })
    }

    return ans;

}

let dt = [30, 38, 30, 36, 35, 40, 28];
dailyTemperatures(dt)