function partition(s) {
    let res = []

    function isPalindrome(s, start, end) {

        while (start < end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true

    }

    function backtrack(index, path) {

        if (index >= s.length) {
            res.push([...path]);
            return 
        }

        for (let i = index; i < s.length; i++) {
            if (isPalindrome(s, index, i)) {
                path.push(s.substring(index, i + 1));
                backtrack(i+1,path);
                path.pop();
            };

        }
    }
    backtrack(0,[]);
    return res;

}

partition('aab')