function validWordAbbreviation(word, abbr) {
    // Your code goes here
    let a = 0;
    let w = 0;

    while (a < abbr.length && w < word.length) {

        if (abbr[a] == word[w]) {
            a++;
            w++
            continue;
        }

        if (!(abbr[a] >= '1' && abbr[a] <= '9')) {
            return false
        }

        let skip = 0

        while (a < abbr.length && abbr[a] >= '0' && abbr[a] <= '9') {
            skip = Number(abbr[a]) + (skip*10);
            a++
        }

        w = w + skip;
    }

    return a == abbr.length && w == word.length
} 