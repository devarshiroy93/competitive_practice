function wordLadder(beginWord, endWord, wordList) {

    function buildPatternGraph(beginWord, wordList) {

        wordList.push(beginWord);

        let patternMap = new Map();

        for (let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            for (let j = 0; j < word.length; j++) {
                let pattern = word.slice(j, 0) + "*" + word.slice(j + 1);
                if (!patternMap.has(pattern)) {
                    patternMap.set(pattern, []);
                }
                patternMap.set(pattern, patternMap.get(pattern).push(word));
            }
        }
        return patternMap;
    }

    if (!wordList.includes(endWord)) {
        return 0;
    }
    let patternMap = buildPatternGraph(beginWord, [...wordList]);

    //BFS code 

    let q = [beginWord];
    let vis = new Set();
    vis.add(beginWord);
    let res = 1;

    while (q.length > 0) {
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let word = q.shift();
            if (word === endWord) return res;
            for (let j = 0; j < word.length; j++) {
                let pattern = word.slice(j, 0) + "*" + word.slice(j + 1);
                for (let neiword of patternMap.get(pattern)) {
                    if (!vis.has(neiword)) {
                        vis.add(neiword);
                        q.push(neiword)
                    }
                }
            }
        }
        res++

    }
}