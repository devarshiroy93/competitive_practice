function searchMatrix(matrix, target) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    //find the row number first

    let top = 0;
    let bottom = rows - 1;

    let finalRow = -1;

    while (top <= bottom) {

        let middle = Math.floor((top + bottom) / 2);
        if (matrix[middle][matrix[0].length - 1] === target) {
            return true
        }
        if (matrix[middle][matrix[0].length - 1] < target) {
            top = middle + 1
        } else {
            finalRow = middle
            bottom = middle - 1
        }


    }

    console.log('finalRow', finalRow);
    if(finalRow === -1){
        return false
    }
    let l = 0;
    let r = matrix[0].length - 1;

    while (l <= r) {

        let middle = Math.floor((l + r) / 2);
        if (matrix[finalRow][middle] === target) {
            return true
        }
        if (matrix[finalRow][middle] > target) {
            r = middle - 1

        } else {
            l = middle + 1
        }
    }

    return false

}

let smatrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]; let starget = 10

searchMatrix(smatrix, starget);
