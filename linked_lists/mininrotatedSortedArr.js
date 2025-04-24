function findMinimuminRotatedSortedArray(nums) {

    let low = 0;
    let high = nums.length - 1;
    let res = Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[low] < nums[high]) {
            //array is sorted
            res = Math.min(res, nums[low]);
            break;
        }
        //check if right array is sorted or not

        if (nums[mid] <= nums[high]) {
            //move to left half
            high = mid - 1;
            //console.log(nums.slice(low, high+1))
            res = Math.min(res, nums[mid]);

        } //check if left half is sorted or not
        else if (nums[low] <= nums[mid]) {
            //move to the right half
            low = mid + 1;
            //console.log(nums.slice(low, high+1))
            res = Math.min(res, nums[mid]);
        }

    }
    return res;

}

findMinimuminRotatedSortedArray([1]);