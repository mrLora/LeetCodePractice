/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {

    let a = 0;
    let l = 0;
    let isEligible = false;

    for (let c in s) {

        if (l === 3) return isEligible
        else if (s[c] == 'A' ) {
            a++;
            l = 0;
        } else if (s[c] == 'L') {
            l++;
        } else l = 0;
    }
    
    (l < 3 && a < 2) ? isEligible = true : isEligible;


return isEligible;
};