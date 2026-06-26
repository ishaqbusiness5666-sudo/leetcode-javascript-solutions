/**
 * @param {string} s
 * @return {number}
 */
//leetcode problem: 8. String to Integer (atoi)

var myAtoi = function(s) {
    s = s.trim();
    if (!s) return 0;
    
    let sign = 1;
    let i = 0;
    
    if (s[0] === '-') {
        sign = -1;
        i = 1;
    } else if (s[0] === '+') {
        i = 1;
    }
    
    let result = 0;
    while (i < s.length && /\d/.test(s[i])) {
        result = result * 10 + parseInt(s[i]);
        i++;
    }
    
    result *= sign;
    
    // Clamp the result to the 32-bit signed integer range
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;
    
    return result;
};