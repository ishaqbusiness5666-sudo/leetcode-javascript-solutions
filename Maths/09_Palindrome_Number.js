/**
 * @param {number} x
 * @return {boolean}
//  */

const isPalindrome = function (x) {
    const backward = BackwardTheNumber(x);
    let result = true
    if ( x === backward) {
        return result = true
    } else {
       return result = false
    }
};

function BackwardTheNumber(x) {
       let reversed = 0;
    while (x > 0) {
        let digit = x % 10;           // get last digit
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);     // remove last digit
    }

    return reversed;
}

let x = 232
console.log(isPalindrome(x))