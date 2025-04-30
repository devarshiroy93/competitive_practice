class CSSol {
    combinationSum(nums, target) {
        let n = nums.length
        let res = []
        function csHelper(index, list, sum) {

            if (sum === 0) {
                res.push([...list]);
                return
            }
            //base case
            if (sum < 0 || index >= n) {
                return
            }

            //left path
            list.push(nums[index])
            csHelper(index, list, sum - nums[index]);
            list.pop();
            //right path
            csHelper(index + 1, list, sum)
        }
        csHelper(0, [], target);
        return res;
    }
}



let ipcs = [1, 3, 2]
let targetcs = 3

//Output: [[2,2,5],[9]]

const csop = new CSSol().combinationSum(ipcs, targetcs);
console.log('csOp',csop);
