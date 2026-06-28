/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    // Overflow case
    if (dividend === MIN && divisor === -1) {
        return MAX;
    }

    // Determine sign
    const positive = (dividend > 0) === (divisor > 0);

    // Work with positive values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        // Double temp until it can't fit
        while (a >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        result += multiple;
    }

    return positive ? result : -result;
};