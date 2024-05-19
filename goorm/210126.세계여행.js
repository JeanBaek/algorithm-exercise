// Run by Node.js
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(N, M, countries, paths) {
  const adj = Array.from({ length: N + 1 }, () => []);
  
  for (let [a, b] of paths) {
    adj[a].push(b);
    adj[b].push(a);
  }
  
  function bfs(start, languages) {
    const queue = [start];
    const visited = Array(N + 1).fill(false);
    visited[start] = true;
    let count = 1;
    
    while (queue.length > 0) {
      const node = queue.shift();
      for (let neighbor of adj[node]) {
        if (!visited[neighbor] && languages.includes(countries[neighbor - 1])) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      }
    }
    return count;
  }
  
  const knownLanguage = countries[0]; // Language of the 1st country
  let maxCountries = 0;
  
  // Try learning each possible language
  for (let lang = 1; lang <= 10; lang++) {
    if (lang !== knownLanguage) {
      const count = bfs(1, [knownLanguage, lang]);
      maxCountries = Math.max(maxCountries, count);
    }
  }
  
  console.log(maxCountries);
}
let countryCount = 0;
let pathCount = 0;
let countries = []; // index+1는 나라의 번호, 값은 나라가 사용하는 언어의 번호이다.
let countryPaths = []; // ['1 2', '2 3'] 식의 연결고리

rl.on('line', (line) => {
  if (!countryCount) {
    // 첫번째 줄
    const meta = line.split(' ');
    countryCount = +meta[0];
    pathCount = +meta[1];
    
  } else if (countryCount !== countries.length) {
    // 두번째 줄
    countries = line.split(' ').map(Number);
    
  } else {
    countryPaths.push(line.split(' '));
  }
  
  if (pathCount === countryPaths.length) {
    rl.close();
  }
});

rl.on('close', () => {
  // console.log("Hello Goorm! Your input is ", N, targetNum, data);
  solution(countryCount, pathCount, countries, countryPaths)
  process.exit();
})
