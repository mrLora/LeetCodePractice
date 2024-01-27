/**
 * @param {number[]} salary
 * @return {number}
 */


const average = (salary) => {

    const sortedSaleries = salary.sort((a,b) => a - b); // Ascending

    sortedSaleries.shift();
    sortedSaleries.pop();

    const sum = sortedSaleries.reduce((accumulator, currentValue) => {
        let averageSum = accumulator + currentValue;
        return averageSum;
    }, 0);

    return sum / sortedSaleries.length;
};