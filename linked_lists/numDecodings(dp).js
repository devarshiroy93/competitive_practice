function numDecodings(s) {

    let dp = { [s.length]: 1 };

    function dfs(i) {

        if (dp[i]) {
            return dp[i]
        }
        if (s[i] === '0') {
            return 0
        }
        let res = dfs(i + 1);
        if (i < s.length && (s[i] === '1' || (s[i] === '2' && Number(s[i + 1]) <= 6))) {
            res += dfs(i + 2);
        }

        dp[i] = res;
        return res
    }

    dfs(0);

}

numDecodings("226");