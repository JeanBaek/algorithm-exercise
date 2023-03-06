/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * 1 <= k <= 1000
 * arr[i] < arr[j] for 1 <= i < j <= arr.length
 */

const findKthPositive = function (arr, k) {
    const existNumSet = new Set(arr);
    const notExistNums = [];

    let posNum = 1;
    while (notExistNums.length < k) {
        if (!existNumSet.has(posNum)) notExistNums.push(posNum);
        posNum++;
    }

    return notExistNums[k - 1];
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))