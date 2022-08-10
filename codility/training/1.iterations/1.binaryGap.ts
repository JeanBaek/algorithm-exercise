// Test result: https://app.codility.com/demo/results/trainingER8N24-SBE/

// N range is [1..2,147,483,647]. JS의 MAX_SAFE_INTEGER 보다 작으므로 BigInt 안씀

function solution(N: number) {
  // 1번째 요소 빼고 iterate 돌면서
  // currentGap 0을 모아둘거야
  // if 내가 1 => currentGap 랑 maxGap 중 Math.max() 재할당
  // else => currentGap++

  let maxGap = 0;

  N.toString(2)
    .split("")
    .reduce((currentGap, n) => {
      if (n === "1") {
        maxGap = Math.max(maxGap, currentGap);

        return 0; // reset currentGap
      } else {
        return currentGap + 1;
      }
    }, 0);

  return maxGap;
}

console.log(solution(1041));

export {};
