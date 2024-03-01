/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0;
    let max = 0;
    let i = 0;
    
    while(i < nums.length) {
        nums[i] === 1 ? count++ : (
            max < count ? max = count : count = 0
        )
        nums[i] != 1 ? count = 0 : count;
        i++;
    }
    
    if (max > count) {
        return max
    } else return count
};