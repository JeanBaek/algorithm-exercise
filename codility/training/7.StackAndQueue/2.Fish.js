/** Test Results: 
1. https://app.codility.com/demo/results/trainingRXVJMW-7MT/
2. https://app.codility.com/demo/results/trainingHRS6RM-TN6/
3. https://app.codility.com/demo/results/trainingPZTBZB-VCS/
**/

// A는 fish의 size
// B는 fish의 방향 (upstream: 0 or downstream: 1)
// 방향이 다른 두 fish가 만나면 size 작은 fish die

const Downstream = 1;

function solution(A, B) {
  const downFish = [];
  let aliveFishCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (B[i] === Downstream) {
      downFish.push(i);
    } else {
      while (downFish.length !== 0) {
        const downFishNo = downFish.pop();

        if (A[downFishNo] > A[i]) {
          downFish.push(downFishNo);
          break;
        }
      }

      if (downFish.length === 0) aliveFishCount++;
    }
  }

  return downFish.length + aliveFishCount;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));

console.log(solution([4, 3, 2, 1, 5], [0, 0, 0, 0, 0]));

console.log(solution([5, 3, 2, 1, 4], [1, 0, 0, 0, 0]));

console.log(solution([0, 1], [1, 1]));

console.log(solution([5, 3, 2, 1, 4], [1, 1, 1, 1, 1]));
