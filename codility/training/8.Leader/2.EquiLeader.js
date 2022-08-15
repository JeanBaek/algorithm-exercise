/**
1. https://app.codility.com/demo/results/trainingWHBF5C-T7V/
2. https://app.codility.com/demo/results/trainingPB69HM-Z3X/
**/

// 시간복잡도 최적화 예정

// 왼쪽의 leader와 오른쪽의 leader가 같으면 equiLeader
function solution(A) {
  let equiLeaderCount = 0;

  A.forEach((n, i, arr) => {
    if (i === 0) return;
    const leftLeader = getLeader(arr.slice(0, i));
    const rightLeader = getLeader(arr.slice(i));

    if (leftLeader === rightLeader && rightLeader !== -1) {
      equiLeaderCount++;
    }
  });

  return equiLeaderCount;
}

function getLeader(arr) {
  const halfLen = arr.length / 2;
  const intIndices = {};
  let leader = -1;

  arr.some((int) => {
    intIndices[int] = (intIndices[int] || 0) + 1;

    if (intIndices[int] > halfLen) {
      leader = int;
      return true;
    } else return false;
  });

  return leader;
}
