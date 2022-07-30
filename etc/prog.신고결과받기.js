const input = [
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3,
];

function solution(ids, report, k) {
  const reports = {};
  const count = new Map();

  report.forEach((r) => {
    const [u, reported] = r.split(" ");

    if (reports[u]) {
      if (reports[u].has(reported)) return;

      reports[u].add(reported);
      count.set(reported, (count.get(reported) || 0) + 1);
    } else {
      reports[u] = new Set([reported]);
      count.set(reported, (count.get(reported) || 0) + 1);
    }
  });

  return ids.map((u) => {
    if (!reports[u]) return 0;

    return [...reports[u]].filter((r) => count.get(r) >= k).length;
  });
}

console.log(solution(...input));
