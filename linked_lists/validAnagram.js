function isAnagram(s, t) {

    let shm = {}
    let thm = {};
    let n1 = s.length;
    let n2 = t.length;

    if (n1 !== n2) {
        return false
    }

    for (let i = 0; i < n1; i++) {
        let sChar = s[i];
        let tChar = t[i];
        console.log('sChar-->', sChar);
        console.log('tChar-->', tChar);

        if (!shm[sChar]) {
            shm[sChar] = 1;
        } else {
            let exVal = shm[sChar];
            shm[sChar] = exVal + 1;
        }
        if (!thm[tChar]) {
            thm[tChar] = 1;
        } else {
            let exVal = thm[tChar];
            thm[tChar] = exVal + 1;
        }

    }

    for (let char in shm) {
        if (shm[char] !== thm[char]) return false;
    }
    return true;
    console.log('#####===>', shm);
    console.log('#####===>', thm);

}
let s = "jar";
let t = "raj";

//Output: true

console.log(isAnagram(s, t));



