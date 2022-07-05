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

//////////////////////////////

// 호진님
// Queue 구현해서 사용
// import * as fs from "fs";
// const inputList = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// class Node<T> {
//   val: T;
//   next?: Node<T>;
//   prev?: Node<T>;
//   constructor(val) {
//     this.val = val;
//   }
// }
// class Queue<T> {
//   _size: number;
//   head?: Node<T>;
//   tail?: Node<T>;
//   constructor() {
//     this._size = 0;
//   }
//   size() {
//     return this._size;
//   }
//   add(node: Node<T>) {
//     if (!this.head) this.head = node;
//     else {
//       this.tail!.next = node;
//       node.prev = this.tail;
//     }
//     this.tail = node;
//     this._size++;
//   }
//   poll() {
//     if (!this.head) return undefined;
//     const oldHead = this.head;
//     if (this._size === 1) {
//       this.tail = undefined;
//       this.head = undefined;
//     } else {
//       this.head = oldHead.next;
//       this.head!.prev = undefined;
//       oldHead.next = undefined;
//     }
//     this._size--;
//     return oldHead;
//   }
// }

// const delta = [
//   [-1, 0, 0],
//   [1, 0, 0],
//   [0, -1, 0],
//   [0, 1, 0],
//   [0, 0, -1],
//   [0, 0, 1],
// ];
// const tray: number[][][] = [];
// const q = new Queue<number[]>();
// let zeroCnt = 0;
// const [str1, ...str2] = inputList;
// const [m, n, h] = str1.trim().split(" ").map(Number);
// let answer = 0;
// const inpHandler = (str: string[]) => {
//   let index = 0;
//   for (let i = 0; i < h; i++) {
//     tray[i] = str
//       .slice(index, (index += n))
//       .map((el) => el.trim().split(" ").map(Number));
//   }
//   for (let i = 0; i < h; i++)
//     for (let j = 0; j < n; j++)
//       for (let k = 0; k < m; k++) {
//         if (!tray[i][j][k]) zeroCnt++;
//         else if (tray[i][j][k] === 1) q.add(new Node([i, j, k, 0]));
//       }
// };

// const rangeCheck = (x, y, z) => {
//   return 0 <= x && x < h && 0 <= y && y < n && 0 <= z && z < m;
// };

// const bfs = () => {
//   while (q.size()) {
//     const cur = q.poll()?.val;
//     answer = cur![3];
//     cur &&
//       delta.forEach((el) => {
//         const nX = cur[0] + el[0];
//         const nY = cur[1] + el[1];
//         const nZ = cur[2] + el[2];
//         if (rangeCheck(nX, nY, nZ) && !tray[nX][nY][nZ]) {
//           tray[nX][nY][nZ] = 1;
//           zeroCnt--;
//           q.add(new Node([nX, nY, nZ, answer + 1]));
//         }
//       });
//   }
// };

// inpHandler(str2);
// bfs();
// console.log(zeroCnt ? -1 : answer);
// ////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////
// // array에서 index를 이용해 queue 구현
// import * as fs from "fs";
// const inputList = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [str1, ...str2] = inputList;
// const [m, n, h] = str1.trim().split(" ").map(Number);

// const delta = [
//   [-1, 0, 0],
//   [1, 0, 0],
//   [0, -1, 0],
//   [0, 1, 0],
//   [0, 0, -1],
//   [0, 0, 1],
// ];
// const tray: number[][][] = [];
// const q: number[][] = [...Array(m * n * h)];
// let zeroCnt = 0;

// let answer = 0;
// let qIdx = 0;
// const inpHandler = (str: string[]) => {
//   let index = 0;
//   for (let i = 0; i < h; i++) {
//     tray[i] = str
//       .slice(index, (index += n))
//       .map((el) => el.trim().split(" ").map(Number));
//   }
//   for (let i = 0; i < h; i++)
//     for (let j = 0; j < n; j++)
//       for (let k = 0; k < m; k++) {
//         if (!tray[i][j][k]) zeroCnt++;
//         else if (tray[i][j][k] === 1) q[qIdx++] = [i, j, k, 0];
//       }
// };

// const rangeCheck = (x, y, z) => {
//   return 0 <= x && x < h && 0 <= y && y < n && 0 <= z && z < m;
// };

// const bfs = () => {
//   let pointer = 0;
//   while (1) {
//     const cur = q[pointer++];
//     if (!cur) break;
//     else {
//       answer = cur[3];
//       delta.forEach((el) => {
//         const nX = cur[0] + el[0];
//         const nY = cur[1] + el[1];
//         const nZ = cur[2] + el[2];
//         if (rangeCheck(nX, nY, nZ) && !tray[nX][nY][nZ]) {
//           tray[nX][nY][nZ] = 1;
//           zeroCnt--;
//           q[qIdx++] = [nX, nY, nZ, answer + 1];
//         }
//       });
//     }
//   }
// };

// inpHandler(str2);
// bfs();
// console.log(zeroCnt ? -1 : answer);
