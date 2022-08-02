// 프로그래머스 [여행경로]
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
  tickets.sort();

  const adjacencyList = tickets.reduce((pre, [from, to]) => {
    pre[from] = (pre[from] || []).concat(to);

    return pre;
  }, {});
  const result = [];

  function dfs(departure) {
    for (let children of adjacencyList[departure]) {
      if (adjacencyList[departure]) {
        adjacencyList[departure] = adjacencyList[departure].filter(
          (v) => v !== children
        );
      }
      if (adjacencyList[children]) {
        adjacencyList[children] = adjacencyList[children].filter(
          (v) => v !== departure
        );
      }

      if (result[result.length - 1] === departure) result.push(children);
      else result.push(departure, children);

      if (adjacencyList[children]?.length) dfs(children);
    }
  }

  dfs("ICN");

  return result;
};

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ]),
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ]),
  solution([
    ["ICN", "COO"],
    ["ICN", "BOO"],
    ["COO", "ICN"],
    ["BOO", "DOO"],
  ])
);

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
// export {};

// 호진님
// const solution = (tickets) => {
//   let answer = [];
//   const obj = {};
//   const targetLen = tickets.length;
//   tickets.forEach((el) => {
//     const [from, to] = el;
//     if (!obj[from]) obj[from] = { link: [], visited: [] };
//     if (!obj[to]) obj[to] = { link: [], visited: [] };
//     obj[from].link.push(to);
//     obj[from].visited.push(0);
//   });
//   const keys = Object.keys(obj);
//   keys.forEach((el) => obj[el].link.sort());
//   const dfs = (str, n) => {
//     const { link, visited } = obj[str];
//     if (n === targetLen) return true;
//     for (let i = 0; i < link.length; i++) {
//       const next = link[i];
//       if (!visited[i]) {
//         visited[i] = 1;
//         if (dfs(next, n + 1)) {
//           answer.push(next);
//           return true;
//         }
//         visited[i] = 0;
//       }
//     }
//     return false;
//   };
//   dfs("ICN", 0);
//   answer.push("ICN");
//   return answer.reverse();
// };
