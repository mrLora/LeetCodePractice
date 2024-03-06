/**
 * @param {number} n
 * @return {boolean}
 */

/*
Create helper function to convert n to its binary value
Check each adjacent bits have different values
Return boolean if conditions are met
*/

const int2bin = (int) => {
    // use unsigned right shift operator with a radix range of 2 for the base num value
    return (int >>> 0).toString(2);
};

var hasAlternatingBits = function(n) {
    // turn string into array and grab first index val
    const binValue = int2bin(n).split('');
    let diffValues = true;
    let prevBit = binValue.shift();
    // compare each bit to see if values are different
    binValue.forEach(bit => {
        if(bit === prevBit) diffValues = false; 
        prevBit = bit;
    });
    return diffValues;
};