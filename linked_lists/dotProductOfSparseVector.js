class SparseVector {


    constructor(nums) {
        //convert to sparse vector

        this.sparse = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i]) {
                this.sparse.push([i, nums[i]]);
            }

        }

    }


    dotProduct(vec) {
        let a = this.sparse;
        let b = vec.sparse;
        let i = a.length - 1; //3
        let j = b.length - 1; //2
        let res = 0;

        while (i >= 0 && j >= 0) {
            const [index1, value1] = a[i];
            const [index2, value2] = b[j];
            if (index1 == index2) {
                res = res + value1 * value2;
                i--;
                j--
            } else if (index1 > index2) {
                i--
            } else {
                j--
            }
        }
        return res;

    }
}

//[1, 0, 0, 2, 3]
//[0, 3, 0, 4, 0]

//[[0,1],[3,2],[4,3]]
//[[1,3],[3,4]]

const v1 = new SparseVector([1, 0, 0, 2, 3]);
const v2 = new SparseVector([0, 3, 0, 4, 0]);

console.log(v1.dotProduct(v2));  // Output: 8

class SparseVectorFollowUp {

    sparse = [];

    constructor(nums) {
        this.sparse = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                this.sparse.push([i, nums[i]]);
            }
        }


    }

    dotProduct(vec) {
        // let i = 0;
        // let j = 0;
        let A = this.sparse;
        let B = vec.sparse;
        let shorter = A.length > B.length ? B : A;
        let longer = A.length < B.length ? B : A;
        let currSum = 0;
        for (let i = 0; i < shorter.length; i++) {
            let [targetIndex, val] = shorter[i];
            let searchRes = this.search(targetIndex, longer)
            if (searchRes !== null) {
                currSum = currSum + val * searchRes[1];
            }
        }
        return currSum;
    }

    search(targetIndex, arr) {

        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (arr[mid][0] < targetIndex) {
                l = mid + 1;
            } else if (arr[mid][0] > targetIndex) {
                r = mid - 1;
            }
            if(targetIndex === arr[mid][0]){
                return [arr[mid][0], arr[mid][1]]
            }
        }
        return null
    }


}
