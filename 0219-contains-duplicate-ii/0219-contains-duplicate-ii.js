/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {

    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j] && j - i <= k) return true;
    //     }
    // }
    // return false;

    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        //find which index the first duplicate nums[i] is in => returns i - index <= k 
        if(i - map.get(nums[i]) <= k) return true;
        //set into map (value, index) => (key,value) pair
        map.set(nums[i], i)
    }
    return false;
}