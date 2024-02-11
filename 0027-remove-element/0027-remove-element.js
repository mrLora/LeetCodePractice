/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // Check all the ints that match val
 // Remove if they match (in place)
 // Return the array's length

const removeElement = (nums, val)  => {

  if (nums === null || nums.length === 0) return 0;
  
  let index = 0;
  for (let int in nums) {

    nums[int] === val ? nums.splice(index, 1) : index;
    nums[int - 1] === val ? nums.splice(index - 1, 1) : index;
    nums[int - 2] === val ? nums.splice(index - 2, 1) : index;
    index ++;
    
  }
  
  const length = nums.length;

  if (nums[0] === val) nums.pop();
  if (nums[length - 1] === val) nums.pop();

  return length;
};
