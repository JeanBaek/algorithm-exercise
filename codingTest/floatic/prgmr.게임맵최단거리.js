// 힙

function solution(maps) {
  const row = maps[0].length;
  const col = maps.length;
  const forward = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = [[0, 0]];
  const distance = Array.from({ length: col }).map(() => Array(row).fill(1));

  while (queue.length) {
    const [x, y] = queue.shift();

    forward.forEach(([fX, fY]) => {
      const nX = x + fX;
      const nY = y + fY;
      const isOutOfRange = nX < 0 || nY < 0 || nX >= row || nY >= col;

      if (isOutOfRange) return;

      const isBlocked = maps[nY][nX] === 0;
      const isVisited = distance[nY][nX] !== 1;

      if (isBlocked || isVisited) return;

      distance[nY][nX] = distance[y][x] + 1;
      queue.push([nX, nY]);
    });
  }

  console.log({ distance });

  const resultDistance = distance[col - 1][row - 1];
  return resultDistance > 1 ? resultDistance : -1;
}

const input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
];
console.log(solution(input));
