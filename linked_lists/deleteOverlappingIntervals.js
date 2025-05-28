function eraseOverlapIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let res = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let [start,end] = intervals[i];

        if(start < prevEnd){
            res++;
            prevEnd = Math.min(prevEnd,end)
        }else{
            prevEnd = end;
        }
    }
    return res;

}

eraseOverlapIntervals([[1,2],[2,4],[1,4]])

