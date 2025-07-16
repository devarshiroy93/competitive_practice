function minRemoveToMakeValid(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (stack.length > 0 && stack[stack.length - 1][0] === '(' && s[i] === ")") {
            stack.pop();
        }
        else if (s[i] == '(' || s[i] === ')') {
            stack.push([s[i], i]);
        }

    }

    if (stack.length === 0) {
        return s
    }

    let arr = s.split('');

    while (stack.length > 0) {
        let idx = stack.pop()[1];
        arr[idx] = ''
    }

    return arr.join('');

};
minRemoveToMakeValid("lee(t(c)o)de)")
