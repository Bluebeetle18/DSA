/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let xCopy = x;
    let reverse = 0, rem = 0
    while (x > 0) {
        rem = x % 10;
        reverse = (10 * reverse) + rem;
        x = Math.floor(x / 10);
    }
    return reverse === xCopy;
};