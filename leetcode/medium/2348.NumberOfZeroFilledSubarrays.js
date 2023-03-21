/**
 * @param {number[]} nums
 * @return {number}
 */

const zeroFilledSubarray = function (nums) {
    const subZeroCountList = nums.reduce((zeroCounts, num, idx) => {
        if (num !== 0) return zeroCounts;

        if (nums[idx - 1] === 0) zeroCounts[zeroCounts.length - 1]++;
        else zeroCounts.push(1);

        return zeroCounts;
    }, [])


    return subZeroCountList.reduce((subarrayCount, count) => (
        subarrayCount += (count * (count + 1) / 2)
    ), 0);
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]))
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]))
