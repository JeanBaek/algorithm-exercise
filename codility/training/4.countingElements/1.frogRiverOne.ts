// Test result: https://app.codility.com/demo/results/trainingG7HKH9-JRE/

type Element = number;

function solution(X: Element, A: Element[]) {
  // 1부터 X까지 찾았다면, 그 시점의 idx 반환
  // A iterate (el is n)
  // save if n <= X in Set
  // if Set size is X break iterate and return current idx

  const numSet: Set<Element> = new Set();
  let earliestIdx = -1;

  A.some((n, i) => {
    if (n <= X) numSet.add(n);

    if (numSet.size === X) {
      earliestIdx = i;

      return true;
    }

    return false;
  });

  return earliestIdx;
}

export {};
