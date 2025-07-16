
function validPalindrome3(s, k) {
    const memo = new Map();

    function dfs(left, right, k) {
        let key = `${left}-${right}-${k}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        while (left < right) {
            if (s[left] == s[right]) {
                left++;
                right--;
            } else {
                if (k === 0) return false;
                //move from left and call dfs
                //move from right and call dfs
                let res =
                    dfs(left + 1, right, k - 1) || dfs(left, right - 1, k - 1);
                memo.set(key, res);
                return res;

            }

        }
        memo.set(key,true);
        return true;
    }
    return dfs(0, s.length - 1, k)
}