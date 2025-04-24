function encode(strs) {

    // strs = ['LEET' ,'CODE', 'IS', 'HERE']
    //o/p = '4#LEET4#CODE2#IS4#HERE'
    let res = '';
    for (let s of strs) {
        console.log(s);
        length = s.length;
        encodePart = `${length}#${s}`
        res = res + encodePart
    }
    return res;
}
// function encode(strs) {
//     if (strs.length === 0) return "";
//     let sizes = [], res = "";
//     for (let s of strs) {
//         sizes.push(s.length);
//     }
//     for (let sz of sizes) {
//         res += sz + ',';
//     }
//     res += '#';
//     for (let s of strs) {
//         res += s;
//     }
//     return res;
// }
function decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
        // Find where the '#' is
        let j = i;
        while (str[j] !== '#') {
            j++;
        }

        // Extract the number before '#'
        const length = parseInt(str.slice(i, j));
        const word = str.slice(j + 1, j + 1 + length);
        res.push(word);

        // Move i to the next encoded part
        i = j + 1 + length;
    }

    return res;
}


encode(["LEET", "CODE", "IS", "HERE"]);
decode("10#LEETCODEIS4#HERE")