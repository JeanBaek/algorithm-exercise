const nums = [0, 2, 1, 5, 3, 4];

const buildArray = function (nums) {
    return nums.map(num => nums[num]);
}

console.log(buildArray(nums));