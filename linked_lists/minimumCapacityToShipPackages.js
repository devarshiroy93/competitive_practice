function minimumCapacity(weights, days) {

    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);
    let answer = right;

    function canShip(capacity, D) {
        let currLoad = 0;
        let days = 1;
        for (let weight of weights) {
            if (currLoad + weight > capacity) {
                days++;
                currLoad = 0;
            }
            currLoad += weight;
        }
        return days <= D
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canShip(mid, days)) { // search for a lower number
            answer = Math.min(answer, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer
}

minimumCapacity([1,2,3,4,5,6,7,8,9,10], 5);

//TC O(nlogw)