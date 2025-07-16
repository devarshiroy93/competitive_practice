function groupStrings(strs) {
    let res = []
    let shiftedToOriginals = new Map();
    function shift(s) {
        let key = '';
        let leftShifts = s.charCodeAt(0) - 'a'.charCodeAt(0);

        for (let c of s) {
            const encodedCharCode = c.charCodeAt(0) - leftShifts;
            if (encodedCharCode < 'a'.charCodeAt(0)) {
                encodedCharCode += 26
            }
            key += String.fromCharCode(encodedCharCode);
        }
        return key;
    }

    //loop over each strings

    for (let s of strs) {
        let shifted = shift(s);
        if (!shiftedToOriginals.has(shifted)) {
            shiftedToOriginals.set(shifted, [])
        }
        shiftedToOriginals.get(shifted).push(s);
    }

    shiftedToOriginals.forEach((value) => {
        res.push(value);
    });
    return res;

}



groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]);

function groupStringVariant(s,rotationFactor) {


    let res = '';

    for (let c of s) {
        let code = c.charCodeAt(0);
        if(c >='a' && c<='z'){
            let base = 'a'.charCodeAt(0);
            let rotated = (code-base+rotationFactor)%26
            res = res + String.fromCharCode(rotated);
        }
        else if(c >='A' && c<='Z'){
            let base = 'A'.charCodeAt(0);
            let rotated = (code-base+rotationFactor)%26
            res = res + String.fromCharCode(rotated);
        }
        else if(c >='0' && c<='9'){
            let base = '0'.charCodeAt(0);
            let rotated = (code-base+rotationFactor)%10
            res = res + String.fromCharCode(rotated);
        }
        else{
            res = res+ String.fromCharCode(rotated);
        }
    }

    return res;
}