function simplifyPath(path) {

    let parts = path.split('/');

    let stack = [];

    for (let part of parts) {

        if (part === '..') {
            stack.pop();
        } else if (part && part !== '.') {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}

//variant
function simplifyPathWithCd(cwd, cd) {
    let path = ''
    cd[0] == '/' ? path = cd : path = cwd + '/' + cd;
    let stack = [];
    let parts = path.split('/');

    for (let part of parts) {

        if (part === '..') {
            stack.pop();
        } else if (part && part !== '.') {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}