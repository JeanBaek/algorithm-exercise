const solution = (N, data) => {
  console.log(N);
  console.log(data);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;
  let count = 0;
  const data = [];
  
  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line);
      // data.push(line.split(' ').map((el) => +el));
      // data.push(line.split('').map((el) => el));
      // data.push(line.split('').map((el) => +el));
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }
  
  solution(N, data);
  process.exit();
})();