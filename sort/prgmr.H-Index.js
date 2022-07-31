const input = [3, 0, 6, 1, 5];

function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;

  while (h + 1 <= citations[h]) h++;

  return h;
}

console.log(solution(input));
