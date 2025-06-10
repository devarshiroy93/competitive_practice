function largestRectangleArea(heights) {

    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let startIndex = i;

        while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {

            //need to pop()
            let { index, height } = stack.pop();
            let breadth = i - index;
            let area = breadth * height
            maxArea = Math.max(area, maxArea);
            startIndex = index

        }

        stack.push({ index: startIndex, height: heights[i] });
    }

    for (let { index, height } of stack) {
        let breadth = heights.length - index;
        maxArea = Math.max(maxArea, height * breadth);
    }


    console.log(stack);
    return maxArea;
}

largestRectangleArea([2, 1, 5, 6, 2, 3]);