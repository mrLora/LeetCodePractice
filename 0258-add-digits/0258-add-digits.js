/**
 * @param {number} num
 * @return {number}
 */

/*
If num is 0, return num
Split num into an Array of digits
While the Array's length is not 1
Lopp through and keep adding all digits
Declare a variable for the sum of all digits
Return the single digit
*/
var addDigits = function(num) {
    if (num === 0) return num;
    
    let numArr = num.toString().split('');
    
    while(numArr.length != 1) {
        let sum = 0;
        numArr.forEach(n => sum = sum + parseInt(n));
        numArr = sum.toString().split('');
    }
    
    return (parseInt(numArr.join('')));
};