function evalRPN(tokens) {

    let stack = [];
    for (let token of tokens) {

        switch (token) {
            case '+':
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                let add = a + b;
                stack.push(add);
                break;
            case '-':
                let c = Number(stack.pop());
                let d = Number(stack.pop());
                let sub = d - c;
                stack.push(sub);
                break;
            case '*':
                let e = Number(stack.pop());
                let f = Number(stack.pop());
                let mul = e * f;
                stack.push(mul);
                break;
            case '/':
                let g = Number(stack.pop());
                let h = Number(stack.pop());
                let div = Math.floor(h / g);
                stack.push(div);
                break;
            default:
                stack.push(token);
        }   
    }
    return stack.pop();

}

tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

const newans = evalRPN(tokens);


