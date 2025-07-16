function calculate(s) {

    let lastNum = 0;
    let num = 0;
    let op = '+';
    let result = 0;

    for (let i = 0; i < s.length; i++) {

        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        //if current char is or blank  end of string process prvious number
        if (ch !== ' ' && isNaN(ch) || i == s.length - 1) {
            switch (op) {
                case '+':
                    result = result + lastNum;
                    lastNum = num;
                    break;
                case '-':
                    result = result + lastNum;
                    lastNum = -num;
                    break;
                case '*':
                    lastNum = lastNum * num;
                    break;
                case '/':
                    lastNum = Math.trunc(lastNum / num);
                    break;
            }

            op = ch;
            num = 0;
        }

    }
    return result + lastNum;
}

calculate('2+3*2');