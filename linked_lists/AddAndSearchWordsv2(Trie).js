//adding a new class but will be the same as TriNode
class TrieNode2 {

    constructor() {
        this.children = {};
        this.isWord = false
    }

}

class WordDictionary {

    constructor() {
        this.root = new TrieNode2();
    }
    addWord(word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            let c = word[i];
            if (!current.children[c]) {
                current.children[c] = new TrieNode2();
            }
            current = current.children[c];

        }
        current.isWord = true
    }

    searchWord(word) {
        let current = this.root
        function dfs(j, node) {
            for (let i = j; i < word.length; i++) {
                let c = word[i]
                if (c == '.') {
                    for (let child of Object.values(node.children)) {
                        if (dfs(i + 1, child) == true) return true
                    }
                    return false;
                }
                if (!node.children[c]) {
                    return false
                }
                node = node.children[c];
            }
            return node.isWord
        }
        return dfs(0, current);


    }
}

let wd = new WordDictionary();
wd.addWord('battle');
wd.addWord('cat');
console.log('BAT present===>', wd.searchWord('bat'));
console.log('.AT present===>', wd.searchWord('.at'));