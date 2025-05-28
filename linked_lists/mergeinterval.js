function mergeInterval(intervals) {

    //sort the intervals
    intervals.sort((a, b) => a[0] - b[0]);
    let output = [intervals[0]];
    console.log('intervals', intervals);

    for (let interval of intervals) {
        let start = interval[0];
        let end = interval[1];
        let lastEnd = output[output.length - 1][1];

        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        } else {
            output.push([start,end]);
        }
    }
    return output

}



let miip = [[1, 4], [5, 7], [11, 13], [4, 9]];
mergeInterval(miip);