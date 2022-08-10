// Test result: https://app.codility.com/demo/results/trainingFTDBQJ-N8J/

function solution(A: number[]): number {
  // 뭘 하라는 거지?
  // 일단 unpaired number을 구하는 건 알겠어
  // 딱 하나만 unpaired number래

  // set 만들어서 A 1번 iterate 돌면서 add/delete 반복하고
  // 남은 1개 숫자 반환

  const numSet: Set<typeof A[number]> = new Set();

  A.forEach((n) => (numSet.has(n) ? numSet.delete(n) : numSet.add(n)));

  return numSet.values().next().value;
}

export {};
