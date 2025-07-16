function maxSwap(num) {

    //convert to string
    let cnum = num.toString()

    let max_digit = 0;
    let max_i = -1;
    let swap_i = -1;
    let swap_j = -1;
    for (let i = cnum.length; i >= 0; i--) {
        if (cnum[i] > max_digit) {
            max_digit = cnum[i];
            max_i = i
        }

        if (cnum[i] < max_digit) {
            swap_i = i;
            swap_j = max_i
        }


    }
    if (swap_i !== -1) {
        [cnum[swap_i], cnum[swap_j]] = [cnum[swap_j], cnum[swap_i]];
    }
    return Number(cnum.join(""));
}
//variant of above
function buildSecondLargestNumber(num) {
    // Step 1: Convert number to digit array
    const digits = num.toString().split('').map(Number);

    // Edge case: single-digit numbers
    if (digits.length <= 1) return null;

    // Step 2: Count frequencies of digits
    const freq = Array(10).fill(0);
    for (let digit of digits) {
        freq[digit] += 1;
    }

    // Step 3: Build the largest possible number using digit frequencies
    const largest = [];
    for (let d = 9; d >= 0; d--) {
        let count = freq[d];
        while (count > 0) {
            largest.push(d);
            count = count - 1;
        }
    }

    // Step 4: From right to left, find the last pair of unequal adjacent digits and swap them
    for (let i = largest.length - 1; i > 0; i--) {
        if (largest[i] !== largest[i - 1]) {
            // Swap to get second-largest permutation
            [largest[i], largest[i - 1]] = [largest[i - 1], largest[i]];
            return Number(largest.join(''));
        }
    }

    // Step 5: No second-largest exists (e.g., all digits are the same)
    return null;
}