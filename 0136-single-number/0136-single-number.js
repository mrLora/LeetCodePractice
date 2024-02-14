/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let hash = {};
    // create a hash table to define when a new unmarked element appeares
    // else increment the prev defined element
    for (let i of nums) {

        if (!hash[i]) {

            hash[i] = 1;
        } else {

            hash[i]++;
        }
    }
    console.log(hash);

    // check for which element appeared once
    for (let i in hash) {

        if (hash[i] == 1) {

            return i;
        }
    }
};