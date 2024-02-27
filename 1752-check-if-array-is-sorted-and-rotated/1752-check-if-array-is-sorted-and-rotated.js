/**
 * @param {number[]} nums
 * @return {boolean}
 */

const check = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
};