// 프로그래머스 [로또의 최고 순위와 최저 순위] lv.1
function solution(lottos, win_nums) {
  const ranking = [6, 6, 5, 4, 3, 2, 1];
  const winNumSet = new Set(win_nums);
  let matchCount = 0;
  let unknownNumCount = 0;

  lottos.forEach((num) => {
    if (num === 0) unknownNumCount++;
    else if (winNumSet.has(num)) matchCount++;
  });

  return [ranking[matchCount + unknownNumCount], ranking[matchCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
