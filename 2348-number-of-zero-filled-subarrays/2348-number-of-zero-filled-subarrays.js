/**
 * @param {number[]} nums
 * @return {number}
 */

const zeroFilledSubarray = function (nums) {
    const subZeroCountList = nums.reduce((zeroCountList, num, idx) => {
        if (num !== 0) return zeroCountList;

        if (nums[idx - 1] === 0) zeroCountList[zeroCountList.length - 1]++;
        else zeroCountList.push(1);

        return zeroCountList;
    }, [])


    return subZeroCountList.reduce((subarrayCount, count) => (
        subarrayCount += (count * (count + 1) / 2)
    ), 0);
};