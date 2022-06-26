import { Queue } from "./util";

// 백준 [7569] 토마토
// Olympiad > 한국정보올림피아드 > 한국정보올림피아드시․도지역본선 > 지역본선 2013 > 초등부 3번
const fs = require("fs");
const filePath = "./토마토.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const parsingInput = ([info, ...naiveList]: Array<string>) => {
  const [Col, Row, Box] = info.split(" ").map(Number);
  const list = [];

  for (let i = 0; i < Box; i++) {
    list.push(
      naiveList
        .slice(i * Row, i * Row + Row)
        .map((line) => line.split(" ").map(Number))
    );
  }

  return { Col, Row, Box, list };
};

const Direction = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

const isAvailableRange = (col, row, box, Col, Row, Box) => {
  console.log("isAvailableRange", {
    "col >= 0 ": col >= 0,
    "row >= 0 ": row >= 0,
    "box >= 0 ": box >= 0,
    "col < Col ": col < Col,
    "row < Row ": row < Row,
    "box < Box": box < Box,
  });
  return (
    col >= 0 && row >= 0 && box >= 0 && col < Col && row < Row && box < Box
  );
};

const solution = ({
  Col,
  Row,
  Box,
  list,
}: {
  Col: number;
  Row: number;
  Box: number;
  list: number[][];
}) => {
  const farm = list;
  const visited = new Array(Box).fill(
    new Array(Row).fill(new Array(Col).fill(0))
  );
  const day = new Array(Box).fill(new Array(Row).fill(new Array(Col).fill(0)));

  const queue = new Queue();
  let leftTomato = 0;

  for (let i = 0; i < Box; i++) {
    for (let j = 0; j < Row; j++) {
      for (let k = 0; k < Col; k++) {
        if (farm[i][j][k] === 0) leftTomato++;
        else if (farm[i][j][k] === 1) {
          visited[i][j][k] = 1;
          queue.push([i, j, k]);
        }
      }
    }
  }

  if (leftTomato === 0) return console.log(0);

  while (queue.size) {
    let [box, row, col] = queue.shift();

    for (let i = 0; i < Direction.length; i++) {
      const [newBox, newRow, newCol] = [
        box + Direction[i][0],
        row + Direction[i][1],
        col + Direction[i][2],
      ];

      if (
        !isAvailableRange(newCol, newRow, newBox, Col, Row, Box) ||
        visited[newBox][newRow][newCol] ||
        farm[newBox][newRow][newCol] !== 0
      ) {
        continue;
      }

      day[newBox][newRow][newCol] = day[box][row][col] + 1;
      leftTomato--;

      if (leftTomato === 0) return console.log(day[box][row][col] + 1);

      queue.push([newBox, newRow, newCol]);
      visited[newBox][newRow][newCol] = 1;
    }
  }

  console.log({ farm, visited, day, queue, leftTomato });
  console.log(-1);
};

solution(parsingInput(input));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
