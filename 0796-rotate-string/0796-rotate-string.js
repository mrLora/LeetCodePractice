/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

/*
Split string into array of Chr
Check to see if joined arr of Chr is same as goal
Otherwise shift first element into last index of arr
*/
var rotateString = function(s, goal) {
    
    const str = s.split('');
    
    for(let i = 0; i < goal.length; i++) {
        if(str.join('') === goal) {
            return str.join('');
        } else {
            str[str.length - 1] = str.shift();
        }
    }
    
    return false;
};