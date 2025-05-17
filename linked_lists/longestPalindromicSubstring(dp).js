function longestPalindrome(s) {
    let resLen = 0;
    let resIdx = 0;
    
    //odd length
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            if (resLen < (r - l + 1)) {
                resLen = (r - l + 1)
                resIdx = l
            }
            l--;
            r++;
        }



    }

    //for even length
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i + 1;

        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            if (resLen < (r - l + 1)) {
                resLen = (r - l + 1)
                resIdx = l
            }
            l--;
            r++;
        }



    }

    return s.substring(resIdx, resIdx + resLen)
}


longestPalindrome('abbc')