class Practice {
    lengthOfLongestSubstringKDistinct(s, k) {
        let l = 0;
        let n = s.length - 1;
        let res = 0;
        let charSet = new Set()

        for (let r = 0; r <= n; r++) {
            charSet.add(s[r]);

            while (k < charSet.size) {
                charSet.delete(s[l]);
                l++;
            }
            let windowLen = r - l + 1;
            res = Math.max(res, windowLen);
        }
        console.log('res', res)
        return res;
    }

}
const ga1 = "eceba"



new Practice().lengthOfLongestSubstringKDistinct(ga1, 2);
new Practice().lengthOfLongestSubstringKDistinct("aa", 1);
new Practice().lengthOfLongestSubstringKDistinct("aabcdefffgh", 2);
