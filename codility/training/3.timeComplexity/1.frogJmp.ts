// Test result: https://app.codility.com/demo/results/trainingYSDC5E-55Q/

/**
assumptions:
- X, Y and D are integers within the range [1..1,000,000,000];
- X ≤ Y.
**/

function solution(X: number, Y: number, D: number) {
  return Math.ceil((Y - X) / D);
}

export {};
