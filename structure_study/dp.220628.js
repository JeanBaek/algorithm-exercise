// 0. 최적 부분 구조와 반복되는 하위 문제가 존재하는 문제를
// 1. 동적 프로그래밍 없이 풀어보고
// 2. 동적 프로그래밍 방식으로 개선

// 스스로 만든 로직
const fibByMe = (n, fibList = [0, 1, 1]) => {
  if (n < 0) return -1;
  if (!fibList[n]) {
    fibList.push(fibByMe(n - 1, fibList) + fibByMe(n - 2, fibList));
  }

  return fibList[n];
};

// console.log(fibByMe(100));

// 강의에서 소개한 로직
// 재귀 방식은 O(2^N)임 (실제로는 O(1.6^N)이지만, generally 2라고 칭함)
// 같은 계산을 여러번 하는 게 문제
const fibByLecture = (n) => {
  if (n <= 2) return 1;

  return fibByLecture(n - 1) + fibByLecture(n - 2);
};

// console.log(fibByLecture(40));

// 메모이제이션을 이용한 로직 (하향식)
// O(n)
// 재귀방식이므로 maximum call stack 이 될 수 있음
const fibByMemo = (n, memo = [undefined, 1, 1]) => {
  if (memo[n] !== undefined) return memo[n];
  const res = fibByMemo(n - 1, memo) + fibByMemo(n - 2, memo);
  memo[n] = res;

  return res;
};

console.log(fibByMemo(10000));

// 타뷸레이션을 이용한 로직 (상향식)
// 공간 제약을 덜 받음
const fibByTab = (n) => {
  const fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
};

// console.log(fibByTab(1000));
