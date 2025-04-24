function topKFrequent(nums, k) {

    let count = {};
    let n = nums.length;
    let res= [];
    let frequency = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < n; i++) {
        if (count[nums[i]]) {
            count[nums[i]] = count[nums[i]] + 1
        } else {
            count[nums[i]] = 1
        }
    }

    let keys = Object.keys(count);
    for (let i = 0; i < keys.length; i++) {
        const n = keys[i];
        frequency[count[n]].push(parseInt(n));
    }

    console.log('freq---->', frequency);

    for (let i = frequency.length - 1; i > 0; i--){
        for(let j= 0 ; j <frequency[i].length ; j++){
            res.push(frequency[i][j]);
            if(res.length === k){
                return res;
            }
        }
    }
}

topKFrequent([1, 2, 2, 3, 3, 3], 2)