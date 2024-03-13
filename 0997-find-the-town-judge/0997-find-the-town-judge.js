/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
   if (n === 1 && trust.length === 0) {
        // If there is only one person and no trust relationships, that person is the judge
        return 1;
    }

    const trustCount = new Array(n + 1).fill(0);
    const trustedOthers = new Array(n + 1).fill(0);

    for (let [a, b] of trust) {
        trustCount[b]++;
        trustedOthers[a]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1 && trustedOthers[i] === 0) {
            return i;
        }
    }

    return -1;
};