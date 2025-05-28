function meetingRooms2(intervals) {

    if (intervals.length == 0) {
        return 0;
    }
    let count = 1;

    let interval = intervals[0];


    for (let i = 1; i < intervals.length; i++) {
        let is = interval.start;
        let ie = interval.end;
        const { start, end } = intervals[i];
        if (start < ie) {
            count++;
            interval = intervals[i]
        } else {
            interval = intervals[i]
        }

    }

    return count


}




let mr2 = [
    { start: 0, end: 40 },
    { start: 5, end: 10 }, { start: 15, end: 20 },
    { start: 19, end: 30 }, { start: 5, end: 45 }
];

meetingRooms2(mr2);