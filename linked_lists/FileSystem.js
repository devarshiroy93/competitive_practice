class Node {

    constructor(name, isFolder) {
        this.name = name;
        this.isFolder = isFolder;
        this.children = []
    }
}
class FileSystem {

    constructor() {
        this.root = new Node("/", true);
    }

    mkdir(dirnames) {

        const directories = dirnames.split('/').filter(Boolean);
        this._mkdirHelper(this.root, directories, 0);
        console.log(this.root);
    }

    _mkdirHelper(currentNode, parts, index,) {

        if (index == parts.length) { return };
        let name = parts[index];

        let next = currentNode.children.find(child => child.name == name && child.isFolder);

        if (!next) {
            let newNode = new Node(name, true);
            currentNode.children.push(newNode);
            next = newNode;
        }
        this._mkdirHelper(next, parts, index + 1);
    }

    addContentToFile() {
        
    }
}



// node = {
//     name: 'a',
//     isFolder: Boolean,
//     children: [{
//         name: 'b',
//         isFolder: true,
//     }, {
//         name: 'c',
//         isFolder: true,
//         children: [{
//             name: 'file.txt',
//             content: "hello"
//         }]
//     }]
// }





//Test cases
let fs = new FileSystem();

fs.mkdir("/a/b/c");
fs.addContentToFile("/a/b/c/file.txt", "hello");
// fs.addContentToFile("/a/b/c/file.txt", " world");

// fs.ls("/a/b/c");               // ➜ ["file.txt"]
// fs.readContentFromFile("/a/b/c/file.txt"); // ➜ "hello world"

// fs.mkdir("/x/y");
// fs.ls("/x");                   // ➜ ["y"]

// fs.delete("/a/b");             // deletes everything under "/a/b"
// fs.ls("/a");                   // ➜ [] if "/a/b" was the only child
