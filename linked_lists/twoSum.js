function twoSum(nums, target) {
    let n = nums.length;
    let hash = {};
    for (let i = 0; i < n; i++) {
        let rem = target - nums[i];
        if (hash[rem] != null || hash[rem] !== undefined) {
            return [i, hash[rem]]
        }
        hash[nums[i]] = i
    }
}

let nums = [3, 4, 5, 6];
let target = 7

console.log(twoSum(nums, target));
function groupAnagrams(strs) {

    let res = {};
    let n = strs.length;

    for (let i = 0; i < n; i++) {

        let oneStr = strs[i];
        let count = new Array(26).fill(0);
        for (let j = 0; j < oneStr.length; j++) {
            let char = oneStr[j];
            let asciiVal = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[asciiVal] = count[asciiVal] + 1;
        }
        let sign = count.join(',');
        if (!res[sign]) {
            res[sign] = []
        }
        res[sign].push(oneStr)


    }
    return Object.values(res)
}
let strs = ["cat", "tac"];

groupAnagrams(strs);