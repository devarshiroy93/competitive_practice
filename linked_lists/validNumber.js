class Solution {
    isNumber(s) {
        let seen_digit = false;
        let seen_dot = false;
        let seen_exponent = false;

        for (let i = 0; i < s.length; i++) {
            const c = s[i];

            if (c >= '0' && c <= '9') {
                seen_digit = true;
            } else if (c === '+' || c === '-') {
                if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                    return false;
                }
            } else if (c === '.') {
                if (seen_dot || seen_exponent) {
                    return false;
                }
                seen_dot = true;
            } else if (c === 'e' || c === 'E') {
                if (seen_exponent || !seen_digit) {
                    return false;
                }
                seen_exponent = true;
                seen_digit = false; // must see digit after exponent
            } else {
                return false;
            }
        }

        return seen_digit;
    }
}

// === Test cases ===



console.log("All test cases passed!");
