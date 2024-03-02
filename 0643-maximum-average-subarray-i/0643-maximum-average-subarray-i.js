/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
Init a variable to store sum
Store first k elements
Loop through array to get the next k elements
by removing first el value from sum and adding the next el value
Return max / k
*/
var findMaxAverage = function(nums, k) {
    
    let sum = 0;
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;
    // Iterate through the array, updating the sum and maxSum
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum average
    return maxSum / k;
};