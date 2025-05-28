function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    let counts1 = new Array(26).fill(0);
    //1 . build frequency array and convert to string for s1

    for (let c of s1) {

        let charCode = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts1[charCode] = counts1[charCode] + 1;
    }

    let str1 = counts1.join(',');
    console.log(str1);

    //2.Start using the sliding window pattern for fixed length
    //  The length should be same as the length of s1
    //  for each window of length s1.length build the frequency array 
    //  Convert the window to string using the same logic as done for s1
    //  for each window match s1 string to s2 string .return true immediately if it matches
    //  outside the sliding widnow loop return false

    let l = 0;
    for (let r = 0; r < s2.length; r++) {
        if (r - l + 1 > s1.length) {
            l++
        }
        if (r - l + 1 == s1.length) {
            let counts2 = new Array(26).fill(0);
            let windowStr = s2.substring(l, r + 1);
            console.log(windowStr);
            for (let ch of windowStr) {
                let charCode = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                counts2[charCode] = counts2[charCode] + 1;

            }
            let str2 = counts2.join(',');
            if (str2 == str1) {
                return true;
            }
        }

    }
    return false
}

checkInclusion('abc', 'lecabee');