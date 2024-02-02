/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  const intArray = Array.from(String(x), Number);
  const clone = intArray.reverse().join('');
  
  return clone == x ? true : false;

};