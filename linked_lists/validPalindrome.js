function validPalindrome(s) {

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphanumeric(s[l])) {
            l++;
        }
        while (r > l && !isAlphanumeric(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++;
        r--;
    }
    return true;

    function isAlphanumeric(s) {
        if (s >= '0' && s <= '9'
            || s >= 'A' && s <= 'Z'
            || s >= 'a' && s <= 'z'
        ) {
            return true
        }
        return false;
    }
}

validPalindrome('race a car');


