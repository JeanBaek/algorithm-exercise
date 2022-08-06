function solution(ids, days) {
  const set = {}; // {[key: id]: Set<day>}
  const result = [];

  ids.forEach((id, i) => {
    if (set[id]) set[id].add(days[i]);
    else set[id] = new Set([days[i]]);
  });

  for (let [key, value] of Object.entries(set)) {
    if (value.size < 3) continue;

    result.push(+key);
  }

  return result;
}

const input = [];

console.log(
  solution([1, 2, 1, 3, 1, 2, 1], ["월", "목", "월", "수", "일", "화", "금"])
);
