function validWordAbbreviationwildCard(word, abbr) {
    let a = 0;
    let w = 0;

    function backtrack(w, a, word, abbr) {
        //base case 1
        if (word.length === w && abbr.length === a) return true

        //base case 2
        if (a === abbr.length || w > word.length) return false;

        //case 
        //handle characters from a to z
        if (abbr[a] >= 'a' && abbr[a] <= 'z') {
            if (word[w] !== abbr[a]) return false;
            return backtrack(w + 1, a + 1, word, abbr);
        }

        //case 
        //handle digits
        if (abbr[a] >= '0' && abbr[a] <= '9') {
            let skip = 0;
            while (a < abbr.length && (abbr[a] >= '1' && abbr[a] <= '9')) {
                skip = skip * 10 + Number(abbr[a]);
            }
            a++
            return backtrack(w + skip, a, word, abbr)
        }

        //case 
        //handle wildCard

        if (abbr[a] == '*') {
            for (let i = w; i <= word.length; i++) {
                if (backtrack(i, a + 1, word, abbr)) return true;
            }
        }

        return false

    }

    return backtrack(w, a, word, abbr)

}

let answerty = validWordAbbreviationwildCard('planet', 'p*et');