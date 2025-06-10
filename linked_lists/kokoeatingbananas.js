function minEatingSpeed(piles, h) {


    let l = 1;
    let r = Math.max(...piles);
    let res = Infinity;
    while (l <= r) {
        let k = Math.floor((l + r) / 2);
        let hours = 0;
        piles.forEach((item) => {
            hours = hours + Math.ceil(item / k)
        });

        if (hours > h) {
            //out of bounds for answer

            l = k + 1
        } else {
            //we are looking for min value here
            //and this block is checking if the k value is inside required boundaries
            res = Math.min(res,k);
            r = k - 1;
        }

    }

    return res;
}

let kokopiles = [25,10,23,4];
minEatingSpeed(kokopiles,4);