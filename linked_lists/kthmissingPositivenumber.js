
//find kth positive number from 1
//[1,4,5,8] k = 3 ans=6
function findKthPositive(arr, k) {


    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let missing = arr[mid] - 1 - mid;

        if (missing < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left + k
};

findKthPositive([1, 4, 5, 8], 3);

function findKthMissingPositiveNumberFromLeft(nums, k) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        let missing = nums[mid] - nums[0] - mid;
        if (missing < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left + k + nums[0] - 1;

}

