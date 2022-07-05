// 프로그래머스 [배달]
const solution = (N, road, K) => {
  const dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const adjacencyList = road.reduce((pre, [from, to, weight]) => {
    pre[from] = (pre[from] || []).concat({ village: to, weight });
    pre[to] = (pre[to] || []).concat({ village: from, weight });

    return pre;
  }, {});

  let queue = [{ village: 1, weight: 0 }];
  dist[1] = 0;

  while (queue.length) {
    let current = queue.pop();

    for (let next of adjacencyList[current.village]) {
      const newPathWeight = dist[current.village] + next.weight;
      if (dist[next.village] > newPathWeight) {
        dist[next.village] = newPathWeight;
        queue.push(next);
      }
    }
  }

  return dist.filter((v) => v <= K).length;
};

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
