function canAttendMeetings(intervals) {

    intervals
    intervals.sort((a, b) => a[0] - b[0]);

    let [start, end] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [ns, ne] = intervals[i];
        if ((ns < end) ){
            return false;
        }else{
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
}

canAttendMeetings([[0, 30], [5, 10], [15, 20]]);

[(5,8),(9,15)]


