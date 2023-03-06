/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const existNumSet = new Set(arr);
    const notExistNums = [];
    
    let posNum = 1;
    while (notExistNums.length < k) {
        if (!existNumSet.has(posNum)) notExistNums.push(posNum);
        posNum++;
    }

    return notExistNums[k - 1];
};