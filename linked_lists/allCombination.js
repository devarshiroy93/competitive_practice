function letterCombinations(digits) {

    if (digits.length === 0) {
        return []
    }
    const digitToChar = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let res = []
    function backtrack(digitIndex, path) {

        //base case
        if (digits.length === path.length) {
            res.push(path.join(''));
            return;
        }

        //take current digit
        let currentdigit = digits[digitIndex];
        //take the characters mapped to each digit
        let charsForDigit = digitToChar[currentdigit];

        for (let char of charsForDigit) {
            path.push(char);
            backtrack(digitIndex + 1, path);
            path.pop();
        }


    }

    backtrack(0, []);
    return res
}
console.log('LETTERCOMBINATIONS',letterCombinations("34"));
