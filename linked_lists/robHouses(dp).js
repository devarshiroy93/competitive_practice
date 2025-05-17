class SolutionDp {

    constructor() {
        this.max = -Infinity;
    }

    robBrute(nums, index) {
        //start the decision tree recursion
        //either choose first element or second element



        //choose first element and start the recursion
        if (index > nums.length - 1) {
            return 0;
        }
        let nextIndex = index + 2;
        return nums[index] + this.robBrute(nums, nextIndex);

    }

    //this the recursive fn
    // robBruteHelper() {

    // }

    //optimal using DP

    rob(nums) {
        
        if (nums.length < 2) {
            return nums[0]
        }

        let dp = new Array(nums.length);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);

        for (let i = 2; i < nums.length; i++) {
            let lootn_2 = dp[i - 2] + nums[i];
            let lootn_1 = dp[i - 1];

            dp[i] = Math.max(lootn_2, lootn_1);
        }

        return dp[nums.length - 1];

    }

    robrecursive(){
        const memo = new Int32Array(nums.length).fill(-1);
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }
            if (memo[i] !== -1) {
                return memo[i];
            }
            return memo[i] = Math.max(dfs(i + 1), 
                            nums[i] + dfs(i + 2));
        }
        return dfs(0);
    }
}
let robIp = [2,9,8,3,6]
let sol = new SolutionDp();
let robMax = -1;
for (let i = 0; i < robIp.length; i++) {


    let val = sol.robBrute(robIp, i);
    console.log('VAL------>', val);
    robMax = Math.max(robMax, val);
    console.log('max ANS', robMax);
}
console.log('ROB DP ANS',new SolutionDp().robrecursive([2,9,8,3,6]));

