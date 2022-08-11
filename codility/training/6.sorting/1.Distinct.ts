/** Test Results: 
 1. https://app.codility.com/demo/results/trainingN54R78-UR2/
 2. https://app.codility.com/demo/results/trainingS6CVZ3-4B6/
 **/

// 처음 풀 때, Distinct value가 한번만 나온 값인 줄 알고 잘못 품
// Distinct value는 고유한 값이고 이 문제는 number of distinct value를 구하는 문제다

function solution(A: number[]) {
  return new Set(A).size;
}

console.log(solution([-10000, -100, 0, 1]));

export {};
