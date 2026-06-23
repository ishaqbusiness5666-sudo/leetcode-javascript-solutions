/**
 * @param {string} s
 * @return {string}
*/
const longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }
        // Length of palindrome found
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome (aba)
        let len1 = expand(i, i);

        // Even length palindrome (abba)
        let len2 = expand(i, i + 1);

        let len = Math.max(len1, len2);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
};
const s = "ababa"
console.log(longestPalindrome(s));
