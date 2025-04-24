function validParantheses(s) {

    let closingOpenMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let n = s.length;
    let stack = [];

    for (let i = 0; i < n; i++) {
        let char = s[i];
        if (closingOpenMap[char]) {
            if (stack.length > 0 && stack[stack.length - 1] === closingOpenMap[char]) {
                stack.pop();
            } else {
                return false
            }
        } else {
            stack.push(char)
        }

    }

    return stack.length == 0
}

validParantheses("[{()}]");