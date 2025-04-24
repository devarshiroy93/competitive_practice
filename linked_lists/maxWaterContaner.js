function maxArea(heights) {

    //brute force
    let n = heights.length;
    // let maxArea = 1;
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         let length = Math.min(heights[i],heights[j]);
    //         let breadth = j - i;
    //         let area = length * breadth
    //         maxArea = Math.max(area,maxArea);
    //     }
    // }
    // return maxArea;

    //optimal two pointers approach
    let l = 0;
    let r = n - 1;
    let maxArea = 0;

    while (l < r) {
        let breadth = r -l ;
        let height = Math.min(heights[l],heights[r]);
        let area = height * breadth;
        maxArea = Math.max(maxArea, area);
        if (heights[l] > heights[r]) {
            r--
        } else if (heights[l] < heights[r]) {
            l++
        }
        else if (heights[l] === heights[r]) {
            r--
        }
    }
    return maxArea;
}

let heights = [1, 7, 2, 5, 4, 7, 3, 6];
maxArea(heights);