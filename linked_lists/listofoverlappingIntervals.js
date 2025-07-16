function findOverLappingIntervals(list1, list2) {

    //[[1,5],[8,10]]
    //[[2,5] ,[6,7] ,[8,9]]

    //ans =[2,5],[8,9]

    let i = 0;
    let j = 0;
    let res = []
    while (i < list1.length && j < list2.length) {
        let [start1, end1] = list1[i];
        let [start2, end2] = list2[j];

        let start = Math.max(start1, start2);
        let end = Math.min(end1, end2);

        if (start <= end) { // this is the place of overlap
            res.push([start, end]);
        }
        if (end1 < end2) {
            i++
        }else{
            j++
        }
    }
    return res
}