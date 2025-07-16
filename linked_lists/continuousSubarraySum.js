// Given an integer array nums and an integer k,
//  return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

function isGoodSubarray(nums, k) {

    let remainderIndexMap = new Map(); //{remainder : index};

    remainderIndexMap.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum = prefixSum + nums[i];
        let r = prefixSum % k;
        if (!remainderIndexMap.has(r)) {
            remainderIndexMap.set(r,i);
        } else if (i - remainderIndexMap.get(r) > 1) {
            return true;
        }
    }

    return false


}; 

//[23,2,4,6] k=6

isGoodSubarray([23,2,4,6],6)