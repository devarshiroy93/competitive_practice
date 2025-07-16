var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1) {
        return 0
    }
    wordList.push(beginWord);
    //create the pattern map for each word
    let patternMap = new Map()
    for (let i = 0; i < wordList.length; i++) {
        let word = wordList[i]
        for (let j = 0; j < word.length; j++) {
            let pattern = word.slice(0, j) + '*' + word.slice(j + 1);
            if (!patternMap.has(pattern)) {
                patternMap.set(pattern, []);
            };
            patternMap.get(pattern).push(word);
        }
    }

    let res = 1;
    let vis = new Set();
    let q = [wordList[0]];
    while (q.length > 0) {

        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let qWord = q.shift();
            if (qWord === endWord) {
                return res;
            }
            //loop over each character of nei to create each patter
            for (let k = 0; k < qWord.length; k++) {
                let pattern = qWord.slice(0, k) + '*' + qWord.slice(k + 1);
                for (let neiWord of patternMap.get(pattern) || []) {
                    if (!vis.has(neiWord)) {
                        q.push(neiWord);
                        vis.add(neiWord);
                    }
                }
            }

        }
        res++

    }
    return 0

};