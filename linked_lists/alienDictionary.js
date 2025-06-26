function foreignDictionary(words) {
    let adj = {};
    for (let word of words) {
        for (let char of word) {
            if (!(char in adj)) {
                adj[char] = []
            }
        }
        
    }

    //compare each pair of word starung from index 0

    for (let i = 0; i < words.length-1; i++) {
        let w1 = words[i];
        let w2 = words[i + 1];
        let minLen = Math.min(w1.length, w2.length)

        if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
            return ""
        }

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].push(w2[j]);
                break;
            }

        }

    }

    let vis = new Set();
    let onRecStack = new Set();
    let res = [];

    function hasCycle(node) {
        if (onRecStack.has(node)) {
            return true
        }
        if (vis.has(node)) {
            return false;
        }
        vis.add(node);
        onRecStack.add(node)
        for (let nei of adj[node]) {
            if (hasCycle(nei)) {
                return true
            };
        }

        onRecStack.delete(node);
        res.push(node);
        return false
    }

    //run has Cycle dfs on all nodes
    for (let char in adj) {
        if (!vis.has(char)) {
            if(hasCycle(char)){
                return ""
            }
        }
    }

    return res.reverse().join('');

}