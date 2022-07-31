// 내 힘으로 풀었음 V

function solution(n, stations, w) {
  if (stations.length >= n - w) return 0;

  const range = w * 2 + 1;
  let result = 0;

  stations.forEach((s, i) => {
    // 첫번째 기지국이면, 첫 아파트부터 현 기지국 사이 계산
    if (i === 0) {
      if (s > w + 1) result += ceil((s - (w + 1)) / range);
    }

    // 마지막 기지국이면, 현 기지국부터 마지막 아파트 사이 계산
    if (i === stations.length - 1) {
      if (n > s + w) result += ceil((n - (s + w)) / range);
    }

    // 다음 기지국이 있으면, 현 기지국부터 다음 기지국 사이 계산
    if (stations[i + 1]) {
      if (stations[i + 1] - s - w * 2 - 1 > 0)
        result += ceil((stations[i + 1] - s - w * 2 - 1) / range);
    }
  });

  return result;
}

function ceil(n) {
  return (n | 0) + (n % 1 !== 0 ? 1 : 0);
}

console.log(solution(11, [1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
// console.log(solution(16, [9], 2));
