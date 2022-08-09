const findMedianSortedArrays = function (nums1, nums2) {
  const sum = nums1.concat(nums2).sort((a, b) => a - b);
  const sumLen = sum.length;
  const midIdx = sumLen / 2;

  console.log({ sum, sumLen, midIdx });

  if (sumLen % 2) return sum[Math.floor(midIdx)];
  else return (sum[midIdx - 1] + sum[midIdx]) / 2;
};

// console.log(findMedianSortedArrays([1, 3], [2, 7]));
console.log(findMedianSortedArrays([1, 3], [2]));
