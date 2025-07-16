function searchRange(nums, target) {

    let left = binarySearch(0, nums.length - 1, true);
    let right = binarySearch(0, nums.length - 1, false)
    function binarySearch(left, right, leftBias) {
        let l = left;
        let r = right;
        let i = -1
        while (l <= r) {

            let mid = Math.floor((l + r) / 2);
            if (nums[mid] < target) {
                l = mid + 1
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                i = mid;
                if (leftBias) {
                    r = mid - 1;
                } else {
                    l = mid + 1
                }
            }

        }
        return i;
    }

    return [left, right];
};

//variant 1 count occurrences
function countOccurrences(nums, target) {
    let left = binarySearch(0, nums.length - 1, true);
    if (left === -1) return 0;

    let right = binarySearch(0, nums.length - 1, false);

    return right - left + 1;

    function binarySearch(left, right, leftBias) {
        let l = left;
        let r = right;
        let i = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                i = mid;
                if (leftBias) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }

        return i;
    }
}


//variant --> find number of unique occurrences
function findUniqueCount(nums) {
    let n = nums.length;
    let i = 0;
    let count = 0
    while (i < n) {
        let val = nums[i];
        let left = bs(i, n - 1, true, val);
        if (left == -1) {
            return 0;
        }
        let right = bs(i, n - 1, false, val);
        count++;
        i = right + 1;

    }
    return count;

    function bs(left, right, leftBias, target) {
        let l = left;
        let r = right;
        let i = -1
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (nums[mid] < target) {
                l = mid + 1
            } else if (
                nums[mid] > target
            ) {
                r = mid - 1;
            } else {
                i = mid;
                if (leftBias) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }

        return i;
    }
}