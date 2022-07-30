const fs = require("fs");
const filePath = "./boj.2751.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const merge = (left: number[], right: number[]) => {
  const sortedList: number[] = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      sortedList.push(left[leftIdx]);
      leftIdx++;
    } else {
      sortedList.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return sortedList.concat(left.slice(leftIdx), right.slice(rightIdx));
};

const mergeSort = (list: number[]) => {
  if (list.length < 2) return list;

  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const [len, ...list] = input;
console.log(mergeSort(list.map(Number)).join("\n"));

/* 아래 에러 우회를 위해 의미없는 export 추가

'--isolatedModules'에서는 'solving.ts'을(를) 컴파일할 수 없는데 전역 스크립트 파일로 간주되기 때문입니다. 모듈로 만들려면 가져오기, 내보내기 또는 빈 'export {}' 문을 추가하세요.ts(1208)

이 스크립트는 백준에 제출할 내용 그대로 만들고 싶기 때문에
fs를 가져오기(import)하는 대신 변수에 할당하는 방식을 따랐다. 
*/
export {};
