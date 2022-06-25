// 프로그래머스 [여행경로]
// 앗싸 이제 다른사람풀이 안보고도 내가 직접 풀수 있다
const sortByAlphabet = (list) => {
  return list
    ? list.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      })
    : [];
};

const solution = (tickets) => {
  const queue = ["ICN"];
  const visited = {};
  const adjacencyList = tickets.reduce((pre, [from, to]) => {
    pre[from] = (pre[from] || []).concat(to);

    return pre;
  }, {});
  const result = [];

  while (queue.length) {
    const current = queue.shift();

    if (visited[current]) continue;
    visited[current] = true;

    for (let children of sortByAlphabet(adjacencyList[current])) {
      console.log({ children });
      if (visited[children]) continue;

      if (result[result.length - 1] === current) result.push(children);
      else result.push(current, children);
    }

    queue.unshift(...sortByAlphabet(adjacencyList[current]));
  }

  return result;
};

console.log(
  // solution([
  //   ["ICN", "JFK"],
  //   ["HND", "IAD"],
  //   ["JFK", "HND"],
  // ])
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
// export {};
