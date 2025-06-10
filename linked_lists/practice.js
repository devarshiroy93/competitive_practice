class Practice {

  noofConnectedComponents(n, edges) {

    let adj = Array.from({ length: n }, () => []);
    let vis = new Set();
    let res = 0;
    //make adj list
    for (let i = 0; i < edges.length; i++) {
      let [v, u] = edges[i];
      adj[v].push(u);
      adj[u].push(v);
    }

    function dfs(i) {
      if (vis.has(i)) {
        return;
      }
      //loop over neighbours
      vis.add(i);
      for (let j = 0; j < adj[i].length; j++) {
        dfs(adj[i][j]);
      }
    }
    //loop

    for (let i = 0; i < adj.length; i++) {
      if (!vis.has(i)) {
        dfs(i);
        res++
      }
    }
    return res;
  }

  validGraphTree(n, edges) {

    //check if there is a cycle
    //check if are unconnected components

  }

  

  subsets(nums) {

    res = [];
    function backtrack(index, path) {
      //dont push empty arrays
      res.push([...path]);
      if (index == nums.length) {
        return
      }
      path.push(nums[index]);
      for (let i = index; i < nums.length; i++) {
        backtrack(i + 1, path);
      }
      path.pop();
    }

    backtrack(0, []);
    return res;
  }


  pacificAtlantic(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let res = [];
    let pac = new Set();
    let atl = new Set();

    function dfs(r, c, previous, visited) {

      //base case failure
      if (r < 0 ||
        c < 0 ||
        r >= rows ||
        c >= cols ||
        visited.has(`${r}-${c}`) ||
         grid[r][c] < previous) {
        return
      }

      visited.add(`${r}-${c}`);
      dfs(r + 1, c, grid[r][c], visited);
      dfs(r - 1, c, grid[r][c], visited);
      dfs(r, c + 1, grid[r][c], visited);
      dfs(r, c - 1, grid[r][c], visited);

    }

    //loop over cells in the first row (pacific)
    for (let col = 0; col < cols; col++) {
      console.log('first row el', grid[0][col]);
      dfs(0, col, grid[0][col], pac);
    }

    //loop over cells in the last row(atlantic)

    for (let col = 0; col < cols; col++) {
      console.log('last row el ', grid[rows - 1][col]);
      dfs(rows - 1, col, grid[rows - 1][col], atl);
    }

    //loop over cells in the first column (pacific)

    for (let row = 0; row < rows; row++) {
      console.log('first col el', grid[row][0]);
      dfs(row, 0, grid[row][0], pac);
    }

    //loop over cells in the last column (atlantic)
    for (let row = 0; row < rows; row++) {
      console.log('first col el', grid[row][cols - 1]);
      dfs(row, cols - 1, grid[row][cols - 1], atl)
    }

    //check if a cell is present in both the pacific and atlantic sets
    //if yes then add to res

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (atl.has(`${i}-${j}`) && pac.has(`${i}-${j}`)) {
          res.push([i, j]);
        }
      }
    }

    return res;

  }

}

class TrieNoden {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class PrefixTreeN {
  constructor() {
    this.root = new TrieNoden();
  }

  //insert method on prefix tree

  insert(word) {
    let current = this.root;
    for (let c of word) {


      if (!current.children[c]) {
        current.children[c] = new TrieNoden();
      }
      current = current.children[c];
    }
    current.endOfWord = true
  }

  search(word) {
    let current = this.root;

    for (let c of word) {
      if (!current.children[c]) {
        return false
      }
      current = current.children[c]
    }
    return current.endOfWord
  }
  startsWith(word) {
    let current = this.root;

    for (let c of word) {
      if (!current.children[c]) {
        return false
      }
      current = current.children[c]
    }
    return true
  }

  wcsearch(word) {
    function dfs(node, index) {
      for (let i = index; i < word.length; i++) {
        let c = word[i];
        if (c === '.') {
          for (let child of Object.values(node.children)) {
            if (dfs(child, i + 1)) return true
          }
        } else {
          if (!node.children[c]) {
            return false
          }
          node = node.children[c]
        }

      }
      return node.endOfWord
    }


    return dfs(this.root, 0)
  }
}
class TreeNoden {

  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
class Codec {

  serialise(root) {
    let res = []
    //preorder traversal
    function dfs(root) {
      if (!root) {
        res.push('null');
        return
      }

      //root
      res.push(root.val);
      //left
      dfs(root.left);

      //right
      dfs(root.right)
    }
    dfs(root);
    return res.join(',');
  }

  deserialise(s) {
    let ip = s.split(',');
    let root = null;
    function dfs(index) {

      if (ip[index] === 'null') {
        return null
      }

      root = new TreeNoden(ip[index]);
      root.left = dfs(index + 1);
      root.right = dfs(index + 2);


    }

    return dfs(0)
  }
}

let vans = new Practice().canFinish(2, [[0, 1], [1, 0]])
let vans2 = new Practice().subsets([1, 2, 3]);

let ptn = new PrefixTreeN();
ptn.insert('dog');
ptn.insert('done');
ptn.insert('cog');
ptn.insert('bay');
const an1 = ptn.search('do');
const an2 = ptn.search('don');
const an3 = ptn.search('done');
const an4 = ptn.search('dog');
const an5 = ptn.startsWith('co');
const an6 = ptn.startsWith('don');
const an7 = ptn.startsWith('done');
const an8 = ptn.startsWith('dog');
const an9 = ptn.wcsearch(".og");
const an910 = ptn.wcsearch("b..")
console.log(ptn.root);


//codec test

const codec = new Codec();
let bti = {
  "val": 1,
  "left": {
    "val": 2,
    "left": null,
    "right": null
  },
  "right": {
    "val": 3,
    "left": {
      "val": 4,
      "left": null,
      "right": null
    },
    "right": {
      "val": 5,
      "left": null,
      "right": null
    }
  }
}

const cdi = codec.serialise(bti);
console.log(cdi);
let ds = codec.deserialise(cdi);
console.log('ds', ds);

new Practice().pacificAtlantic(
  [
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6]
  ]
)

