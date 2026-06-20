const lengthOfLongestSubstring = function (s) {
    let maxLength = 0; // track the best length across ALL starting points

    for (let index = 0; index < s.length; index++) {
        let current = []; // reset for every new starting point

        for (let j = index; j < s.length; j++) { // start inner loop at "index", not 0
            if (current.includes(s[j])) {
                break;
            } else {
                current.push(s[j]);
            }
        }

        maxLength = Math.max(maxLength, current.length);
    }

    return maxLength;
};

let s = "abcaabcdef";
console.log(lengthOfLongestSubstring(s));