/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            // Check if the word is a palindrome
            return word;
        }
    }
    return ""; // Return an empty string if no palindromic string is found
};