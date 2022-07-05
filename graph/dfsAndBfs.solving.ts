// 백준 [1260] DFS와 BFS
// https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%ED%8A%B8%EB%A6%AC-bfs-dfs-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e96bcdadd1f3 준이오빠 블로그인데 내용 좋음
const fs = require("fs");
const filePath = "./dfsAndBfs.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

type Input = {
  nodeVolume: number;
  edgeVolume: number;
  startNode: number;
  vertexList: number[][];
};

const parsingInput = ([info, ...naiveVertexList]: string[]): Input => {
  const [nodeVolume, edgeVolume, startNode] = info.split(" ").map(Number);
  const vertexList = naiveVertexList.map((v) => v.split(" ").map(Number));

  return { nodeVolume, edgeVolume, startNode, vertexList };
};

const solution = ({ nodeVolume, edgeVolume, startNode, vertexList }: Input) => {
  console.log(dfs({ vertexList, startNode, nodeVolume }).join(" "));
  console.log(bfs({ vertexList, startNode, nodeVolume }).join(" "));
};

const dfs = ({
  vertexList,
  startNode,
  nodeVolume,
}: Omit<Input, "edgeVolume">) => {
  const queue = [startNode];
  const visited: boolean[] = new Array(nodeVolume + 1).fill(false);
  const adjacencyList: { [key: string]: number[] } = vertexList.reduce(
    (pre: { [key: string]: number[] }, [from, to]) => {
      pre[from] = (pre[from] || []).concat(to);
      pre[to] = (pre[to] || []).concat(from);

      return pre;
    },
    {}
  );
  const result: number[] = [];

  while (queue.length) {
    const current = queue.shift();
    if (visited[current]) continue;

    result.push(current);
    visited[current] = true;
    queue.unshift(...(adjacencyList[current] || []).sort((a, b) => a - b)); // 여기만 bfs랑 다름
  }

  return result;
};

const bfs = ({
  vertexList,
  startNode,
  nodeVolume,
}: Omit<Input, "edgeVolume">) => {
  const queue = [startNode];
  const visited: boolean[] = new Array(nodeVolume + 1).fill(false);
  const adjacencyList: { [key: string]: number[] } = vertexList.reduce(
    (pre: { [key: string]: number[] }, [from, to]) => {
      pre[from] = (pre[from] || []).concat(to);
      pre[to] = (pre[to] || []).concat(from);

      return pre;
    },
    {}
  );
  const result: number[] = [];

  while (queue.length) {
    const current = queue.shift();
    if (visited[current]) continue;

    result.push(current);
    visited[current] = true;
    queue.push(...(adjacencyList[current] || []).sort((a, b) => a - b)); // 여기만 dfs랑 다름
  }

  return result;
};

solution(parsingInput(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
