const NUM_LIST = [
  3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127,
];

const radixSort = (originNums: typeof NUM_LIST) => {
  let nums = originNums;

  for (let i = 1; i <= maxDigit(originNums); i++) {
    const containerArr: number[][] = Array.from({ length: 10 }).map(() => []);

    nums.forEach((n) => containerArr[numOfDigit(i, n)].push(n));
    nums = containerArr.flat(2);
  }

  return nums;
};

console.log(radixSort(NUM_LIST));

function maxDigit(nums: typeof NUM_LIST) {
  return nums.reduce(
    (maxDigit, n) => (maxDigit = Math.max(maxDigit, digitLen(n))),
    0
  );
}

function digitLen(n: number) {
  return n.toString().length;
}

function numOfDigit(digit: number, num: number) {
  return Math.floor(num / Math.pow(10, digit - 1)) % 10;
}

export {};
