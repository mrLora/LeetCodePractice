/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const m = img.length;
    const n = img[0].length;
    const result = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;

            // Iterate through the 3x3 grid centered at (i, j)
            for (let ki = i - 1; ki <= i + 1; ki++) {
                for (let kj = j - 1; kj <= j + 1; kj++) {
                    if (ki >= 0 && ki < m && kj >= 0 && kj < n) {
                        sum += img[ki][kj];
                        count++;
                    }
                }
            }

            // Calculate the average and round down
            result[i][j] = Math.floor(sum / count);
        }
    }

    return result;
}