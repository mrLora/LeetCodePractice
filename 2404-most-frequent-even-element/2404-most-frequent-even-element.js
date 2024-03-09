/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const frequencyMap = new Map();

    // Count frequencies of even numbers
    for (const num of nums) {
        if (num % 2 === 0) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
    }

    let mostFrequent = -1;
    let maxFrequency = 0;

    // Find the most frequent even element
    for (const [num, frequency] of frequencyMap.entries()) {
        if (
            frequency > maxFrequency ||
            (frequency === maxFrequency && num < mostFrequent)
        ) {
            mostFrequent = num;
            maxFrequency = frequency;
        }
    }

    return mostFrequent;
};