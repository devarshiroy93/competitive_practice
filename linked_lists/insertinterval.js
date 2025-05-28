function insertInterval(intervals, newInterval) {
    let res = [];
    let index = 0;
    for (let interval of intervals) {
        if (newInterval[1] < interval[0]) {
            //append at the beginning
            res.push(newInterval);
            return res.concat(intervals.slice(index));
        } else if (newInterval[0] > interval[1]) {
            //push the existing interval into res
            res.push(interval)
        } else {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];

        }

        index++

    }
    res.push(newInterval);
    return res
}

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
let newInterval = [4, 9];;

console.log(insertInterval(intervals,newInterval));
