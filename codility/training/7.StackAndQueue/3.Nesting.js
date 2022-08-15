// Test Reuslt: https://app.codility.com/demo/results/training3NA95P-DQF/

const bracket = {
  ")": "(",
};

function solution(S) {
  const queue = [];

  if (S === "") return 1;
  else if (S % 2) return 0;

  const isNested = !S.split("").some((b) => {
    if (b === "(") queue.push(b);
    else return bracket[b] !== queue.pop();
  });

  return isNested && !queue.length ? 1 : 0;
}
