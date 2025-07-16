function addStrings(num1, num2) {

    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let res = [];
    let carry = 0;
    while (p1 >= 0 || p2 >= 0) {
        let sum = 0;
        if (num1[p1] && num2[p2]) {
            sum = sum + carry + Number(num1[p1]) + Number(num2[p2]);
            if (sum > 10) {
                carry = Math.floor(sum / 10);
            }
            p1--;
            p2--;
            res.unshift(sum % 10);
            sum = 0
        }

        if (!num1[p1] && num2[p2]) {
            sum = sum + carry + Number(num2[p2]);
            if (sum > 10) {
                carry = Math.floor(sum / 10);
            }
            p2--;
            res.unshift(sum % 10);
            sum = 0
        }
        if (num1[p1] && !num2[p2]) {
            sum = sum + carry + Number(num1[p1]);
            if (sum > 10) {
                carry = Math.floor(sum / 10);
            }
            p1--;
            res.unshift(sum % 10);
            sum = 0;
        }

    }
    if (carry) {
        res.unshift(carry);
    }
    return res.join('');
}

addStrings("456", "77");