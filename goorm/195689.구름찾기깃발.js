function solution(N, targetNum, data) {
  function countCloudsAround(r, c) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Skip the center cell itself
        const nr = r + i;
        const nc = c + j;
        if (nr >= 0 && nr < N && nc >= 0 && nc < N && data[nr][nc] === '1') {
          count++;
        }
      }
    }
    return count;
  }
  
  let flagCount = 0;
  
  // Loop through each cell to check if it can have a flag
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (data[r][c] === '0') { // Only consider empty cells for flags
        const clouds = countCloudsAround(r, c);
        if (clouds === targetNum) {
          flagCount++;
        }
      }
    }
  }
  
  console.log(flagCount);
}


const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let targetNum = 0;
let count = 0;
let data = [];
rl.on('line', (line) => {
  if (!N) {
    // 첫번째 줄
    const [n, target] = line.split(' ');
    N = +n;
    targetNum = +target;
  } else {
    data.push(line.split(' '));
    count++;
  }
  
  if (count === N) {
    rl.close();
  }
});

rl.on('close', () => {
  // console.log("Hello Goorm! Your input is ", N, targetNum, data);
  solution(N, targetNum, data)
  process.exit();
})


