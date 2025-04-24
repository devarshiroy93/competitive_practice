function longestSubArrayWithSumLessThanS(nums,target){

    //sliding window variable length window
    let l =-1;
    let r =0;
    let n = nums.length ; 

    let sum = 0 ;
    let res = 0 ;

    for(let r  = 0 ; r < n ; r++){
        sum = sum + nums[r];
        while(sum >= target){
            l++;
            sum = sum-nums[l];
            //res = Math.max(sum , res);
        }
    }


}

let ip1 = [4,5,2,0,1,8,12,3,6,9];

longestSubArrayWithSumLessThanS(ip1,15);