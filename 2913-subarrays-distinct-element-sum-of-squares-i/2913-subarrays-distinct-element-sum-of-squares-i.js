/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Initialize a variable to store the sum of squares of the distinct counts.
Use two nested loops to generate all possible subarrays.
For each subarray, use a set or a map to keep track of distinct elements.
Calculate the square of the size of the set (which gives us the square of the distinct count) and add it to the sum.
Return the sum after all subarrays are processed.
*/

var sumCounts = function(nums) {
    
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
 
        let distinctElements = new Set();
        
        for (let j = i; j < nums.length; j++) {

            distinctElements.add(nums[j]);
            sum += distinctElements.size ** 2;
        }
    }

    return sum;
};