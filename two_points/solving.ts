const fs = require("fs");

const input = fs
  .readFileSync("./input.txt") // file path: '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const parsingInput = (input: Array<string>) => {
  const [n, m] = input[0].split(" ").map((el) => +el);
  const valueList = input[1].split(" ").map((el) => +el);

  return { n, m, valueList };
};

const solution = ({
  n,
  m,
  valueList,
}: {
  n: number;
  m: number;
  valueList: Array<number>;
}) => {
  let start = 0;
  let end = 0;

  let sumValue = valueList[0];
  let result = 0;

  while (start < n && end < n) {
    if (sumValue === m) {
      result++;
      sumValue += valueList[++end];
    } else if (sumValue < m) {
      sumValue += valueList[++end];
    } else {
      sumValue -= valueList[start++];
    }
  }

  return result;
};

console.log(solution(parsingInput(input)));
