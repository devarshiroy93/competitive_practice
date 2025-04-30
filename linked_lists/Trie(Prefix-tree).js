class TrieNode {
    constructor() {
        this.endOfWord = false;
        this.children = {};
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let character = word[i];
            if (!current.children[character]) {
                current.children[character] = new TrieNode()
            }
            current = current.children[character]

        }
        current.endOfWord = true

    }

    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let character = word[i];
            if (!current.children[character]) return false
            current = current.children[character];

        }
        return current.endOfWord
    }

    startsWith(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let character = prefix[i];
            if (!current.children[character]) return false
            current = current.children[character];

        }
        return true
    }
}




const trie = new PrefixTree();
trie.insert('apple');
console.log('TRIE SEARCH', trie.search('apple'));


