/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {

  let map = {};

  for (let [index, num] of nums.entries()) {

    if (map[num] !== undefined) return [map[num], index];
    else map[target - num] = index;

  }
  
}