/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
Init a variable to store sum
Store first k elements
Loop through array
Return max / k
*/
var findMaxAverage = function(nums, k) {
    
    let sum = 0;
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        console.log(nums[i]);
        sum += nums[i];
        console.log(sum);
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