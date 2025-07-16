function diagonalTraverse(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row = 0;
    let col = 0;

    let res = [];

    let up = true;

    for (let i = 0; i < m * n; i++) {
        res.push(matrix[row][col]);
        if (up) {
            if (row == 0) {
                col++;
                up = false
            }//else if condition needs to go here
            else if (col === n - 1) {
                row++
                up = false
            } else {
                row--
                col++
            }

        } else {
            if (col === 0) {
                row++;
                up = true;
            } else if (row === m - 1) {
                col++
                up = true
            } else {
                row++
                col--
            }

        }
    }


}

console.log(diagonalTraverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

//1 2 3
//4 5 6
//7 8 9 