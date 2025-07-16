function countSubstrings(s) {

    //we init two pointers  and move the pointers outwards
    //if characters at both the pointers match we have a substring
    //left and right
    //for even length string we init l = i r =i+1

    let res = 0
    for (let i = 0; i < s.length; i++) {
        let l = i; let r = i
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++
            res = res +1
        }

        l = i; r = i + 1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++
            res = res +1
        }

    }
    return res;

}