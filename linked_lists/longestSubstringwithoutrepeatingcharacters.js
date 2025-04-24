function lengthOfLongestSubstring(s) {

    let l = 0;

    let charSet = new Set();
    let maxLen = 0;
    let n = s.length;
    for (let r = 0; r < n; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l = l + 1;
        }
        charSet.add(s[r]);
        maxLen = Math.max(r - l + 1, maxLen)
    }
    return maxLen
}

let s1 = "abcabcbb";
lengthOfLongestSubstring(s1);


