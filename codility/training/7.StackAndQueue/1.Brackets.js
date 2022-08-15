/** Test Results:
1. https://app.codility.com/demo/results/trainingKSJ8G6-P5V/
2. https://app.codility.com/demo/results/trainingEACCMH-ZJN/
**/

const BracketSet = {
  ")": "(",
  "]": "[",
  "}": "{",
};

function solution(S) {
  const queue = [];

  if (S === "") return 1;

  const isNested = !S.split("").some((b) => {
    if (b === "(" || b === "[" || b === "{") {
      queue.push(b);
    } else if (b === ")" || b === "]" || b === "}") {
      return BracketSet[b] !== queue.pop();
    }
  });

  return isNested && queue.length === 0 ? 1 : 0;
}

console.log(solution("{[()()]}}"));
// console.log(solution("([)()]"));
